-- Full site images seed: insert ALL images used across the website into CMS
-- Only insert if no images exist yet; otherwise just upsert by (page, section, label)

INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order)
VALUES
  -- ── HOME ───────────────────────────────────────────────────────────────────
  ('home', 'hero',          'Hero Background',          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=90',  'Offshore vessel at sea', 0),
  ('home', 'services',      'Marine Services Card',     'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',   'Marine services offshore vessel', 1),
  ('home', 'services',      'Procurement Card',         'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80','Procurement and equipment supply', 2),
  ('home', 'services',      'Logistics Card',           'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80','Logistics and supply chain', 3),
  ('home', 'about',         'Who We Are Photo',         'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80','Offshore operations', 4),
  ('home', 'fleet',         'Platform Supply Vessel',   '/platform-supply-vessel.png', 'Platform supply vessel', 5),
  ('home', 'fleet',         'Crew Transportation',      '/crew-transportation-training.png', 'Crew transportation and training', 6),
  ('home', 'fleet',         'Emergency Response',       '/emergency-response-operations.png', 'Emergency response operations', 7),
  ('home', 'fleet',         'Platform Supply',          '/platform-supply.png', 'Platform supply operations', 8),
  ('home', 'projects',      'Project 1 – PSV Supply',   '/platform-supply-vessel.png', 'Offshore Platform Supply & Logistics', 9),
  ('home', 'projects',      'Project 2 – Emergency',    '/emergency-response-operations.png', 'Marine Vessel Operations & Emergency Response', 10),
  ('home', 'projects',      'Project 3 – Procurement',  '/procurement-equipment-supply.png', 'Subsea Equipment Procurement & Delivery', 11),
  ('home', 'projects',      'Project 4 – Training',     '/crew-transportation-training.png', 'Crew Transport, Training & HSE Certification', 12),
  ('home', 'banner',        'Stats Banner Photo',       'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80','Platform supply vessel at sea', 13),
  ('home', 'capabilities',  'Capabilities Photo',       'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80','Offshore capabilities', 14),
  ('home', 'safety',        'Safety & Compliance Photo','https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80','Safety and compliance operations', 15),
  ('home', 'cta',           'CTA Background',           'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&q=80','Free consultation background', 16),

  -- ── SERVICES OVERVIEW ─────────────────────────────────────────────────────
  ('services', 'fan',        'Fan Card – Marine',        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80','Marine services', 0),
  ('services', 'fan',        'Fan Card – Vessel Ops',    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80','Vessel operations', 1),
  ('services', 'fan',        'Fan Card – Equipment',     'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80','Equipment supply', 2),
  ('services', 'fan',        'Fan Card – Supply Chain',  'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80','Supply chain', 3),
  ('services', 'fan',        'Fan Card – Training',      'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80','Safety training', 4),
  ('services', 'why',        'Why Choose Us – Main',     'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=900&q=80','Integrated solutions', 5),
  ('services', 'grid',       'Service Grid 1',           'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80','Marine vessel chartering', 6),
  ('services', 'grid',       'Service Grid 2',           'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80','Geotechnical survey services', 7),
  ('services', 'grid',       'Service Grid 3',           'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80','Survey equipment supply', 8),
  ('services', 'grid',       'Service Grid 4',           'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80','Rig and platform supply', 9),
  ('services', 'grid',       'Service Grid 5',           'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80','Personnel logistics', 10),
  ('services', 'grid',       'Service Grid 6',           'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80','Subsea equipment handling', 11),
  ('services', 'grid',       'Service Grid 7',           'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80','Emergency response', 12),
  ('services', 'grid',       'Service Grid 8',           'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80','Asset integrity management', 13),
  ('services', 'grid',       'Service Grid 9',           'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80','Offshore training services', 14),
  ('services', 'choose',     'Choose Us – Image 1',      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80','Marine operations', 15),
  ('services', 'choose',     'Choose Us – Image 2',      'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80','Equipment', 16),
  ('services', 'choose',     'Choose Us – Image 3',      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80','Logistics', 17),
  ('services', 'choose',     'Choose Us – Image 4',      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80','Supply chain', 18),
  ('services', 'cta',        'Services CTA Background',  'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400&q=80','Need a custom solution', 19),

  -- ── SERVICE: OFFSHORE ─────────────────────────────────────────────────────
  ('services', 'offshore',   'Offshore Hero',            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80','Offshore support vessel', 0),
  ('services', 'offshore',   'Offshore Capabilities',    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80','Marine operations capabilities', 1),

  -- ── SERVICE: PROCUREMENT ──────────────────────────────────────────────────
  ('services', 'procurement','Procurement Hero',         'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80','Equipment procurement', 0),
  ('services', 'procurement','Procurement Capabilities', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80','Procurement and equipment supply', 1),

  -- ── SERVICE: LOGISTICS ────────────────────────────────────────────────────
  ('services', 'logistics',  'Logistics Hero',           'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80','Logistics operations', 0),
  ('services', 'logistics',  'Logistics Capabilities',   'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80','Supply chain logistics', 1),

  -- ── HSE ───────────────────────────────────────────────────────────────────
  ('hse', 'hero',             'HSE Hero Background',     'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80','Safety operations offshore', 0),
  ('hse', 'commitment',       'Safety Commitment Photo', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80','Safety commitment', 1),
  ('hse', 'environment',      'Environment Photo',       'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80','Environmental protection', 2),
  ('hse', 'team',             'HSE Team Photo',          'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=800&q=80','HSE team at work', 3),
  ('hse', 'cta',              'HSE CTA Background',      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80','HSE call to action', 4),

  -- ── TRAINING ──────────────────────────────────────────────────────────────
  ('training', 'hero',        'Training Hero',           'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80','Training and competence', 0),
  ('training', 'fan',         'Fan – BOSIET Training',   'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80','BOSIET training', 1),
  ('training', 'fan',         'Fan – Emergency Drills',  'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80','Emergency drills HUET', 2),
  ('training', 'fan',         'Fan – H2S Training',      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80','H2S safety training', 3),
  ('training', 'fan',         'Fan – Rigging & Lifting', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80','Rigging and lifting operations', 4),
  ('training', 'cta',         'Training CTA Background', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=1400&q=80','Training CTA background', 5),

  -- ── CAREERS ───────────────────────────────────────────────────────────────
  ('careers', 'hero',         'Hero – Team Culture',     'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80','Team culture at work', 0),
  ('careers', 'hero',         'Hero – Collaboration',    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80','Team collaboration', 1),
  ('careers', 'hero',         'Hero – Marine Careers',   'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80','Marine career opportunities', 2),
  ('careers', 'hero',         'Hero – Engineering Roles','https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=600&q=80','Engineering roles offshore', 3),
  ('careers', 'internship',   'Internship Section Photo','https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80','Interns collaborating', 0),
  ('careers', 'culture',      'Culture Section Photo',   'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80','Company culture', 1),

  -- ── ABOUT ─────────────────────────────────────────────────────────────────
  ('about', 'hero',           'About Hero Background',   'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=1600&q=80','About Avinella Global Resources', 0),
  ('about', 'team',           'Team Photo 1',            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80','Team member', 1),
  ('about', 'team',           'Team Photo 2',            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80','Team member', 2),
  ('about', 'team',           'Team Photo 3',            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80','Team member', 3),
  ('about', 'overview',       'Company Overview Photo',  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80','Avinella company overview', 4),
  ('about', 'values',         'Values / Mission Photo',  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80','Company mission and values', 5),

  -- ── CONTACT ───────────────────────────────────────────────────────────────
  ('contact', 'hero',         'Contact Hero Background', 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1600&q=80','Contact us offshore', 0),
  ('contact', 'map',          'Office Location Photo',   'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80','Office location Lagos', 1)

ON CONFLICT DO NOTHING;
