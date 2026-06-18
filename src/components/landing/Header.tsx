import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WA_URL } from "./WhatsAppButton";

const links = [
  { href: "#home", label: "Home" },
  { href: "#koleksi", label: "Koleksi Jas" },
  { href: "#paket", label: "Paket Harga" },
  { href: "#cara", label: "Cara Sewa" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight">
            sewajas<span className="text-gold">.net</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-105"
        >
          Booking Jas
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <div className="flex flex-col px-4 py-4 gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm text-muted-foreground hover:text-gold">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
