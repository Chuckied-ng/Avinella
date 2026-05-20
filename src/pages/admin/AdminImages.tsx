import React, { useEffect, useState, useRef } from 'react';
import { supabase, type SiteImage } from '@/lib/supabase';
import { seedAllContent } from '@/lib/seedContent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Pencil,
  Save,
  X,
  ImageIcon,
  ExternalLink,
  Plus,
  Trash2,
  Upload,
  Link2,
  Database,
  RefreshCw,
} from 'lucide-react';

const PAGE_LABELS: Record<string, string> = {
  home: 'Home',
  about: 'About Us',
  services: 'Services Overview',
  offshore: 'Offshore Service',
  procurement: 'Procurement Service',
  logistics: 'Logistics Service',
  hse: 'HSE',
  training: 'Training',
  careers: 'Careers',
  contact: 'Contact',
};

const SECTION_LABELS: Record<string, Record<string, string>> = {
  home: {
    hero: 'Hero Banner',
    services: 'Service Cards',
    about: 'Who We Are Photo',
    fleet: 'Fleet Grid',
    projects: 'Projects Grid',
    banner: 'Stats Banner',
    capabilities: 'Capabilities Photo',
    safety: 'Safety & Compliance',
    cta: 'CTA Background',
  },
  about: {
    hero: 'Hero Background',
    gallery: 'Photo Gallery Grid',
    values: 'Values Banner',
    why: 'Why Choose Us',
    services: 'Services Cards',
    overview: 'Company Overview',
    team: 'Team Photos',
    cta: 'CTA Background',
  },
  services: {
    fan: 'Hero Fan Cards',
    why: 'Why Choose Us – Main',
    grid: 'Services Grid Cards',
    choose: 'Choose Us Gallery',
    offshore: 'Offshore Sub-page',
    procurement: 'Procurement Sub-page',
    logistics: 'Logistics Sub-page',
    cta: 'Services CTA',
  },
  offshore: {
    hero: 'Hero Background',
    capabilities: 'Capabilities Photo',
  },
  procurement: {
    hero: 'Hero Photo',
    capabilities: 'Capabilities Photo',
  },
  logistics: {
    hero: 'Hero Photo',
    capabilities: 'Capabilities Photo',
  },
  hse: {
    hero: 'Hero Background',
    commitment: 'Safety Commitment',
    environment: 'Environment Section',
    team: 'HSE Team',
    cta: 'HSE CTA',
  },
  training: {
    hero: 'Hero Background',
    fan: 'Hero Fan Cards',
    cta: 'Training CTA',
  },
  careers: {
    hero: 'Hero Fan Cards',
    internship: 'Internship Section',
    culture: 'Culture Section',
  },
  contact: {
    hero: 'Hero Background',
    map: 'Office Location',
  },
};

const EMPTY_IMAGE: Omit<SiteImage, 'id' | 'created_at' | 'updated_at'> = {
  page: 'home',
  section: 'hero',
  label: '',
  image_url: '',
  alt_text: '',
  sort_order: 0,
};

