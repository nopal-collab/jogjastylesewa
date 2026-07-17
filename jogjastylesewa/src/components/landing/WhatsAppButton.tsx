import { MessageCircle } from "lucide-react";

export const WA_URL = "https://wa.me/6285330000029";

export function FloatingWhatsApp() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-white shadow-premium transition-transform hover:scale-110 animate-float"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 rounded-full ring-2 ring-[var(--whatsapp)] opacity-60 animate-ping" />
    </a>
  );
}

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur px-4 py-3 md:hidden">
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-gold py-3 text-sm font-semibold text-primary-foreground shadow-gold"
      >
        <MessageCircle className="h-5 w-5" />
        Chat WhatsApp Sekarang
      </a>
    </div>
  );
}
