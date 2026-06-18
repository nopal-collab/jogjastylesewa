import { Shirt, MessageCircle, Ruler, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Shirt, title: "Pilih Model Jas", desc: "Lihat koleksi & pilih yang cocok dengan acaramu." },
  { icon: MessageCircle, title: "Chat WhatsApp", desc: "Konsultasi ukuran & ketersediaan dengan admin." },
  { icon: Ruler, title: "Datang & Fitting", desc: "Coba langsung di outlet Jogja, pastikan pas." },
  { icon: CheckCircle2, title: "Bayar & Pakai", desc: "Selesai. Tampil percaya diri di acaramu." },
];

export function Steps() {
  return (
    <section id="cara" className="relative py-24 lg:py-32 bg-gradient-dark">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Cara Sewa</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Cepat & Mudah dalam 4 Langkah</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-xl border border-border bg-card p-8 transition-all hover:border-gold/40">
              <span className="absolute -top-4 -right-2 font-display text-7xl text-gold/10 select-none">0{i + 1}</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/30">
                <s.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-5 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
