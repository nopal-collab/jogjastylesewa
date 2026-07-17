import { useState } from "react";
import { Pencil, Check, X, Plus, Trash2 } from "lucide-react";

const INITIAL = [
  { id: 1, name: "Rizky Pratama", role: "Wisudawan UGM", text: "Jasnya bersih, wangi, dan pas banget di badan. Admin fast response, booking H-1 masih dapat. Sukses banget wisudaku!" },
  { id: 2, name: "Andika & Sasha", role: "Pasangan Wedding", text: "Pakai paket lengkap buat lamaran. Kualitas premium, foto jadi bagus. Harga jujur, tidak ada biaya mendadak." },
  { id: 3, name: "Bagas Aditya", role: "Fresh Graduate · Interview BUMN", text: "Buat interview pertama, sewa jas slim fit. Hasilnya keterima! Recommended buat yang butuh tampil profesional." },
  { id: 4, name: "Dimas Saputra", role: "Sidang Skripsi UNY", text: "Booking dadakan jam 9 malam, paginya udah bisa fitting. Top banget sewajas.net." },
];

type Testimonial = typeof INITIAL[0];

export function AdminTestimonials() {
  const [items, setItems] = useState<Testimonial[]>(INITIAL);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [draft, setDraft] = useState<Partial<Testimonial>>({});
  const [adding, setAdding] = useState(false);
  const [newItem, setNewItem] = useState({ name: "", role: "", text: "" });
  const [saved, setSaved] = useState(false);

  function startEdit(item: Testimonial) {
    setEditingId(item.id);
    setDraft({ ...item });
  }

  function cancelEdit() { setEditingId(null); setDraft({}); }

  function saveEdit(id: number) {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...draft } : it)));
    setEditingId(null);
    setDraft({});
    flash();
  }

  function deleteItem(id: number) {
    if (confirm("Hapus testimoni ini?")) setItems((prev) => prev.filter((it) => it.id !== id));
  }

  function addItem() {
    if (!newItem.name || !newItem.text) return;
    setItems((prev) => [...prev, { id: Date.now(), ...newItem }]);
    setNewItem({ name: "", role: "", text: "" });
    setAdding(false);
    flash();
  }

  function flash() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl">Testimoni</h2>
          <p className="text-sm text-muted-foreground mt-1">Tambah, edit, atau hapus testimoni pelanggan</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && <span className="text-xs text-gold flex items-center gap-1"><Check className="h-3 w-3" /> Tersimpan!</span>}
          <button onClick={() => setAdding(true)} className="flex items-center gap-1.5 rounded-lg bg-gradient-gold px-4 py-2 text-xs font-semibold text-primary-foreground">
            <Plus className="h-3.5 w-3.5" /> Tambah
          </button>
        </div>
      </div>

      {/* Add new form */}
      {adding && (
        <div className="mb-4 rounded-xl border border-gold/40 bg-background p-5 space-y-3">
          <h3 className="text-sm font-semibold text-gold">Testimoni Baru</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Nama</label>
              <input value={newItem.name} onChange={(e) => setNewItem((n) => ({ ...n, name: e.target.value }))} className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none" />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Keterangan (role/acara)</label>
              <input value={newItem.role} onChange={(e) => setNewItem((n) => ({ ...n, role: e.target.value }))} placeholder="Wisudawan UGM" className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Isi Testimoni</label>
            <textarea value={newItem.text} onChange={(e) => setNewItem((n) => ({ ...n, text: e.target.value }))} rows={3} className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none resize-none" />
          </div>
          <div className="flex gap-2">
            <button onClick={addItem} className="flex items-center gap-1.5 rounded-lg bg-gradient-gold px-4 py-2 text-xs font-semibold text-primary-foreground"><Check className="h-3.5 w-3.5" /> Simpan</button>
            <button onClick={() => setAdding(false)} className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs hover:border-gold/40"><X className="h-3.5 w-3.5" /> Batal</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-xl border border-border bg-background p-5 hover:border-gold/30 transition">
            {editingId === item.id ? (
              <div className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Nama</label>
                    <input value={draft.name ?? ""} onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))} className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Role / Acara</label>
                    <input value={draft.role ?? ""} onChange={(e) => setDraft((d) => ({ ...d, role: e.target.value }))} className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Isi Testimoni</label>
                  <textarea value={draft.text ?? ""} onChange={(e) => setDraft((d) => ({ ...d, text: e.target.value }))} rows={3} className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm focus:border-gold/60 focus:outline-none resize-none" />
                </div>
                <div className="flex gap-2">
                  <button onClick={() => saveEdit(item.id)} className="flex items-center gap-1.5 rounded-lg bg-gradient-gold px-4 py-2 text-xs font-semibold text-primary-foreground"><Check className="h-3.5 w-3.5" /> Simpan</button>
                  <button onClick={cancelEdit} className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs"><X className="h-3.5 w-3.5" /> Batal</button>
                </div>
              </div>
            ) : (
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-gold font-display text-primary-foreground text-sm">{item.name[0]}</div>
                    <div>
                      <div className="text-sm font-semibold">{item.name}</div>
                      <div className="text-[11px] text-muted-foreground">{item.role}</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">"{item.text}"</p>
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
