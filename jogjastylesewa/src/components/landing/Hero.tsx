import heroImg from "@/assets/hero-suit.jpg";
import { MessageCircle, Sparkles, Check } from "lucide-react";
import { WA_URL } from "./WhatsAppButton";

const points = [
  "Bisa dadakan",
  "Banyak pilihan ukuran",
  "Jas bersih & wangi",
  "Harga mahasiswa",
  "Konsultasi gratis",
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24 bg-radial-gold">
      <div className="absolute inset-0 bg-gradient-dark opacity-90" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
            <Sparkles className="h-3 w-3" /> Premium Suit Rental · Jogja
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            SEWA JAS <span className="text-gradient-gold">PREMIUM</span> DI JOGJA
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Bikin tampil percaya diri untuk wisuda, wedding, interview, sidang, dan acara formal lainnya.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-foreground/90">
                <Check className="h-4 w-4 text-gold" /> {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Tanya Ketersediaan Jas
            </a>
            <a
              href="#koleksi"
              className="inline-flex items-center rounded-md border border-gold/50 px-7 py-4 text-base font-medium text-gold hover:bg-gold/10"
            >
              Lihat Koleksi
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div><span className="text-2xl font-display text-gold">2.5K+</span><div>Pelanggan Puas</div></div>
            <div className="h-10 w-px bg-border" />
            <div><span className="text-2xl font-display text-gold">5★</span><div>Rating Google</div></div>
            <div className="h-10 w-px bg-border" />
            <div><span className="text-2xl font-display text-gold">24/7</span><div>Fast Response</div></div>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-gold/20 shadow-premium">
            <img
              src={heroImg}
              alt="Model pria memakai jas hitam premium di Jogja"
              width={1080}
              height={1920}
              className="h-[640px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-gold/30 bg-background/70 px-5 py-4 backdrop-blur">
              <div>
                <div className="text-xs uppercase tracking-widest text-gold">Signature Collection</div>
                <div className="font-display text-xl">Black Tuxedo · Premium</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Mulai</div>
                <div className="font-display text-2xl text-gold">99K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
