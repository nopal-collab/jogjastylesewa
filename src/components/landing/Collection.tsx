import hitam from "@/assets/jas-hitam.jpg";
import wedding from "@/assets/jas-wedding.jpg";
import wisuda from "@/assets/jas-wisuda.jpg";
import interview from "@/assets/jas-interview.jpg";
import korean from "@/assets/jas-korean.jpg";
import slimfit from "@/assets/jas-slimfit.jpg";
import { WA_URL } from "./WhatsAppButton";

const items = [
  { img: hitam, name: "Jas Hitam Formal", price: "99K", tag: "Best Seller" },
  { img: wedding, name: "Jas Wedding", price: "199K", tag: "Premium" },
  { img: wisuda, name: "Jas Wisuda", price: "119K", tag: "Popular" },
  { img: interview, name: "Jas Interview", price: "99K", tag: "Pro" },
  { img: korean, name: "Jas Korean Style", price: "149K", tag: "Trending" },
  { img: slimfit, name: "Jas Slim Fit", price: "129K", tag: "Modern" },
];

export function Collection() {
  return (
    <section id="koleksi" className="relative py-24 lg:py-32 bg-gradient-dark">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Koleksi Pilihan</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Signature Collection</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Setiap jas dirawat seperti milik pribadi. Pilih model favorit, fitting di tempat, langsung pakai.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.name} className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-gold/50 hover:shadow-gold">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full border border-gold/40 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-widest text-gold backdrop-blur">
                  {it.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl">{it.name}</h3>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Mulai</div>
                    <div className="font-display text-xl text-gold">{it.price}</div>
                  </div>
                </div>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-gradient-gold py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]"
                >
                  Booking Sekarang
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
