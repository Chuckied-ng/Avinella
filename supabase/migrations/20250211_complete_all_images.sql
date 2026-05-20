-- Insert all images that are currently hardcoded in the website pages
-- Uses ON CONFLICT to safely upsert without duplicating

-- ── ABOUT PAGE ────────────────────────────────────────────────────────────────
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order)
VALUES
  ('about', 'hero',     'About Hero Background',    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80', 'About Avinella Global Resources', 0),
  ('about', 'gallery',  'Gallery – Operations',     'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80',  'Offshore operations', 0),
  ('about', 'gallery',  'Gallery – Vessels',        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80',  'Offshore vessels', 1),
  ('about', 'gallery',  'Gallery – Equipment',      'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=400&q=80',  'Equipment supply', 2),
  ('about', 'gallery',  'Gallery – Safety',         'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80',  'Safety and compliance', 3),
  ('about', 'values',   'Values Banner',            'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80', 'Safety and integrity first', 0),
  ('about', 'why',      'Why – Offshore Operations','https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80',  'Offshore operations that never stop', 0),
  ('about', 'services', 'Services – Marine',        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80',  'Offshore support and marine services', 0),
  ('about', 'services', 'Services – Procurement',   'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',  'Procurement and equipment supply', 1),
  ('about', 'services', 'Services – Logistics',     'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80',  'Logistics and supply chain', 2),
  ('about', 'services', 'Services – Training',      'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80',  'Training and competence', 3),
  ('about', 'cta',      'CTA Background',           'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=1400&q=80', 'Partner with Avinella Global Resources', 0)
ON CONFLICT (page, section, label) DO UPDATE
  SET image_url = EXCLUDED.image_url,
      alt_text  = EXCLUDED.alt_text,
      sort_order = EXCLUDED.sort_order,
      updated_at = NOW();

-- ── OFFSHORE SERVICE PAGE ─────────────────────────────────────────────────────
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order)
VALUES
  ('offshore', 'hero',         'Hero Background',     'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80', 'Offshore support vessel at sea', 0),
  ('offshore', 'capabilities', 'Capabilities Photo',  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',  'Marine operations capabilities', 0)
ON CONFLICT (page, section, label) DO UPDATE
  SET image_url = EXCLUDED.image_url,
      alt_text  = EXCLUDED.alt_text,
      sort_order = EXCLUDED.sort_order,
      updated_at = NOW();

-- ── PROCUREMENT SERVICE PAGE ──────────────────────────────────────────────────
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order)
VALUES
  ('procurement', 'hero',         'Hero Photo',          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',  'Equipment procurement and supply', 0),
  ('procurement', 'capabilities', 'Capabilities Photo',  'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80', 'Equipment warehouse', 0)
ON CONFLICT (page, section, label) DO UPDATE
  SET image_url = EXCLUDED.image_url,
      alt_text  = EXCLUDED.alt_text,
      sort_order = EXCLUDED.sort_order,
      updated_at = NOW();

-- ── LOGISTICS SERVICE PAGE ────────────────────────────────────────────────────
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order)
VALUES
  ('logistics', 'hero',         'Hero Photo',         'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80',  'Logistics operations', 0),
  ('logistics', 'capabilities', 'Capabilities Photo', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80', 'Supply chain management', 0)
ON CONFLICT (page, section, label) DO UPDATE
  SET image_url = EXCLUDED.image_url,
      alt_text  = EXCLUDED.alt_text,
      sort_order = EXCLUDED.sort_order,
      updated_at = NOW();

-- ── UPDATE existing HOME images that may have different URLs ──────────────────
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order)
VALUES
  ('home', 'hero', 'Hero Background', '/offshore-hero.png', 'Offshore Operations', 0)
ON CONFLICT (page, section, label) DO NOTHING;

-- ── UPDATE SECTION LABELS in CMS to match new pages ──────────────────────────
-- (No SQL needed – these are just code-side display labels)