export default function AdminImages() {
  const [images, setImages] = useState<SiteImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<SiteImage | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);
  const [filterPage, setFilterPage] = useState('all');
  const [previewErrors, setPreviewErrors] = useState<Set<string>>(new Set());
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMode, setUploadMode] = useState<'url' | 'file'>('url');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [seeding, setSeeding] = useState(false);
  const [seedMsg, setSeedMsg] = useState('');

  async function loadImages() {
    setLoading(true);
    const { data } = await supabase
      .from('site_images')
      .select('*')
      .order('page')
      .order('section')
      .order('sort_order');
    setImages(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    loadImages();
  }, []);

  async function handleFileUpload(file: File) {
    if (!editing) return;
    setUploading(true);
    try {
      const fileName = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
      const { data, error } = await supabase.storage
        .from('site-images')
        .upload(fileName, file, { cacheControl: '3600', upsert: false });
      if (error) throw error;
      const { data: urlData } = supabase.storage.from('site-images').getPublicUrl(data.path);
      setEditing({ ...editing, image_url: urlData.publicUrl });
      setPreviewErrors(prev => { const s = new Set(prev); s.delete(editing.id); return s; });
    } catch (err: any) {
      alert('Upload failed: ' + (err.message ?? err));
    } finally {
      setUploading(false);
    }
  }

  async function handleSave() {
    if (!editing) return;
    setSaving(true);
    try {
      if (isNew) {
        const { page, section, label, image_url, alt_text, sort_order } = editing as any;
        const { error } = await supabase.from('site_images').insert([{ page, section, label, image_url, alt_text, sort_order }]);
        if (error) throw error;
      } else {
        const { id, created_at, ...rest } = editing;
        const { error } = await supabase
          .from('site_images')
          .update({ ...rest, updated_at: new Date().toISOString() })
          .eq('id', id);
        if (error) throw error;
      }
      setEditing(null);
      setIsNew(false);
      await loadImages();
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    await supabase.from('site_images').delete().eq('id', id);
    setDeleteConfirm(null);
    setImages((prev) => prev.filter((i) => i.id !== id));
  }

  const allPages = ['all', ...Object.keys(PAGE_LABELS)];
  const filtered = filterPage === 'all' ? images : images.filter((i) => i.page === filterPage);

  const grouped = filtered.reduce<Record<string, SiteImage[]>>((acc, img) => {
    const key = `${img.page} / ${img.section}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(img);
    return acc;
  }, {});

  const sectionOptions = editing ? Object.keys(SECTION_LABELS[(editing as any).page] ?? {}) : [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Site Images</h2>
          <p className="text-gray-500 text-sm mt-1">Manage images displayed across the website. Changes go live immediately.</p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            {allPages.map((page) => (
              <button
                key={page}
                onClick={() => setFilterPage(page)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  filterPage === page
                    ? 'bg-[#002147] text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-[#002147]'
                }`}
              >
                {page === 'all' ? 'All Pages' : PAGE_LABELS[page] ?? page}
              </button>
            ))}
          </div>
          <Button
            onClick={() => {
              setEditing({ ...EMPTY_IMAGE, id: '', created_at: '', updated_at: '' } as any);
              setIsNew(true);
              setUploadMode('url');
            }}
            className="bg-[#002147] hover:bg-[#002147]/90 text-white rounded-xl flex items-center gap-2"
          >
            <Plus size={16} /> Add Image
          </Button>
        </div>
      </div>

      {/* Edit Form */}
      {editing && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-900 mb-5 text-lg">{isNew ? 'Add New Image' : 'Edit Image'}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Preview */}
            <div className="lg:col-span-1">
              <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide mb-2 block">Preview</Label>
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative">
                {editing.image_url && !previewErrors.has(editing.id) ? (
                  <img
                    src={editing.image_url}
                    alt={editing.alt_text}
                    className="w-full h-full object-cover"
                    onError={() => setPreviewErrors(prev => new Set(prev).add(editing.id))}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-2">
                    <ImageIcon size={32} />
                    <span className="text-xs">No image</span>
                  </div>
                )}
                {uploading && (
                  <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                    <div className="text-xs text-[#002147] font-semibold animate-pulse">Uploading...</div>
                  </div>
                )}
              </div>
              {/* Upload mode toggle */}
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => setUploadMode('url')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium border transition-all ${
                    uploadMode === 'url' ? 'bg-[#002147] text-white border-[#002147]' : 'bg-white text-gray-500 border-gray-200 hover:border-[#002147]'
                  }`}
                >
                  <Link2 size={12} /> Paste URL
                </button>
                <button
                  onClick={() => setUploadMode('file')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium border transition-all ${
                    uploadMode === 'file' ? 'bg-[#002147] text-white border-[#002147]' : 'bg-white text-gray-500 border-gray-200 hover:border-[#002147]'
                  }`}
                >
                  <Upload size={12} /> Upload File
                </button>
              </div>
            </div>

            {/* Fields */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
              {isNew && (
                <>
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide">Page *</Label>
                    <select
                      value={(editing as any).page}
                      onChange={(e) => setEditing({ ...editing, page: e.target.value, section: Object.keys(SECTION_LABELS[e.target.value] ?? {})[0] ?? '' } as any)}
                      className="w-full rounded-xl border border-gray-200 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#002147]/20"
                    >
                      {Object.entries(PAGE_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide">Section *</Label>
                    {sectionOptions.length > 0 ? (
                      <select
                        value={(editing as any).section}
                        onChange={(e) => setEditing({ ...editing, section: e.target.value } as any)}
                        className="w-full rounded-xl border border-gray-200 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#002147]/20"
                      >
                        {sectionOptions.map(s => (
                          <option key={s} value={s}>{SECTION_LABELS[(editing as any).page][s]}</option>
                        ))}
                      </select>
                    ) : (
                      <Input
                        value={(editing as any).section}
                        onChange={(e) => setEditing({ ...editing, section: e.target.value } as any)}
                        placeholder="e.g. hero, services"
                        className="rounded-xl"
                      />
                    )}
                  </div>
                </>
              )}

              {/* Image URL or File Upload */}
              <div className="space-y-2 md:col-span-2">
                {uploadMode === 'url' ? (
                  <>
                    <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide">Image URL *</Label>
                    <Input
                      value={editing.image_url}
                      onChange={(e) => {
                        setEditing({ ...editing, image_url: e.target.value });
                        setPreviewErrors(prev => { const s = new Set(prev); s.delete(editing.id); return s; });
                      }}
                      placeholder="https://images.unsplash.com/..."
                      className="rounded-xl font-mono text-xs"
                    />
                  </>
                ) : (
                  <>
                    <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide">Upload Image File *</Label>
                    <div
                      className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-[#002147] transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload size={24} className="mx-auto text-gray-300 mb-2" />
                      <p className="text-sm text-gray-500">Click to choose a file</p>
                      <p className="text-xs text-gray-400 mt-1">JPG, PNG, WebP up to 10MB</p>
                      {editing.image_url && uploadMode === 'file' && (
                        <p className="text-xs text-emerald-600 mt-2 font-medium truncate">✓ Uploaded</p>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(file);
                      }}
                    />
                  </>
                )}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide">Alt Text *</Label>
                <Input
                  value={editing.alt_text}
                  onChange={(e) => setEditing({ ...editing, alt_text: e.target.value })}
                  placeholder="Describe the image for accessibility"
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide">Label</Label>
                <Input
                  value={editing.label}
                  onChange={(e) => setEditing({ ...editing, label: e.target.value })}
                  placeholder="e.g. Hero Background"
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide">Sort Order</Label>
                <Input
                  type="number"
                  value={editing.sort_order}
                  onChange={(e) => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <Button
              onClick={handleSave}
              disabled={saving || uploading || !editing.image_url || !editing.alt_text}
              className="bg-[#002147] hover:bg-[#002147]/90 text-white rounded-xl flex items-center gap-2"
            >
              <Save size={15} /> {saving ? 'Saving...' : isNew ? 'Add Image' : 'Save Changes'}
            </Button>
            <Button variant="outline" onClick={() => { setEditing(null); setIsNew(false); }} className="rounded-xl flex items-center gap-2">
              <X size={15} /> Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Images Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-52 bg-gray-100 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : Object.keys(grouped).length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
          <ImageIcon size={48} className="text-gray-200 mx-auto mb-4" />
          <p className="text-gray-400 font-medium">No images found</p>
          <p className="text-gray-300 text-sm mt-1 mb-6">Seed the CMS with all current website images to get started.</p>
          <button
            onClick={async () => {
              setSeeding(true);
              setSeedMsg('');
              const result = await seedAllContent();
              setSeedMsg(result.message);
              setSeeding(false);
              if (result.success) await loadImages();
            }}
            disabled={seeding}
            className="inline-flex items-center gap-2 bg-[#002147] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#002147]/90 transition-all disabled:opacity-60"
          >
            {seeding ? <RefreshCw size={15} className="animate-spin" /> : <Database size={15} />}
            {seeding ? 'Seeding...' : 'Seed All Site Images'}
          </button>
          {seedMsg && <p className="text-xs text-emerald-600 mt-4 font-medium">{seedMsg}</p>}
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(grouped).map(([group, imgs]) => {
            const [page, section] = group.split(' / ');
            const sectionLabel = SECTION_LABELS[page]?.[section] ?? section;
            return (
              <div key={group}>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="h-px flex-1 bg-gray-200"></span>
                  <span>{PAGE_LABELS[page] ?? page} — {sectionLabel}</span>
                  <span className="h-px flex-1 bg-gray-200"></span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {imgs.map((img) => (
                    <div
                      key={img.id}
                      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group"
                    >
                      <div className="aspect-video bg-gray-100 relative overflow-hidden">
                        {!previewErrors.has(img.id) ? (
                          <img
                            src={img.image_url}
                            alt={img.alt_text}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={() => setPreviewErrors(prev => new Set(prev).add(img.id))}
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-gray-300 gap-1">
                            <ImageIcon size={28} />
                            <span className="text-xs">Image unavailable</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <button
                            onClick={() => { setEditing({ ...img }); setIsNew(false); setUploadMode('url'); }}
                            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                            title="Edit"
                          >
                            <Pencil size={15} className="text-[#002147]" />
                          </button>
                          <a
                            href={img.image_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                            title="View full image"
                          >
                            <ExternalLink size={15} className="text-[#002147]" />
                          </a>
                          {deleteConfirm === img.id ? (
                            <button
                              onClick={() => handleDelete(img.id)}
                              className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                              title="Confirm delete"
                            >
                              <Trash2 size={15} className="text-white" />
                            </button>
                          ) : (
                            <button
                              onClick={() => setDeleteConfirm(img.id)}
                              className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                              title="Delete"
                            >
                              <Trash2 size={15} className="text-red-500" />
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="font-semibold text-gray-800 text-sm truncate">{img.label}</div>
                        <div className="text-xs text-gray-400 truncate mt-0.5">{img.alt_text}</div>
                        <div className="text-xs text-[#002147]/50 font-mono truncate mt-1 text-[10px]">{img.image_url}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
