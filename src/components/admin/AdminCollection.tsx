import { useState } from "react";
import { Pencil, Check, X } from "lucide-react";

const INITIAL_ITEMS = [
  { id: 1, name: "Jas Hitam Formal", price: "99K", tag: "Best Seller", imgUrl: "" },
  { id: 2, name: "Jas Wedding", price: "199K", tag: "Premium", imgUrl: "" },
  { id: 3, name: "Jas Wisuda", price: "119K", tag: "Popular", imgUrl: "" },
  { id: 4, name: "Jas Interview", price: "99K", tag: "Pro", imgUrl: "" },
  { id: 5, name: "Jas Korean Style", price: "149K", tag: "Trending", imgUrl: "" },
  { id: 6, name: "Jas Slim Fit", price: "129K", tag: "Modern", imgUrl: "" },
];

type Item = typeof INITIAL_ITEMS[0];

export function AdminCollection() {
  const [items, setItems] = useState<Item[]>(INITIAL_ITEMS);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [draft, setDraft] = useState<Partial<Item>>({});
  const [saved, setSaved] = useState(false);

  function startEdit(item: Item) {
    setEditingId(item.id);
    setDraft({ ...item });
  }

  function cancelEdit() {
    setEditingId(null);
    setDraft({});
  }

  function saveEdit(id: number) {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...draft } : it)));
    setEditingId(null);
    setDraft({});
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl">Koleksi Jas</h2>
          <p className="text-sm text-muted-foreground mt-1">Edit nama, harga, dan label badge koleksi</p>
        </div>
        {saved && (
          <span className="text-xs text-gold flex items-center gap-1">
            <Check className="h-3 w-3" /> Tersimpan!
          </span>
        )}
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-border bg-background p-5 transition hover:border-gold/30"
          >
            {editingId === item.id ? (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Nama Produk</label>
                    <input
                      value={draft.name ?? ""}
                      onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                      className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Harga (contoh: 99K)</label>
                    <input
                      value={draft.price ?? ""}
                      onChange={(e) => setDraft((d) => ({ ...d, price: e.target.value }))}
                      className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Badge Label</label>
                    <input
                      value={draft.tag ?? ""}
                      onChange={(e) => setDraft((d) => ({ ...d, tag: e.target.value }))}
                      className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => saveEdit(item.id)}
                    className="flex items-center gap-1.5 rounded-lg bg-gradient-gold px-4 py-2 text-xs font-semibold text-primary-foreground"
                  >
                    <Check className="h-3.5 w-3.5" /> Simpan
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs hover:border-gold/40"
                  >
                    <X className="h-3.5 w-3.5" /> Batal
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-gold font-display text-primary-foreground text-sm font-bold">
                    {item.id}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{item.name}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-gold font-display">Mulai {item.price}</span>
                      <span className="text-[10px] border border-gold/30 rounded-full px-2 py-0.5 text-muted-foreground">{item.tag}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => startEdit(item)}
                  className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs hover:border-gold/50 hover:text-gold transition"
                >
                  <Pencil className="h-3.5 w-3.5" /> Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        * Perubahan gambar dilakukan langsung di kode/file aset. Harga & nama bisa diubah di sini.
      </p>
    </div>
  );
}
