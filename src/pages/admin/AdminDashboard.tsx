import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { seedAllContent, isContentEmpty } from '@/lib/seedContent';
import { Briefcase, Image, FileText, TrendingUp, ChevronRight, Clock, MessageSquare, AlignLeft, Database, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    jobs: 0,
    activeJobs: 0,
    images: 0,
    applications: 0,
    pendingApplications: 0,
    contacts: 0,
    contentItems: 0,
  });
  const [recentApplications, setRecentApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [contentEmpty, setContentEmpty] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [seedResult, setSeedResult] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    async function loadStats() {
      try {
        const [
          { count: jobs },
          { count: activeJobs },
          { count: images },
          { count: applications },
          { count: pendingApplications },
          { count: contacts },
          { count: contentItems },
          { data: recent },
        ] = await Promise.all([
          supabase.from('job_listings').select('*', { count: 'exact', head: true }),
          supabase.from('job_listings').select('*', { count: 'exact', head: true }).eq('is_active', true),
          supabase.from('site_images').select('*', { count: 'exact', head: true }),
          supabase.from('career_applications').select('*', { count: 'exact', head: true }),
          supabase.from('career_applications').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
          supabase.from('contact_submissions').select('*', { count: 'exact', head: true }),
          supabase.from('site_content').select('*', { count: 'exact', head: true }),
          supabase.from('career_applications').select('*').order('created_at', { ascending: false }).limit(5),
        ]);

        const imagesCount = images ?? 0;
        const contentCount = contentItems ?? 0;
        setContentEmpty(imagesCount === 0 && contentCount === 0);

        setStats({
          jobs: jobs ?? 0,
          activeJobs: activeJobs ?? 0,
          images: imagesCount,
          applications: applications ?? 0,
          pendingApplications: pendingApplications ?? 0,
          contacts: contacts ?? 0,
          contentItems: contentCount,
        });
        setRecentApplications(recent ?? []);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  async function handleSeed() {
    setSeeding(true);
    setSeedResult(null);
    const result = await seedAllContent();
    setSeedResult(result);
    setSeeding(false);
    if (result.success) {
      setContentEmpty(false);
      // Refresh stats
      const [{ count: images }, { count: contentItems }] = await Promise.all([
        supabase.from('site_images').select('*', { count: 'exact', head: true }),
        supabase.from('site_content').select('*', { count: 'exact', head: true }),
      ]);
      setStats(prev => ({ ...prev, images: images ?? 0, contentItems: contentItems ?? 0 }));
    }
  }

  const cards = [
    {
      title: 'Job Listings',
      value: stats.jobs,
      sub: `${stats.activeJobs} active`,
      icon: Briefcase,
      color: 'bg-[#002147]',
      link: '/admin/jobs',
    },
    {
      title: 'Page Content',
      value: stats.contentItems,
      sub: 'Editable text fields',
      icon: AlignLeft,
      color: 'bg-sky-600',
      link: '/admin/content',
    },
    {
      title: 'Site Images',
      value: stats.images,
      sub: 'Across all pages',
      icon: Image,
      color: 'bg-[#C9A02B]',
      link: '/admin/images',
    },
    {
      title: 'Applications',
      value: stats.applications,
      sub: `${stats.pendingApplications} pending review`,
      icon: FileText,
      color: 'bg-emerald-600',
      link: '/admin/applications',
    },
    {
      title: 'Contact Messages',
      value: stats.contacts,
      sub: 'From contact form',
      icon: MessageSquare,
      color: 'bg-violet-600',
      link: '/admin/contacts',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-500 text-sm mt-1">Overview of your website content</p>
      </div>

      {/* Seed Banner */}
      {contentEmpty && !seedResult && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle size={20} className="text-amber-600" />
            </div>
            <div>
              <h3 className="font-bold text-amber-900 mb-1">CMS is empty — no images or content found</h3>
              <p className="text-amber-700 text-sm">Click "Seed Website Content" to populate the CMS with the current hardcoded website content. This will make images, service cards, and text fields immediately editable from the CMS.</p>
            </div>
          </div>
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap flex-shrink-0 disabled:opacity-60"
          >
            {seeding ? <RefreshCw size={16} className="animate-spin" /> : <Database size={16} />}
            {seeding ? 'Seeding...' : 'Seed Website Content'}
          </button>
        </div>
      )}

      {/* Seed Result */}
      {seedResult && (
        <div className={`border rounded-2xl p-5 flex items-start gap-4 ${seedResult.success ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${seedResult.success ? 'bg-emerald-100' : 'bg-red-100'}`}>
            {seedResult.success ? <CheckCircle size={20} className="text-emerald-600" /> : <AlertTriangle size={20} className="text-red-600" />}
          </div>
          <div>
            <h3 className={`font-bold mb-1 ${seedResult.success ? 'text-emerald-900' : 'text-red-900'}`}>
              {seedResult.success ? 'Content seeded successfully!' : 'Seeding failed'}
            </h3>
            <p className={`text-sm ${seedResult.success ? 'text-emerald-700' : 'text-red-700'}`}>{seedResult.message}</p>
          </div>
          <button onClick={() => setSeedResult(null)} className="ml-auto text-gray-400 hover:text-gray-600">✕</button>
        </div>
      )}

      {/* Re-seed button (when not empty) */}
      {!contentEmpty && (
        <div className="flex items-center justify-between bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm">
          <p className="text-sm text-gray-500">Need to reset the CMS to default website content?</p>
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="flex items-center gap-2 bg-gray-100 hover:bg-[#002147] hover:text-white text-gray-700 font-medium text-sm px-4 py-2 rounded-xl transition-all disabled:opacity-60"
          >
            {seeding ? <RefreshCw size={14} className="animate-spin" /> : <RefreshCw size={14} />}
            {seeding ? 'Reseeding...' : 'Re-seed from website defaults'}
          </button>
        </div>
      )}

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
        {cards.map((card) => (
          <Link
            key={card.title}
            to={card.link}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center`}>
                <card.icon className="text-white" size={22} />
              </div>
              <ChevronRight size={16} className="text-gray-400 group-hover:text-[#002147] transition-colors" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {loading ? '—' : card.value}
            </div>
            <div className="text-sm font-semibold text-gray-700">{card.title}</div>
            <div className="text-xs text-gray-400 mt-0.5">{card.sub}</div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-[#C9A02B]" />
            Quick Actions
          </h3>
          <div className="space-y-2">
            <Link
              to="/admin/content"
              className="flex items-center justify-between p-3 bg-gray-50 hover:bg-[#002147] hover:text-white rounded-xl text-sm font-medium text-gray-700 transition-all group"
            >
              Edit Page Content
              <ChevronRight size={14} className="text-gray-400 group-hover:text-white" />
            </Link>
            <Link
              to="/admin/jobs"
              className="flex items-center justify-between p-3 bg-gray-50 hover:bg-[#002147] hover:text-white rounded-xl text-sm font-medium text-gray-700 transition-all group"
            >
              Add New Job Listing
              <ChevronRight size={14} className="text-gray-400 group-hover:text-white" />
            </Link>
            <Link
              to="/admin/images"
              className="flex items-center justify-between p-3 bg-gray-50 hover:bg-[#002147] hover:text-white rounded-xl text-sm font-medium text-gray-700 transition-all group"
            >
              Update Site Images
              <ChevronRight size={14} className="text-gray-400 group-hover:text-white" />
            </Link>
            <Link
              to="/admin/applications"
              className="flex items-center justify-between p-3 bg-gray-50 hover:bg-[#002147] hover:text-white rounded-xl text-sm font-medium text-gray-700 transition-all group"
            >
              Review Applications
              <ChevronRight size={14} className="text-gray-400 group-hover:text-white" />
            </Link>
            <Link
              to="/admin/contacts"
              className="flex items-center justify-between p-3 bg-gray-50 hover:bg-[#002147] hover:text-white rounded-xl text-sm font-medium text-gray-700 transition-all group"
            >
              View Contact Messages
              <ChevronRight size={14} className="text-gray-400 group-hover:text-white" />
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Clock size={18} className="text-[#C9A02B]" />
            Recent Applications
          </h3>
          {loading ? (
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 bg-gray-100 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : recentApplications.length === 0 ? (
            <p className="text-gray-400 text-sm">No applications yet</p>
          ) : (
            <div className="space-y-2">
              {recentApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <div className="text-sm font-semibold text-gray-800">{app.name}</div>
                    <div className="text-xs text-gray-400">{app.position}</div>
                  </div>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full
                      ${app.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                        app.status === 'reviewed' ? 'bg-blue-100 text-blue-700' :
                        'bg-emerald-100 text-emerald-700'}`}
                  >
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
