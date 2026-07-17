import { useState } from "react";
import { Pencil, Check, X, Plus, Trash2 } from "lucide-react";

const INITIAL = [
  { id: 1, q: "Bisa sewa dadakan?", a: "Bisa banget. Asal stok tersedia, booking hari ini bisa langsung dipakai. Chat dulu untuk cek ketersediaan." },
  { id: 2, q: "Ada ukuran besar?", a: "Tersedia ukuran S hingga XXXL. Kami juga punya opsi custom untuk badan yang spesifik." },
  { id: 3, q: "Bisa booking online?", a: "Bisa. Booking via WhatsApp, fitting di outlet, atau kami siapkan jas saat kamu datang." },
  { id: 4, q: "Bisa untuk wedding?", a: "Tentu. Kami punya koleksi khusus wedding, lengkap dengan kemeja, dasi/bow tie, sepatu, dan pocket square." },
  { id: 5, q: "Bisa custom paket?", a: "Bisa. Pilih item sesuai kebutuhan — chat admin untuk dapatkan harga terbaik." },
];

type FaqItem = typeof INITIAL[0];

export function AdminFaq() {
  const [items, setItems] = useState<FaqItem[]>(INITIAL);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [draft, setDraft] = useState<Partial<FaqItem>>({});
  const [adding, setAdding] = useState(false);
  const [newItem, setNewItem] = useState({ q: "", a: "" });
  const [saved, setSaved] = useState(false);

  function flash() { setSaved(true); setTimeout(() => setSaved(false), 2000); }

  function startEdit(item: FaqItem) { setEditingId(item.id); setDraft({ ...item }); }
  function cancelEdit() { setEditingId(null); setDraft({}); }

  function saveEdit(id: number) {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...draft } : it)));
    setEditingId(null);
    setDraft({});
    flash();
  }

  function deleteItem(id: number) {
    if (confirm("Hapus FAQ ini?")) setItems((prev) => prev.filter((it) => it.id !== id));
  }

  function addItem() {
    if (!newItem.q || !newItem.a) return;
    setItems((prev) => [...prev, { id: Date.now(), ...newItem }]);
    setNewItem({ q: "", a: "" });
    setAdding(false);
    flash();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl">FAQ</h2>
          <p className="text-sm text-muted-foreground mt-1">Tambah, edit, atau hapus pertanyaan yang sering ditanya</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && <span className="text-xs text-gold flex items-center gap-1"><Check className="h-3 w-3" /> Tersimpan!</span>}
          <button onClick={() => setAdding(true)} className="flex items-center gap-1.5 rounded-lg bg-gradient-gold px-4 py-2 text-xs font-semibold text-primary-foreground">
            <Plus className="h-3.5 w-3.5" /> Tambah FAQ
          </button>
        </div>
      </div>

      {/* Add form */}
      {adding && (
        <div className="mb-4 rounded-xl border border-gold/40 bg-background p-5 space-y-3">
          <h3 className="text-sm font-semibold text-gold">FAQ Baru</h3>
          <div>
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Pertanyaan</label>
            <input value={newItem.q} onChange={(e) => setNewItem((n) => ({ ...n, q: e.target.value }))} className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none" />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Jawaban</label>
            <textarea value={newItem.a} onChange={(e) => setNewItem((n) => ({ ...n, a: e.target.value }))} rows={3} className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none resize-none" />
          </div>
          <div className="flex gap-2">
            <button onClick={addItem} className="flex items-center gap-1.5 rounded-lg bg-gradient-gold px-4 py-2 text-xs font-semibold text-primary-foreground"><Check className="h-3.5 w-3.5" /> Simpan</button>
            <button onClick={() => setAdding(false)} className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs"><X className="h-3.5 w-3.5" /> Batal</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={item.id} className="rounded-xl border border-border bg-background p-5 hover:border-gold/30 transition">
            {editingId === item.id ? (
              <div className="space-y-3">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Pertanyaan</label>
                  <input value={draft.q ?? ""} onChange={(e) => setDraft((d) => ({ ...d, q: e.target.value }))} className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Jawaban</label>
                  <textarea value={draft.a ?? ""} onChange={(e) => setDraft((d) => ({ ...d, a: e.target.value }))} rows={4} className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none resize-none" />
                </div>
                <div className="flex gap-2">
                  <button onClick={() => saveEdit(item.id)} className="flex items-center gap-1.5 rounded-lg bg-gradient-gold px-4 py-2 text-xs font-semibold text-primary-foreground"><Check className="h-3.5 w-3.5" /> Simpan</button>
                  <button onClick={cancelEdit} className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs"><X className="h-3.5 w-3.5" /> Batal</button>
                </div>
              </div>
            ) : (
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/30 text-[10px] text-gold">{idx + 1}</span>
                    <div>
                      <p className="font-semibold text-sm">{item.q}</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">{item.a}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <button onClick={() => startEdit(item)} className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs hover:border-gold/50 hover:text-gold transition"><Pencil className="h-3.5 w-3.5" /> Edit</button>
                  <button onClick={() => deleteItem(item.id)} className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs hover:border-destructive/50 hover:text-destructive transition"><Trash2 className="h-3.5 w-3.5" /> Hapus</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
