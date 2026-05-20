-- Ensure all CMS tables exist with full schema
CREATE TABLE IF NOT EXISTS job_listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT,
  requirements TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS site_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page TEXT NOT NULL,
  section TEXT NOT NULL,
  label TEXT NOT NULL,
  image_url TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS career_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  position TEXT NOT NULL,
  cover_letter TEXT,
  cv_url TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS site_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page TEXT NOT NULL,
  section TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  label TEXT NOT NULL,
  content_type TEXT DEFAULT 'text',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(page, section, key)
);

-- Add requirements column if it doesn't exist
ALTER TABLE job_listings ADD COLUMN IF NOT EXISTS requirements TEXT;

-- Enable RLS
ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;

-- Policies (drop first to avoid conflicts)
DROP POLICY IF EXISTS "Anon all job_listings" ON job_listings;
CREATE POLICY "Anon all job_listings" ON job_listings FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Anon all site_images" ON site_images;
CREATE POLICY "Anon all site_images" ON site_images FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Anon all career_applications" ON career_applications;
CREATE POLICY "Anon all career_applications" ON career_applications FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Anon all contact_submissions" ON contact_submissions;
CREATE POLICY "Anon all contact_submissions" ON contact_submissions FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Anon all site_content" ON site_content;
CREATE POLICY "Anon all site_content" ON site_content FOR ALL USING (true) WITH CHECK (true);

-- Add unique constraints if not already present (ignore if already exist)
DO $$ BEGIN
  ALTER TABLE site_images ADD CONSTRAINT site_images_page_section_label_key UNIQUE (page, section, label);
EXCEPTION WHEN duplicate_table THEN NULL;
WHEN others THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE job_listings ADD CONSTRAINT job_listings_title_key UNIQUE (title);
EXCEPTION WHEN duplicate_table THEN NULL;
WHEN others THEN NULL;
END $$;

-- ── SEED JOB LISTINGS ────────────────────────────────────────────────────────
INSERT INTO job_listings (title, department, location, type, description, requirements, is_active) VALUES
  ('Marine Operations Manager', 'Operations', 'Lagos, Nigeria', 'Full-time',
   'Lead and manage all marine operations activities across our fleet, ensuring compliance with international maritime standards. Oversee vessel scheduling, crew coordination, and operational efficiency. Serve as the primary liaison between onshore management and vessel masters.',
   '• Minimum 8 years experience in marine operations or offshore industry\n• STCW Basic Safety Training certification\n• Strong leadership and communication skills\n• Knowledge of IMCA, ISM and ISPS codes\n• Proficiency in vessel scheduling and logistics software',
   true),
  ('HSE Coordinator', 'HSE', 'Port Harcourt, Nigeria', 'Full-time',
   'Develop, implement and monitor HSE policies and procedures across all operations in compliance with IMCA, OPITO and industry standards. Conduct risk assessments, safety audits, incident investigations, and drive a culture of continuous safety improvement.',
   '• Bachelor''s degree in Engineering, Environmental Science or related field\n• Minimum 5 years HSE experience in oil & gas or offshore sector\n• NEBOSH or equivalent HSE certification\n• Knowledge of Nigerian Oil and Gas Industry Content Development regulations\n• Experience with incident investigation methodologies (ICAM, TapRoot)',
   true),
  ('Procurement Specialist', 'Supply Chain', 'Lagos, Nigeria', 'Full-time',
   'Manage procurement activities for offshore equipment, safety gear and technical instruments from global suppliers. Negotiate contracts, manage vendor relationships, and ensure timely delivery of critical materials while maintaining quality standards.',
   '• Bachelor''s degree in Supply Chain Management, Business or Engineering\n• 4+ years procurement experience in offshore or industrial sector\n• CIPS certification (preferred)\n• Strong negotiation and vendor management skills\n• Experience with ERP systems and procurement software',
   true),
  ('Vessel Captain', 'Marine', 'Offshore', 'Rotational',
   'Command and manage platform supply vessels (PSV), ensuring safe and efficient operations throughout West African waters. Maintain STCW certifications and ensure full regulatory compliance with classification society requirements and flag state regulations.',
   '• Valid STCW II/2 (OOW 3000GT or Master) Certificate of Competency\n• Minimum 5 years experience as Master or Chief Officer on PSVs\n• Knowledge of DP operations (DPII preferred)\n• Current BOSIET/HUET certification\n• Experience operating in West African offshore waters',
   true),
  ('Logistics Coordinator', 'Logistics', 'Lagos, Nigeria', 'Full-time',
   'Coordinate end-to-end logistics for offshore support operations including cargo planning, customs clearance, warehousing, and supply chain optimization. Manage relationships with freight forwarders, customs brokers, and port authorities.',
   '• Bachelor''s degree in Logistics, Supply Chain or related field\n• 3+ years logistics experience preferably in oil & gas\n• Knowledge of Nigerian customs regulations and import/export procedures\n• Proficiency in logistics management systems\n• Strong organizational and problem-solving skills',
   true),
  ('Marine Engineer', 'Engineering', 'Offshore / Lagos', 'Rotational',
   'Maintain and repair vessel machinery, propulsion systems, and all onboard equipment. Ensure operational readiness and compliance with classification society requirements. Oversee planned maintenance systems and emergency repairs.',
   '• HND or B.Eng in Marine Engineering or Mechanical Engineering\n• Class 2 Motor Certificate of Competency (or equivalent)\n• Minimum 4 years sea-going experience as engineer officer\n• Experience with diesel-electric propulsion systems preferred\n• Current STCW and BOSIET certifications',
   true)
