import { Check, Crown } from "lucide-react";
import { WA_URL } from "./WhatsAppButton";

const tiers = [
  {
    name: "Paket Hemat",
    price: "99K",
    items: ["Jas", "Celana"],
    cta: "Pilih Paket Hemat",
  },
  {
    name: "Paket Premium",
    price: "149K",
    items: ["Jas", "Celana", "Kemeja", "Dasi"],
    badge: "Paling Favorit",
    cta: "Pilih Paket Premium",
  },
  {
    name: "Paket Lengkap",
    price: "199K",
    items: ["Jas", "Celana", "Kemeja", "Dasi", "Sepatu"],
    cta: "Pilih Paket Lengkap",
  },
];

export function Pricing() {
  return (
    <section id="paket" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Paket Harga</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Pilih Paket Sesuai Kebutuhan</h2>
          <p className="mt-4 text-muted-foreground">Harga jujur, tanpa biaya tersembunyi. Bisa custom paket lewat WhatsApp.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t) => {
            const featured = !!t.badge;
            return (
              <div
                key={t.name}
                className={`relative rounded-2xl border p-8 transition-all ${
                  featured
                    ? "border-gold/60 bg-card shadow-gold lg:scale-105"
                    : "border-border bg-card hover:border-gold/40"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-gold px-4 py-1 text-xs font-semibold text-primary-foreground shadow-gold">
                    <Crown className="h-3 w-3" /> {t.badge}
                  </span>
                )}
                <h3 className="font-display text-2xl">{t.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">Mulai</span>
                  <span className="font-display text-5xl text-gradient-gold">{t.price}</span>
                </div>
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                <ul className="space-y-3">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-gold" /> {i}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-md py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    featured
                      ? "bg-gradient-gold text-primary-foreground shadow-gold"
                      : "border border-gold/50 text-gold hover:bg-gold/10"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
