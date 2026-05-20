import { useState, useEffect } from 'react';
import { supabase } from './supabase';

/**
 * Load images for a specific page from the CMS (site_images table).
 * Returns a map: { "section_sortOrder": url, "section": url (first in section) }
 *
 * Usage:
 *   const img = useSiteImages('home');
 *   <img src={img('hero') || '/fallback.png'} />
 *   <img src={img('services', 1) || '/fallback.png'} />  // sort_order 1
 */
export function useSiteImages(page: string) {
  const [map, setMap] = useState<Record<string, string>>({});

  useEffect(() => {
    supabase
      .from('site_images')
      .select('section, label, image_url, sort_order')
      .eq('page', page)
      .order('section')
      .order('sort_order')
      .then(({ data }) => {
        if (!data) return;
        const m: Record<string, string> = {};
        data.forEach((img) => {
          // key by section_sortOrder
          m[`${img.section}_${img.sort_order}`] = img.image_url;
          // also keep first image per section as default
          if (!m[img.section]) m[img.section] = img.image_url;
        });
        setMap(m);
      });
  }, [page]);

  /** Get image URL.  key = section name, idx = sort_order (optional, defaults to first) */
  return (section: string, idx?: number): string => {
    if (idx !== undefined) return map[`${section}_${idx}`] ?? '';
    return map[section] ?? '';
  };
}