ON CONFLICT (title) DO UPDATE
  SET description = EXCLUDED.description,
      requirements = EXCLUDED.requirements,
      department = EXCLUDED.department,
      location = EXCLUDED.location,
      type = EXCLUDED.type,
      is_active = EXCLUDED.is_active,
      updated_at = NOW();

-- ── SEED SITE CONTENT ────────────────────────────────────────────────────────
INSERT INTO site_content (page, section, key, value, label, content_type, sort_order) VALUES
  ('home', 'hero', 'headline', 'Offshore Excellence, Delivered Worldwide', 'Hero Headline', 'text', 1),
  ('home', 'hero', 'subheadline', 'Avinella Global Resources LTD provides world-class offshore support, marine logistics, and procurement solutions across West Africa and beyond.', 'Hero Subheadline', 'textarea', 2),
  ('home', 'hero', 'cta_primary', 'Explore Our Services', 'Primary CTA Button', 'text', 3),
  ('home', 'hero', 'cta_secondary', 'Get In Touch', 'Secondary CTA Button', 'text', 4),
  ('home', 'about', 'title', 'Who We Are', 'Section Title', 'text', 1),
  ('home', 'about', 'description', 'Avinella Global Resources LTD is a Nigerian-registered offshore support company delivering integrated marine, logistics, and procurement solutions to the oil & gas industry since 2018.', 'Section Description', 'textarea', 2),
  ('home', 'stats', 'projects', '10+', 'Projects Delivered Value', 'text', 1),
  ('home', 'stats', 'delivery_rate', '98%', 'On-Time Delivery Rate Value', 'text', 2),
  ('home', 'stats', 'retention_rate', '85%', 'Client Retention Rate Value', 'text', 3),
  ('about', 'hero', 'headline', 'About Avinella Global Resources', 'Hero Headline', 'text', 1),
  ('about', 'hero', 'subheadline', 'A trusted partner in offshore support, marine services, and integrated logistics solutions.', 'Hero Subheadline', 'textarea', 2),
  ('about', 'overview', 'title', 'Company Overview', 'Section Title', 'text', 1),
  ('about', 'overview', 'description', 'Avinella Global Resources LTD was incorporated in Nigeria with a focus on providing top-tier offshore support services to the oil and gas sector. Since our founding in 2018, we have grown into a reliable partner for major operators across West Africa.', 'Section Description', 'textarea', 2),
  ('about', 'mission', 'mission', 'To deliver innovative, safe, and efficient offshore support solutions that empower our clients to achieve operational excellence.', 'Mission Statement', 'textarea', 1),
  ('about', 'mission', 'vision', 'To be the foremost offshore support and marine services company in West Africa, recognized globally for operational excellence.', 'Vision Statement', 'textarea', 2),
  ('about', 'mission', 'values', 'Safety, Integrity, Excellence, Innovation, Sustainability', 'Core Values', 'text', 3),
  ('hse', 'hero', 'headline', 'Health, Safety & Environment', 'Hero Headline', 'text', 1),
  ('hse', 'hero', 'subheadline', 'Our commitment to HSE is unwavering. We operate with zero-compromise on safety across all our operations.', 'Hero Subheadline', 'textarea', 2),
  ('hse', 'commitment', 'title', 'Our Safety Commitment', 'Section Title', 'text', 1),
  ('hse', 'commitment', 'description', 'At Avinella, safety is not just a policy — it is our culture. Every team member is empowered to stop work if they identify an unsafe condition.', 'Section Description', 'textarea', 2),
  ('hse', 'environment', 'title', 'Environmental Protection', 'Section Title', 'text', 1),
  ('hse', 'environment', 'description', 'We are committed to minimizing our environmental footprint through responsible operational practices, waste management, and continuous improvement.', 'Section Description', 'textarea', 2),
  ('training', 'hero', 'headline', 'Training & Competence', 'Hero Headline', 'text', 1),
  ('training', 'hero', 'subheadline', 'Building the next generation of offshore professionals through world-class training and certification programs.', 'Hero Subheadline', 'textarea', 2),
  ('training', 'overview', 'title', 'Our Training Programs', 'Section Title', 'text', 1),
  ('training', 'overview', 'description', 'We offer a comprehensive range of OPITO-approved and industry-recognized training courses designed for offshore and marine professionals.', 'Section Description', 'textarea', 2),
  ('training', 'cta', 'text', 'Register for a Course', 'CTA Button Text', 'text', 1),
  ('careers', 'hero', 'headline', 'Build Your Career With Us', 'Hero Headline', 'text', 1),
  ('careers', 'hero', 'subheadline', 'Join a team of offshore professionals dedicated to excellence, safety, and innovation in West Africa and beyond.', 'Hero Subheadline', 'textarea', 2),
  ('careers', 'why', 'title', 'Why Work at Avinella?', 'Section Title', 'text', 1),
  ('careers', 'why', 'description', 'We offer competitive compensation, career development opportunities, and the chance to work on exciting offshore projects across the region.', 'Section Description', 'textarea', 2),
  ('careers', 'internship', 'title', 'Internship Programme', 'Section Title', 'text', 1),
  ('careers', 'internship', 'description', 'Our internship programme offers recent graduates the opportunity to gain hands-on experience in offshore operations, logistics, and technical roles.', 'Section Description', 'textarea', 2),
  ('contact', 'hero', 'headline', 'Get In Touch', 'Hero Headline', 'text', 1),
  ('contact', 'hero', 'subheadline', 'Have a question or want to work with us? We would love to hear from you.', 'Hero Subheadline', 'textarea', 2),
  ('contact', 'info', 'address', '14 Adeola Odeku Street, Victoria Island, Lagos, Nigeria', 'Office Address', 'textarea', 1),
  ('contact', 'info', 'phone', '+234 (0) 803 000 0000', 'Phone Number', 'text', 2),
  ('contact', 'info', 'email', 'info@avinellaglobal.com', 'Email Address', 'text', 3),
  ('services', 'hero', 'headline', 'Our Services', 'Hero Headline', 'text', 1),
  ('services', 'hero', 'subheadline', 'Comprehensive offshore support solutions tailored to the oil & gas industry.', 'Hero Subheadline', 'textarea', 2)
