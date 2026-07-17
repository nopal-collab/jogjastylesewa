import { useEffect, useState } from "react";
import { Flame, MessageCircle } from "lucide-react";
import { WA_URL } from "./WhatsAppButton";

function useCountdown() {
  const [t, setT] = useState({ h: 0, m: 0, s: 0 });
  useEffect(() => {
    const target = new Date();
    target.setHours(23, 59, 59, 0);
    const id = setInterval(() => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setT({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function Promo() {
  const { h, m, s } = useCountdown();
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-card p-10 lg:p-16 shadow-premium">
          <div className="absolute inset-0 bg-radial-gold opacity-60" />
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/60 px-3 py-1 text-xs uppercase tracking-widest text-gold backdrop-blur">
                <Flame className="h-3 w-3" /> Promo Hari Ini
              </div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                BUTUH JAS <span className="text-gradient-gold">DADAKAN?</span><br/>CHAT SEKARANG!
              </h2>
              <p className="mt-4 text-muted-foreground">
                Slot terbatas hari ini · Banyak booking menjelang musim wisuda. Amankan jasmu sebelum kehabisan.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-md bg-gradient-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" /> Chat WhatsApp Sekarang
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { v: pad(h), l: "Jam" },
                { v: pad(m), l: "Menit" },
                { v: pad(s), l: "Detik" },
              ].map((b) => (
                <div key={b.l} className="rounded-2xl border border-gold/30 bg-background/60 p-6 backdrop-blur">
                  <div className="font-display text-5xl text-gradient-gold tabular-nums">{b.v}</div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{b.l}</div>
                </div>
              ))}
              <div className="col-span-3 mt-2 text-xs text-muted-foreground">
                ⚡ Slot fitting hari ini hampir penuh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
