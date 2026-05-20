import React, { useEffect, useState } from 'react';
import { supabase, type JobListing } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Plus,
  Pencil,
  Trash2,
  CheckCircle,
  XCircle,
  Briefcase,
  MapPin,
  Clock,
  Save,
  X,
} from 'lucide-react';

const EMPTY_JOB = {
  title: '',
  department: '',
  location: '',
  type: 'Full-time',
  description: '',
  requirements: '',
  is_active: true,
};

export default function AdminJobs() {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<JobListing> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  async function loadJobs() {
    setLoading(true);
    const { data } = await supabase
      .from('job_listings')
      .select('*')
      .order('created_at', { ascending: false });
    setJobs(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    loadJobs();
  }, []);

  async function handleSave() {
    if (!editing) return;
    setSaving(true);
    try {
      if (isNew) {
        const { error } = await supabase.from('job_listings').insert([editing]);
        if (error) throw error;
      } else {
        const { id, created_at, updated_at, ...rest } = editing as JobListing;
        const { error } = await supabase
          .from('job_listings')
          .update({ ...rest, updated_at: new Date().toISOString() })
          .eq('id', id);
        if (error) throw error;
      }
      setEditing(null);
      setIsNew(false);
      await loadJobs();
    } catch (err: any) {
      alert('Error saving job: ' + (err.message ?? err));
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    const { error } = await supabase.from('job_listings').delete().eq('id', id);
    if (!error) {
      setDeleteConfirm(null);
      await loadJobs();
    }
  }

  async function toggleActive(job: JobListing) {
    await supabase
      .from('job_listings')
      .update({ is_active: !job.is_active, updated_at: new Date().toISOString() })
      .eq('id', job.id);
    await loadJobs();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Job Listings</h2>
          <p className="text-gray-500 text-sm mt-1">Manage open positions on the Careers page</p>
        </div>
        <Button
          onClick={() => { setEditing({ ...EMPTY_JOB }); setIsNew(true); }}
          className="bg-[#002147] hover:bg-[#002147]/90 text-white rounded-xl flex items-center gap-2"
        >
          <Plus size={16} /> Add Job
        </Button>
      </div>

      {/* Edit / Create Form */}
      {editing && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-900 mb-5 text-lg">
            {isNew ? 'New Job Listing' : 'Edit Job Listing'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide">Job Title *</Label>
              <Input
                value={editing.title ?? ''}
                onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                placeholder="e.g. Marine Operations Manager"
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide">Department *</Label>
              <Input
                value={editing.department ?? ''}
                onChange={(e) => setEditing({ ...editing, department: e.target.value })}
                placeholder="e.g. Operations"
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide">Location *</Label>
              <Input
                value={editing.location ?? ''}
                onChange={(e) => setEditing({ ...editing, location: e.target.value })}
                placeholder="e.g. Lagos, Nigeria"
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide">Employment Type *</Label>
              <select
                value={editing.type ?? 'Full-time'}
                onChange={(e) => setEditing({ ...editing, type: e.target.value })}
                className="w-full rounded-xl border border-gray-200 p-2.5 text-sm"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Rotational</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide">Job Description</Label>
              <Textarea
                value={editing.description ?? ''}
                onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                placeholder="Describe the role, responsibilities, and requirements..."
                rows={4}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label className="text-xs font-semibold text-[#002147] uppercase tracking-wide">Requirements</Label>
              <Textarea
                value={(editing as any).requirements ?? ''}
                onChange={(e) => setEditing({ ...editing, requirements: e.target.value } as any)}
                placeholder="List key qualifications, certifications, and experience required..."
                rows={4}
                className="rounded-xl"
              />
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="is_active"
                checked={editing.is_active ?? true}
                onChange={(e) => setEditing({ ...editing, is_active: e.target.checked })}
                className="w-4 h-4 accent-[#002147]"
              />
              <Label htmlFor="is_active" className="text-sm text-gray-700 cursor-pointer">
                Active (visible on Careers page)
              </Label>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <Button
              onClick={handleSave}
              disabled={saving || !editing.title || !editing.department || !editing.location}
              className="bg-[#002147] hover:bg-[#002147]/90 text-white rounded-xl flex items-center gap-2"
            >
              <Save size={15} /> {saving ? 'Saving...' : 'Save Job'}
            </Button>
            <Button
              variant="outline"
              onClick={() => { setEditing(null); setIsNew(false); }}
              className="rounded-xl flex items-center gap-2"
            >
              <X size={15} /> Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Jobs List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-6 space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : jobs.length === 0 ? (
          <div className="p-12 text-center">
            <Briefcase size={48} className="text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400 font-medium">No job listings yet</p>
            <p className="text-gray-300 text-sm mt-1">Click "Add Job" to create your first listing</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {jobs.map((job) => (
              <div key={job.id} className="flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-[#002147]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase size={18} className="text-[#002147]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900 text-sm truncate">{job.title}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      job.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {job.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                    <span className="text-[#C9A02B] font-bold">{job.department}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{job.type}</span>
                  </div>
                  {job.description && (
                    <p className="text-xs text-gray-400 mt-1 line-clamp-1">{job.description}</p>
                  )}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => toggleActive(job)}
                    title={job.is_active ? 'Deactivate' : 'Activate'}
                    className={`p-2 rounded-lg transition-colors ${
                      job.is_active
                        ? 'text-emerald-600 hover:bg-emerald-50'
                        : 'text-gray-400 hover:bg-gray-100'
                    }`}
                  >
                    {job.is_active ? <CheckCircle size={18} /> : <XCircle size={18} />}
                  </button>
                  <button
                    onClick={() => { setEditing({ ...job }); setIsNew(false); }}
                    className="p-2 rounded-lg text-[#002147] hover:bg-[#002147]/10 transition-colors"
                  >
                    <Pencil size={16} />
                  </button>
                  {deleteConfirm === job.id ? (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="px-3 py-1.5 bg-red-600 text-white text-xs rounded-lg font-bold hover:bg-red-700"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg font-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirm(job.id)}
                      className="p-2 rounded-lg text-red-400 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
