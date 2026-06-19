import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Collection } from "@/components/landing/Collection";
import { Pricing } from "@/components/landing/Pricing";
import { Steps } from "@/components/landing/Steps";
import { Testimonials } from "@/components/landing/Testimonials";
import { Promo } from "@/components/landing/Promo";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp, StickyMobileCTA } from "@/components/landing/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sewa Jas Premium Jogja · sewajas.net · Wisuda, Wedding, Interview" },
      { name: "description", content: "Sewa jas Jogja premium & murah untuk wisuda, wedding, interview, sidang. Bisa dadakan, banyak ukuran, harga mahasiswa mulai 99K. Chat WhatsApp sekarang." },
      { name: "keywords", content: "sewa jas Jogja, rental jas Jogja, sewa jas wisuda Jogja, sewa jas wedding Jogja, sewa jas murah Jogja" },
      { property: "og:title", content: "sewajas.net · Sewa Jas Premium di Jogja" },
      { property: "og:description", content: "Sewa jas premium Jogja untuk wisuda, wedding, interview, sidang & event formal. Mulai 99K." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "sewajas.net",
        description: "Sewa jas premium di Jogja",
        telephone: "+6285330000029",
        areaServed: "Yogyakarta",
        priceRange: "Rp 99.000 - Rp 199.000",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Collection />
        <Pricing />
        <Steps />
        <Testimonials />
        <Promo />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
}
