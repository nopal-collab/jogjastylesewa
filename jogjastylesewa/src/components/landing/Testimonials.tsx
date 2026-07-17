import { Star } from "lucide-react";

const items = [
  {
    name: "Rizky Pratama",
    role: "Wisudawan UGM",
    text: "Jasnya bersih, wangi, dan pas banget di badan. Admin fast response, booking H-1 masih dapat. Sukses banget wisudaku!",
  },
  {
    name: "Andika & Sasha",
    role: "Pasangan Wedding",
    text: "Pakai paket lengkap buat lamaran. Kualitas premium, foto jadi bagus. Harga jujur, tidak ada biaya mendadak.",
  },
  {
    name: "Bagas Aditya",
    role: "Fresh Graduate · Interview BUMN",
    text: "Buat interview pertama, sewa jas slim fit. Hasilnya keterima! Recommended buat yang butuh tampil profesional.",
  },
  {
    name: "Dimas Saputra",
    role: "Sidang Skripsi UNY",
    text: "Booking dadakan jam 9 malam, paginya udah bisa fitting. Top banget sewajas.net.",
  },
];

export function Testimonials() {
  return (
    <section id="testimoni" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Testimoni</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Kata Mereka yang Sudah Tampil</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-gold/40 hover:shadow-gold">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-xl leading-relaxed text-foreground">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold font-display text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
