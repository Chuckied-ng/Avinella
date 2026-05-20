import React, { useEffect, useState } from 'react';
import { supabase, type SiteContent } from '@/lib/supabase';
import { seedAllContent } from '@/lib/seedContent';
import { Save, Edit2, X, Check, FileText, ChevronDown, ChevronUp, Database, RefreshCw } from 'lucide-react';

const PAGE_LABELS: Record<string, string> = {
  home: 'Home',
  about: 'About Us',
  hse: 'HSE',
  training: 'Training & Competence',
  careers: 'Careers',
  contact: 'Contact',
  services: 'Services',
};

const SECTION_LABELS: Record<string, string> = {
  hero: 'Hero Section',
  about: 'About Section',
  overview: 'Overview',
  mission: 'Mission / Vision / Values',
  stats: 'Statistics',
  commitment: 'Safety Commitment',
  environment: 'Environmental Protection',
  why: 'Why Work Here',
  internship: 'Internship Programme',
  cta: 'Call to Action',
  info: 'Contact Information',
};

export default function AdminContent() {
  const [items, setItems] = useState<SiteContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [filterPage, setFilterPage] = useState('all');
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());
  const [successId, setSuccessId] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [seedMsg, setSeedMsg] = useState('');

  async function loadContent() {
    setLoading(true);
    const { data } = await supabase
      .from('site_content')
      .select('*')
      .order('page')
      .order('section')
      .order('sort_order');
    setItems(data ?? []);
    setLoading(false);
  }

  useEffect(() => { loadContent(); }, []);

  async function handleSave(item: SiteContent) {
    setSaving(item.id);
    try {
      const { error } = await supabase
        .from('site_content')
        .update({ value: editValue, updated_at: new Date().toISOString() })
        .eq('id', item.id);
      if (!error) {
        setItems((prev) =>
          prev.map((i) => (i.id === item.id ? { ...i, value: editValue } : i))
        );
        setEditingId(null);
        setSuccessId(item.id);
        setTimeout(() => setSuccessId(null), 2000);
      }
    } finally {
      setSaving(null);
    }
  }

  function startEdit(item: SiteContent) {
    setEditingId(item.id);
    setEditValue(item.value);
  }

  function cancelEdit() {
    setEditingId(null);
    setEditValue('');
  }

  function toggleSection(key: string) {
    setCollapsedSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const pages = ['all', ...Array.from(new Set(items.map((i) => i.page)))];
  const filtered = filterPage === 'all' ? items : items.filter((i) => i.page === filterPage);

  // Group by page → section
  type Grouped = Record<string, Record<string, SiteContent[]>>;
  const grouped = filtered.reduce<Grouped>((acc, item) => {
    if (!acc[item.page]) acc[item.page] = {};
    if (!acc[item.page][item.section]) acc[item.page][item.section] = [];
    acc[item.page][item.section].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Page Content</h2>
          <p className="text-gray-500 text-sm mt-1">Edit text content displayed across the website</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {pages.map((page) => (
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
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-100 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(grouped).map(([page, sections]) => (
            <div key={page}>
              {/* Page heading */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#002147] rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText size={15} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-[#002147]">
                  {PAGE_LABELS[page] ?? page}
                </h3>
                <span className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="space-y-4 pl-2">
                {Object.entries(sections).map(([section, contentItems]) => {
                  const sectionKey = `${page}-${section}`;
                  const isCollapsed = collapsedSections.has(sectionKey);

                  return (
                    <div key={section} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                      {/* Section header */}
                      <button
                        onClick={() => toggleSection(sectionKey)}
                        className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-[#C9A02B] uppercase tracking-widest">
                            {SECTION_LABELS[section] ?? section}
                          </span>
                          <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">
                            {contentItems.length} field{contentItems.length !== 1 ? 's' : ''}
                          </span>
                        </div>
                        {isCollapsed ? (
                          <ChevronDown size={16} className="text-gray-400" />
                        ) : (
                          <ChevronUp size={16} className="text-gray-400" />
                        )}
                      </button>

                      {!isCollapsed && (
                        <div className="divide-y divide-gray-50">
                          {contentItems.map((item) => {
                            const isEditing = editingId === item.id;
                            const isSaving = saving === item.id;
                            const isSuccess = successId === item.id;

                            return (
                              <div key={item.id} className="px-5 py-4">
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-2">
                                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                        {item.label}
                                      </span>
                                      <span className="text-xs text-gray-300 font-mono">
                                        [{item.page}/{item.section}/{item.key}]
                                      </span>
                                    </div>

                                    {isEditing ? (
                                      <div className="space-y-3">
                                        {item.content_type === 'textarea' ? (
                                          <textarea
                                            value={editValue}
                                            onChange={(e) => setEditValue(e.target.value)}
                                            rows={4}
                                            autoFocus
                                            className="w-full rounded-xl border border-[#C9A02B] p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#C9A02B]/30"
                                          />
                                        ) : (
                                          <input
                                            type="text"
                                            value={editValue}
                                            onChange={(e) => setEditValue(e.target.value)}
                                            autoFocus
                                            className="w-full rounded-xl border border-[#C9A02B] p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A02B]/30"
                                          />
                                        )}
                                        <div className="flex items-center gap-2">
                                          <button
                                            onClick={() => handleSave(item)}
                                            disabled={isSaving || editValue === item.value}
                                            className="flex items-center gap-1.5 px-4 py-2 bg-[#002147] hover:bg-[#002147]/90 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-all"
                                          >
                                            <Save size={13} />
                                            {isSaving ? 'Saving...' : 'Save'}
                                          </button>
                                          <button
                                            onClick={cancelEdit}
                                            className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-semibold rounded-lg transition-all"
                                          >
                                            <X size={13} />
                                            Cancel
                                          </button>
                                        </div>
                                      </div>
                                    ) : (
                                      <p
                                        className={`text-sm text-gray-800 leading-relaxed ${
                                          item.content_type === 'textarea' ? 'whitespace-pre-wrap' : ''
                                        }`}
                                      >
                                        {item.value}
                                      </p>
                                    )}
                                  </div>

                                  {!isEditing && (
                                    <button
                                      onClick={() => startEdit(item)}
                                      className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                        isSuccess
                                          ? 'bg-emerald-100 text-emerald-700'
                                          : 'bg-gray-100 hover:bg-[#002147] hover:text-white text-gray-600'
                                      }`}
                                    >
                                      {isSuccess ? (
                                        <>
                                          <Check size={13} />
                                          Saved
                                        </>
                                      ) : (
                                        <>
                                          <Edit2 size={13} />
                                          Edit
                                        </>
                                      )}
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {Object.keys(grouped).length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <FileText size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm font-medium">No content found</p>
              <p className="text-xs mt-2 text-gray-300 max-w-xs mx-auto mb-6">
                The site_content table is empty. Seed it with the current website defaults.
              </p>
              <button
                onClick={async () => {
                  setSeeding(true);
                  setSeedMsg('');
                  const result = await seedAllContent();
                  setSeedMsg(result.message);
                  setSeeding(false);
                  if (result.success) await loadContent();
                }}
                disabled={seeding}
                className="inline-flex items-center gap-2 bg-[#002147] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#002147]/90 transition-all disabled:opacity-60"
              >
                {seeding ? <RefreshCw size={15} className="animate-spin" /> : <Database size={15} />}
                {seeding ? 'Seeding...' : 'Seed Website Content'}
              </button>
              {seedMsg && <p className="text-xs text-emerald-600 mt-4 font-medium">{seedMsg}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
