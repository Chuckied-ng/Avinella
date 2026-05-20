import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://placeholder.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const isSupabaseConfigured = !!(
  (import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL) &&
  (import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
);

export type JobListing = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string | null;
  requirements: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type SiteImage = {
  id: string;
  page: string;
  section: string;
  label: string;
  image_url: string;
  alt_text: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type CareerApplication = {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  cover_letter: string | null;
  cv_url: string | null;
  status: string;
  created_at: string;
};

export type SiteContent = {
  id: string;
  page: string;
  section: string;
  key: string;
  value: string;
  label: string;
  content_type: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  subject: string;
  message: string;
  created_at: string;
};
