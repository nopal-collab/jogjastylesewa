import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Bisa sewa dadakan?", a: "Bisa banget. Asal stok tersedia, booking hari ini bisa langsung dipakai. Chat dulu untuk cek ketersediaan." },
  { q: "Ada ukuran besar?", a: "Tersedia ukuran S hingga XXXL. Kami juga punya opsi custom untuk badan yang spesifik." },
  { q: "Bisa booking online?", a: "Bisa. Booking via WhatsApp, fitting di outlet, atau kami siapkan jas saat kamu datang." },
  { q: "Bisa untuk wedding?", a: "Tentu. Kami punya koleksi khusus wedding, lengkap dengan kemeja, dasi/bow tie, sepatu, dan pocket square." },
  { q: "Bisa custom paket?", a: "Bisa. Pilih item sesuai kebutuhan — chat admin untuk dapatkan harga terbaik." },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-gradient-dark">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">FAQ</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Pertanyaan yang Sering Ditanya</h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-gold/50"
            >
              <AccordionTrigger className="text-left font-display text-lg hover:text-gold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
