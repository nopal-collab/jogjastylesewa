import { Wallet, Shirt, Zap, Clock, Sparkles, MapPin } from "lucide-react";

const items = [
  { icon: Wallet, title: "Harga Terjangkau", desc: "Ramah kantong mahasiswa mulai 99K." },
  { icon: Shirt, title: "Banyak Pilihan Jas", desc: "Slim fit, formal, Korean style, wedding." },
  { icon: Zap, title: "Fast Response", desc: "Admin standby, balas WA dalam hitungan menit." },
  { icon: Clock, title: "Booking Dadakan", desc: "Butuh hari ini? Tetap kami usahakan." },
  { icon: Sparkles, title: "Jas Bersih & Premium", desc: "Dry clean, wangi, siap pakai." },
  { icon: MapPin, title: "Lokasi Mudah Dijangkau", desc: "Pusat kota Jogja, dekat kampus." },
];

export function Features() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Kenapa sewajas.net</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Premium yang Ramah Mahasiswa</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-gold" />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative bg-card p-8 transition-colors hover:bg-secondary">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/30 transition-all group-hover:bg-gold/20">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
