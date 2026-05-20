import React, { useEffect, useState } from 'react';
import { supabase, type CareerApplication } from '@/lib/supabase';
import { FileText, Mail, Phone, Briefcase, Clock, Trash2, ChevronDown, ChevronUp, Download } from 'lucide-react';

function exportToCSV(applications: any[]) {
  const headers = ['Name', 'Email', 'Phone', 'Position', 'Status', 'Date', 'Cover Letter', 'CV URL'];
  const rows = applications.map((a) => [
    a.name, a.email, a.phone, a.position, a.status,
    new Date(a.created_at).toLocaleDateString(),
    (a.cover_letter ?? '').replace(/,/g, ';'),
    a.cv_url ?? '',
  ]);
  const csv = [headers, ...rows].map((r) => r.map((v) => `"${v}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `applications_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

const STATUS_OPTIONS = ['pending', 'reviewed', 'shortlisted', 'rejected'];

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-amber-100 text-amber-700',
  reviewed: 'bg-blue-100 text-blue-700',
  shortlisted: 'bg-emerald-100 text-emerald-700',
  rejected: 'bg-red-100 text-red-600',
};

export default function AdminApplications() {
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  async function loadApplications() {
    setLoading(true);
    const { data } = await supabase
      .from('career_applications')
      .select('*')
      .order('created_at', { ascending: false });
    setApplications(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    loadApplications();
  }, []);

  async function updateStatus(id: string, status: string) {
    await supabase.from('career_applications').update({ status }).eq('id', id);
    setApplications((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
  }

  async function handleDelete(id: string) {
    await supabase.from('career_applications').delete().eq('id', id);
    setDeleteConfirm(null);
    setApplications((prev) => prev.filter((a) => a.id !== id));
  }

  const filtered =
    filterStatus === 'all'
      ? applications
      : applications.filter((a) => a.status === filterStatus);

  const statusCounts = STATUS_OPTIONS.reduce<Record<string, number>>((acc, s) => {
    acc[s] = applications.filter((a) => a.status === s).length;
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Applications</h2>
            <p className="text-gray-500 text-sm mt-1">Review and manage career applications</p>
          </div>
          <button
            onClick={() => exportToCSV(filtered)}
            disabled={filtered.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-[#002147] text-white text-sm font-semibold rounded-xl hover:bg-[#002147]/90 transition-all disabled:opacity-40"
          >
            <Download size={15} /> Export CSV
          </button>
        </div>
      </div>

      {/* Status Filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => setFilterStatus('all')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            filterStatus === 'all' ? 'bg-[#002147] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-[#002147]'
          }`}
        >
          All ({applications.length})
        </button>
        {STATUS_OPTIONS.map((s) => (
          <button
            key={s}
            onClick={() => setFilterStatus(s)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
              filterStatus === s ? 'bg-[#002147] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-[#002147]'
            }`}
          >
            {s} ({statusCounts[s] ?? 0})
          </button>
        ))}
      </div>

      {/* Applications List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-6 space-y-3">
            {[1, 2, 3].map((i) => <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center">
            <FileText size={48} className="text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400 font-medium">No applications found</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filtered.map((app) => (
              <div key={app.id} className="hover:bg-gray-50 transition-colors">
                {/* Header Row */}
                <div className="flex items-center gap-4 p-5">
                  <div className="w-10 h-10 bg-[#002147]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#002147] font-bold text-sm">
                    {app.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className="font-semibold text-gray-900 text-sm">{app.name}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full capitalize ${STATUS_COLORS[app.status] ?? 'bg-gray-100 text-gray-500'}`}>
                        {app.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Mail size={11} />{app.email}</span>
                      <span className="flex items-center gap-1 text-[#C9A02B] font-semibold"><Briefcase size={11} />{app.position}</span>
                      <span className="flex items-center gap-1"><Clock size={11} />{new Date(app.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Status Selector */}
                    <select
                      value={app.status}
                      onChange={(e) => updateStatus(app.id, e.target.value)}
                      className="text-xs rounded-lg border border-gray-200 px-2 py-1.5 font-medium text-gray-700 bg-white"
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s} className="capitalize">{s}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => setExpanded(expanded === app.id ? null : app.id)}
                      className="p-2 rounded-lg text-gray-400 hover:bg-gray-200 transition-colors"
                    >
                      {expanded === app.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {deleteConfirm === app.id ? (
                      <div className="flex items-center gap-1">
                        <button onClick={() => handleDelete(app.id)} className="px-3 py-1.5 bg-red-600 text-white text-xs rounded-lg font-bold hover:bg-red-700">Confirm</button>
                        <button onClick={() => setDeleteConfirm(null)} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg font-bold">Cancel</button>
                      </div>
                    ) : (
                      <button onClick={() => setDeleteConfirm(app.id)} className="p-2 rounded-lg text-red-400 hover:bg-red-50 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {expanded === app.id && (
                  <div className="px-5 pb-5 bg-gray-50/50 border-t border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                      <div>
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Phone</div>
                        <div className="text-sm text-gray-700 flex items-center gap-1.5">
                          <Phone size={13} className="text-[#C9A02B]" />{app.phone}
                        </div>
                      </div>
                      {app.cv_url && (
                        <div>
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">CV / Resume</div>
                          <a
                            href={app.cv_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#002147] font-medium hover:text-[#C9A02B] flex items-center gap-1.5 transition-colors"
                          >
                            <FileText size={13} /> Download CV
                          </a>
                        </div>
                      )}
                      {app.cover_letter && (
                        <div className="md:col-span-3">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Cover Letter</div>
                          <p className="text-sm text-gray-700 leading-relaxed bg-white rounded-xl p-4 border border-gray-100">
                            {app.cover_letter}
                          </p>
                        </div>
                      )}
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
