import React, { useState } from 'react';
import { Link, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Image,
  Briefcase,
  FileText,
  MessageSquare,
  LogOut,
  Menu,
  X,
  ChevronRight,
  AlignLeft,
} from 'lucide-react';

import AdminDashboard from './AdminDashboard';
import AdminImages from './AdminImages';
import AdminJobs from './AdminJobs';
import AdminApplications from './AdminApplications';
import AdminContacts from './AdminContacts';
import AdminContent from './AdminContent';
import AdminLogin from './AdminLogin';

const navItems = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { path: '/admin/content', label: 'Page Content', icon: AlignLeft },
  { path: '/admin/images', label: 'Site Images', icon: Image },
  { path: '/admin/jobs', label: 'Job Listings', icon: Briefcase },
  { path: '/admin/applications', label: 'Applications', icon: FileText },
  { path: '/admin/contacts', label: 'Contact Messages', icon: MessageSquare },
];

export default function AdminLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem('cms_auth') === 'true'
  );

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  const isActive = (item: { path: string; exact?: boolean }) =>
    item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#002147] shadow-2xl transform transition-transform duration-300 flex flex-col
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-auto`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <img src="/logo.png" alt="Avinella" className="h-8 w-auto brightness-0 invert" />
          <span className="ml-3 text-white font-bold text-sm">CMS Admin</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-6 space-y-1">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group
                  ${active
                    ? 'bg-[#C9A02B] text-white shadow-lg'
                    : 'text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <item.icon size={18} />
                {item.label}
                {active && <ChevronRight size={14} className="ml-auto" />}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 space-y-1">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/10 hover:text-white text-sm font-medium transition-all"
          >
            <LogOut size={18} />
            Back to Site
          </Link>
          <button
            onClick={() => {
              sessionStorage.removeItem('cms_auth');
              setIsAuthenticated(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400/70 hover:bg-red-500/10 hover:text-red-400 text-sm font-medium transition-all"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 gap-4 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex-1">
            <h1 className="text-sm font-semibold text-gray-800">
              {navItems.find((i) => isActive(i))?.label ?? 'Admin'}
            </h1>
            <p className="text-xs text-gray-400">Avinella Global Resources CMS</p>
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#002147] font-medium hover:text-[#C9A02B] transition-colors flex items-center gap-1"
          >
            View Site <ChevronRight size={12} />
          </a>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route index element={<AdminDashboard />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="images" element={<AdminImages />} />
            <Route path="jobs" element={<AdminJobs />} />
            <Route path="applications" element={<AdminApplications />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
