import { useState } from "react";
import { Pencil, Check, X, Plus, Trash2 } from "lucide-react";

const INITIAL_TIERS = [
  { id: 1, name: "Paket Hemat", price: "99K", badge: "", items: ["Jas", "Celana"] },
  { id: 2, name: "Paket Premium", price: "149K", badge: "Paling Favorit", items: ["Jas", "Celana", "Kemeja", "Dasi"] },
  { id: 3, name: "Paket Lengkap", price: "199K", badge: "", items: ["Jas", "Celana", "Kemeja", "Dasi", "Sepatu"] },
];

type Tier = typeof INITIAL_TIERS[0];

export function AdminPricing() {
  const [tiers, setTiers] = useState<Tier[]>(INITIAL_TIERS);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [draft, setDraft] = useState<Partial<Tier & { itemsText: string }>>({});
  const [saved, setSaved] = useState(false);

  function startEdit(tier: Tier) {
    setEditingId(tier.id);
    setDraft({ ...tier, itemsText: tier.items.join(", ") });
  }

  function cancelEdit() {
    setEditingId(null);
    setDraft({});
  }

  function saveEdit(id: number) {
    const items = (draft.itemsText ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    setTiers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...draft, items } : t))
    );
    setEditingId(null);
    setDraft({});
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl">Paket Harga</h2>
          <p className="text-sm text-muted-foreground mt-1">Edit nama paket, harga, badge, dan item yang termasuk</p>
        </div>
        {saved && (
          <span className="text-xs text-gold flex items-center gap-1">
            <Check className="h-3 w-3" /> Tersimpan!
          </span>
        )}
      </div>

      <div className="space-y-4">
        {tiers.map((tier) => (
          <div key={tier.id} className="rounded-xl border border-border bg-background p-5 hover:border-gold/30 transition">
            {editingId === tier.id ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Nama Paket</label>
                    <input
                      value={draft.name ?? ""}
                      onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                      className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Harga (contoh: 149K)</label>
                    <input
                      value={draft.price ?? ""}
                      onChange={(e) => setDraft((d) => ({ ...d, price: e.target.value }))}
                      className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Badge (kosongkan jika tidak ada)</label>
                    <input
                      value={draft.badge ?? ""}
                      onChange={(e) => setDraft((d) => ({ ...d, badge: e.target.value }))}
                      placeholder="contoh: Paling Favorit"
                      className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Item yang Termasuk (pisah dengan koma)
                  </label>
                  <input
                    value={draft.itemsText ?? ""}
                    onChange={(e) => setDraft((d) => ({ ...d, itemsText: e.target.value }))}
                    placeholder="Jas, Celana, Kemeja, Dasi"
                    className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none"
                  />
                </div>
                <div className="flex gap-2">
                  <button onClick={() => saveEdit(tier.id)} className="flex items-center gap-1.5 rounded-lg bg-gradient-gold px-4 py-2 text-xs font-semibold text-primary-foreground">
                    <Check className="h-3.5 w-3.5" /> Simpan
                  </button>
                  <button onClick={cancelEdit} className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs hover:border-gold/40">
                    <X className="h-3.5 w-3.5" /> Batal
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{tier.name}</h3>
                    {tier.badge && (
                      <span className="text-[10px] border border-gold/40 rounded-full px-2 py-0.5 text-gold">{tier.badge}</span>
                    )}
                  </div>
                  <div className="text-gold font-display text-lg mt-1">Mulai {tier.price}</div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {tier.items.map((item) => (
                      <span key={item} className="text-[11px] bg-secondary rounded-full px-2.5 py-1 text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <button onClick={() => startEdit(tier)} className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs hover:border-gold/50 hover:text-gold transition">
                  <Pencil className="h-3.5 w-3.5" /> Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