ON CONFLICT (page, section, key) DO UPDATE
  SET value = EXCLUDED.value,
      label = EXCLUDED.label,
      content_type = EXCLUDED.content_type,
      sort_order = EXCLUDED.sort_order,
      updated_at = NOW();

-- ── SEED SITE IMAGES ─────────────────────────────────────────────────────────
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order) VALUES
  ('home', 'hero', 'Hero Background', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=90', 'Offshore vessel at sea', 0),
  ('home', 'services', 'Marine Services Card', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', 'Marine services offshore vessel', 1),
  ('home', 'services', 'Procurement Card', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80', 'Procurement and equipment supply', 2),
  ('home', 'services', 'Logistics Card', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', 'Logistics and supply chain', 3),
  ('home', 'about', 'Who We Are Photo', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80', 'Offshore operations team', 4),
  ('home', 'fleet', 'Platform Supply Vessel', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', 'Platform supply vessel', 5),
  ('home', 'fleet', 'Crew Transportation', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', 'Crew transportation vessel', 6),
  ('home', 'fleet', 'Emergency Response', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Emergency response vessel', 7),
  ('home', 'fleet', 'Platform Supply', 'https://images.unsplash.com/photo-1568283096533-078a49469a18?w=600&q=80', 'Platform supply operations', 8),
  ('home', 'projects', 'Project 1 – PSV Supply', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', 'Offshore Platform Supply & Logistics', 9),
  ('home', 'projects', 'Project 2 – Emergency', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Marine Vessel Operations & Emergency Response', 10),
  ('home', 'projects', 'Project 3 – Procurement', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80', 'Subsea Equipment Procurement & Delivery', 11),
  ('home', 'projects', 'Project 4 – Training', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80', 'Crew Transport, Training & HSE Certification', 12),
  ('home', 'banner', 'Stats Banner Photo', 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80', 'Platform supply vessel at sea', 13),
  ('home', 'capabilities', 'Capabilities Photo', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', 'Offshore capabilities', 14),
  ('home', 'safety', 'Safety & Compliance Photo', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', 'Safety and compliance operations', 15),
  ('home', 'cta', 'CTA Background', 'https://images.unsplash.com/photo-1568283096533-078a49469a18?w=1400&q=80', 'Contact us background', 16),
  ('about', 'hero', 'About Hero Background', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80', 'About Avinella Global Resources', 0),
  ('about', 'gallery', 'Gallery – Operations', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80', 'Offshore operations', 0),
  ('about', 'gallery', 'Gallery – Vessels', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80', 'Offshore vessels', 1),
  ('about', 'gallery', 'Gallery – Equipment', 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=400&q=80', 'Equipment supply', 2),
  ('about', 'gallery', 'Gallery – Safety', 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80', 'Safety and compliance', 3),
  ('about', 'values', 'Values Banner', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80', 'Safety and integrity first', 0),
  ('about', 'why', 'Why – Offshore Operations', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80', 'Offshore operations that never stop', 0),
  ('about', 'services', 'Services – Marine', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', 'Offshore support and marine services', 0),
  ('about', 'services', 'Services – Procurement', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80', 'Procurement and equipment supply', 1),
  ('about', 'services', 'Services – Logistics', 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80', 'Logistics and supply chain', 2),
  ('about', 'services', 'Services – Training', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80', 'Training and competence', 3),
  ('about', 'cta', 'CTA Background', 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=1400&q=80', 'Partner with Avinella Global Resources', 0),
  ('services', 'fan', 'Fan Card – Marine', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', 'Marine services', 0),
  ('services', 'fan', 'Fan Card – Vessel Ops', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Vessel operations', 1),
  ('services', 'fan', 'Fan Card – Equipment', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80', 'Equipment supply', 2),
  ('services', 'fan', 'Fan Card – Supply Chain', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', 'Supply chain', 3),
  ('services', 'fan', 'Fan Card – Training', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80', 'Safety training', 4),
  ('services', 'grid', 'Service Grid 1', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', 'Marine vessel chartering', 6),
  ('services', 'grid', 'Service Grid 2', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Survey services', 7),
  ('services', 'grid', 'Service Grid 3', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80', 'Equipment supply', 8),
  ('services', 'cta', 'Services CTA Background', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400&q=80', 'Need a custom solution', 19),
  ('offshore', 'hero', 'Hero Background', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80', 'Offshore support vessel at sea', 0),
  ('offshore', 'capabilities', 'Capabilities Photo', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', 'Marine operations capabilities', 0),
  ('procurement', 'hero', 'Hero Photo', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', 'Equipment procurement and supply', 0),
  ('procurement', 'capabilities', 'Capabilities Photo', 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80', 'Equipment warehouse', 0),
  ('logistics', 'hero', 'Hero Photo', 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80', 'Logistics operations', 0),
  ('logistics', 'capabilities', 'Capabilities Photo', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80', 'Supply chain management', 0),
  ('hse', 'hero', 'HSE Hero Background', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=90', 'Safety operations offshore', 0),
  ('hse', 'commitment', 'Safety Commitment Photo', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', 'Safety commitment at work', 1),
  ('hse', 'environment', 'Environment Photo', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', 'Environmental protection', 2),
  ('hse', 'team', 'HSE Team Photo', 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=800&q=80', 'HSE team at work', 3),
  ('hse', 'cta', 'HSE CTA Background', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80', 'HSE call to action', 4),
  ('training', 'hero', 'Training Hero', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=90', 'Training and competence development', 0),
  ('training', 'fan', 'Fan – BOSIET Training', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', 'BOSIET safety training', 1),
  ('training', 'fan', 'Fan – Emergency Drills', 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80', 'Emergency drills HUET training', 2),
  ('training', 'fan', 'Fan – H2S Training', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', 'H2S safety training', 3),
  ('training', 'fan', 'Fan – Rigging & Lifting', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Rigging and lifting operations', 4),
  ('training', 'cta', 'Training CTA Background', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=1400&q=80', 'Register for training', 5),
  ('careers', 'hero', 'Hero – Team Culture', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80', 'Team culture at work', 0),
  ('careers', 'hero', 'Hero – Collaboration', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80', 'Team collaboration', 1),
  ('careers', 'hero', 'Hero – Marine Careers', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Marine career opportunities', 2),
  ('careers', 'hero', 'Hero – Engineering Roles', 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=600&q=80', 'Engineering roles offshore', 3),
  ('careers', 'internship', 'Internship Section Photo', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80', 'Interns collaborating', 0),
  ('careers', 'culture', 'Culture Section Photo', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80', 'Company culture and values', 1),
  ('contact', 'hero', 'Contact Hero Background', 'https://images.unsplash.com/photo-1568283096533-078a49469a18?w=1600&q=90', 'Contact Avinella Global Resources', 0),
  ('contact', 'map', 'Office Location Photo', 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', 'Lagos Nigeria office location', 1)
ON CONFLICT (page, section, label) DO UPDATE
  SET image_url = EXCLUDED.image_url,
      alt_text = EXCLUDED.alt_text,
      sort_order = EXCLUDED.sort_order,
      updated_at = NOW();

-- Enable realtime (ignore if already added)
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE job_listings;
EXCEPTION WHEN others THEN NULL; END $$;
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE site_images;
EXCEPTION WHEN others THEN NULL; END $$;
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE career_applications;
EXCEPTION WHEN others THEN NULL; END $$;
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE contact_submissions;
EXCEPTION WHEN others THEN NULL; END $$;
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE site_content;
EXCEPTION WHEN others THEN NULL; END $$;
