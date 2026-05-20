import React, { useEffect, useState } from 'react';
import { supabase, type ContactSubmission } from '@/lib/supabase';
import { Mail, Phone, Building2, Clock, Trash2, ChevronDown, ChevronUp, MessageSquare, Download } from 'lucide-react';

function exportToCSV(contacts: any[]) {
  const headers = ['Name', 'Email', 'Phone', 'Company', 'Subject', 'Message', 'Date'];
  const rows = contacts.map((c) => [
    c.name, c.email, c.phone ?? '', c.company ?? '', c.subject,
    (c.message ?? '').replace(/,/g, ';'),
    new Date(c.created_at).toLocaleDateString(),
  ]);
  const csv = [headers, ...rows].map((r) => r.map((v) => `"${v}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `contact_submissions_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// Track read state in localStorage (since contact_submissions table has no is_read column)
function getReadSet(): Set<string> {
  try {
    const stored = localStorage.getItem('cms_read_contacts');
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}
function markRead(id: string) {
  const set = getReadSet();
  set.add(id);
  localStorage.setItem('cms_read_contacts', JSON.stringify([...set]));
}

export default function AdminContacts() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [readSet, setReadSet] = useState<Set<string>>(getReadSet);

  function handleExpand(id: string) {
    setExpanded(expanded === id ? null : id);
    if (!readSet.has(id)) {
      markRead(id);
      setReadSet(new Set([...readSet, id]));
    }
  }

  async function loadContacts() {
    setLoading(true);
    const { data } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    setContacts(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    loadContacts();
  }, []);

  async function handleDelete(id: string) {
    await supabase.from('contact_submissions').delete().eq('id', id);
    setDeleteConfirm(null);
    setContacts((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contact Submissions</h2>
          <p className="text-gray-500 text-sm mt-1">Messages submitted via the Contact page</p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          {contacts.some(c => !readSet.has(c.id)) && (
            <button
              onClick={() => {
                const all = new Set(contacts.map(c => c.id));
                contacts.forEach(c => markRead(c.id));
                setReadSet(all);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:border-[#002147] transition-all"
            >
              Mark All Read
            </button>
          )}
          <button
            onClick={() => exportToCSV(contacts)}
            disabled={contacts.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-[#002147] text-white text-sm font-semibold rounded-xl hover:bg-[#002147]/90 transition-all disabled:opacity-40"
          >
            <Download size={15} /> Export CSV
          </button>
        </div>
      </div>

      {/* Count banner */}
      <div className="bg-[#002147] rounded-2xl p-5 flex items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
            <MessageSquare className="text-[#C9A02B]" size={22} />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{contacts.length}</div>
            <div className="text-white/60 text-sm">Total Messages</div>
          </div>
        </div>
        {contacts.length - readSet.size > 0 && (
          <div className="flex items-center gap-3 bg-[#C9A02B]/20 rounded-xl px-4 py-3">
            <Mail className="text-[#C9A02B]" size={16} />
            <div>
              <div className="text-lg font-bold text-white">{contacts.filter(c => !readSet.has(c.id)).length}</div>
              <div className="text-white/60 text-xs">Unread</div>
            </div>
          </div>
        )}
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-6 space-y-3">
            {[1, 2, 3].map((i) => <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />)}
          </div>
        ) : contacts.length === 0 ? (
          <div className="p-12 text-center">
            <MessageSquare size={48} className="text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400 font-medium">No contact submissions yet</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {contacts.map((contact) => (
              <div key={contact.id} className={`hover:bg-gray-50 transition-colors ${!readSet.has(contact.id) ? 'border-l-4 border-[#C9A02B]' : ''}`}>
                {/* Header Row */}
                <div className="flex items-center gap-4 p-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm
                    ${!readSet.has(contact.id) ? 'bg-[#C9A02B] text-white' : 'bg-[#C9A02B]/10 text-[#C9A02B]'}`}>
                    {contact.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className={`font-semibold text-sm ${!readSet.has(contact.id) ? 'text-gray-900' : 'text-gray-700'}`}>{contact.name}</span>
                      {!readSet.has(contact.id) && (
                        <span className="text-xs bg-[#C9A02B] text-white font-bold px-2 py-0.5 rounded-full">New</span>
                      )}
                      {contact.company && (
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Building2 size={10} /> {contact.company}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Mail size={11} />{contact.email}</span>
                      <span className="font-semibold text-[#002147] truncate max-w-[200px]">{contact.subject}</span>
                      <span className="flex items-center gap-1"><Clock size={11} />{new Date(contact.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleExpand(contact.id)}
                      className="p-2 rounded-lg text-gray-400 hover:bg-gray-200 transition-colors"
                    >
                      {expanded === contact.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {deleteConfirm === contact.id ? (
                      <div className="flex items-center gap-1">
                        <button onClick={() => handleDelete(contact.id)} className="px-3 py-1.5 bg-red-600 text-white text-xs rounded-lg font-bold hover:bg-red-700">Confirm</button>
                        <button onClick={() => setDeleteConfirm(null)} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg font-bold">Cancel</button>
                      </div>
                    ) : (
                      <button onClick={() => setDeleteConfirm(contact.id)} className="p-2 rounded-lg text-red-400 hover:bg-red-50 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Expanded */}
                {expanded === contact.id && (
                  <div className="px-5 pb-5 bg-gray-50/50 border-t border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                      {contact.phone && (
                        <div>
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Phone</div>
                          <div className="text-sm text-gray-700 flex items-center gap-1.5">
                            <Phone size={13} className="text-[#C9A02B]" />{contact.phone}
                          </div>
                        </div>
                      )}
                      {contact.company && (
                        <div>
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Company</div>
                          <div className="text-sm text-gray-700 flex items-center gap-1.5">
                            <Building2 size={13} className="text-[#C9A02B]" />{contact.company}
                          </div>
                        </div>
                      )}
                      <div className="md:col-span-3">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Message</div>
                        <p className="text-sm text-gray-700 leading-relaxed bg-white rounded-xl p-4 border border-gray-100">
                          {contact.message}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
