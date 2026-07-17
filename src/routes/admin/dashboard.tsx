import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Package, Tag, Star, HelpCircle, LayoutDashboard } from "lucide-react";
import { AdminCollection } from "@/components/admin/AdminCollection";
import { AdminPricing } from "@/components/admin/AdminPricing";
import { AdminTestimonials } from "@/components/admin/AdminTestimonials";
import { AdminFaq } from "@/components/admin/AdminFaq";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboard,
});

type Tab = "collection" | "pricing" | "testimonials" | "faq";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "collection", label: "Koleksi Jas", icon: <Package className="h-4 w-4" /> },
  { id: "pricing", label: "Paket Harga", icon: <Tag className="h-4 w-4" /> },
  { id: "testimonials", label: "Testimoni", icon: <Star className="h-4 w-4" /> },
  { id: "faq", label: "FAQ", icon: <HelpCircle className="h-4 w-4" /> },
];

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("collection");
  const [userEmail, setUserEmail] = useState("");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate({ to: "/admin/login" });
      } else {
        setUserEmail(session.user.email ?? "");
        setChecking(false);
      }
    });
  }, [navigate]);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate({ to: "/admin/login" });
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground text-sm">Memeriksa sesi...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-5 w-5 text-gold" />
            <div>
              <h1 className="font-display text-lg leading-none">Admin Panel</h1>
              <p className="text-[10px] text-muted-foreground mt-0.5">Jogja Style Sewa</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-xs text-muted-foreground">{userEmail}</span>
            <a
              href="/"
              target="_blank"
              className="text-xs text-gold hover:underline"
            >
              Lihat Website
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs hover:border-destructive/50 hover:text-destructive transition"
            >
              <LogOut className="h-3.5 w-3.5" />
              Keluar
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-2 flex-wrap mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                  : "border border-border bg-card text-muted-foreground hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="rounded-2xl border border-border bg-card p-6">
          {activeTab === "collection" && <AdminCollection />}
          {activeTab === "pricing" && <AdminPricing />}
          {activeTab === "testimonials" && <AdminTestimonials />}
          {activeTab === "faq" && <AdminFaq />}
        </div>
      </div>
    </div>
  );
}
