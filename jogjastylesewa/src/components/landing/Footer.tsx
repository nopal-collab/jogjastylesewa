import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react";
import { WA_URL } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer id="kontak" className="relative border-t border-border bg-background pt-20 pb-28 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="font-display text-3xl">sewajas<span className="text-gold">.net</span></div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Sewa jas premium di Jogja untuk wisuda, wedding, interview, sidang, dan event formal. Harga ramah mahasiswa, kualitas tetap mewah.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <iframe
                title="Lokasi sewajas.net"
                src="https://www.google.com/maps?q=Yogyakarta&output=embed"
                className="h-56 w-full grayscale-[40%] contrast-110"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold">Kontak</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-gold mt-0.5" /> 0853-3000-0029</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5" /> Yogyakarta, Indonesia</li>
              <li className="flex items-start gap-2"><Instagram className="h-4 w-4 text-gold mt-0.5" /> @sewajas.net</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold">Booking</h4>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold"
            >
              <MessageCircle className="h-4 w-4" /> Chat WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold/40 px-5 py-3 text-sm font-medium text-gold hover:bg-gold/10"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>

        <div className="mt-14 hairline" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} sewajas.net · Sewa Jas Premium Jogja</div>
          <div>Dibuat dengan cinta untuk para mahasiswa Jogja.</div>
        </div>
      </div>
    </footer>
  );
}
