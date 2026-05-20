import { useState, useEffect } from 'react';
import { supabase } from './supabase';

/**
 * Load site content for a specific page from Supabase (site_content table).
 * Returns a function to get content by key.
 *
 * Usage:
 *   const content = useSiteContent('home');
 *   content('hero', 'headline_1') // returns value or fallback
 */
export function useSiteContent(page: string) {
  const [map, setMap] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('site_content')
      .select('section, key, value')
      .eq('page', page)
      .order('section')
      .order('sort_order')
      .then(({ data }) => {
        if (!data) { setLoading(false); return; }
        const m: Record<string, string> = {};
        data.forEach((item) => {
          m[`${item.section}.${item.key}`] = item.value;
        });
        setMap(m);
        setLoading(false);
      });
  }, [page]);

  /** Get content value. Returns fallback if not found in DB. */
  return (section: string, key: string, fallback = ''): string => {
    return map[`${section}.${key}`] ?? fallback;
  };
}
