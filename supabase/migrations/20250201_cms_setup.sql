CREATE TABLE IF NOT EXISTS job_listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT,
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

INSERT INTO job_listings (title, department, location, type, description, is_active) VALUES
  ('Marine Operations Manager', 'Operations', 'Lagos, Nigeria', 'Full-time', 'Lead and manage all marine operations activities across our fleet, ensuring compliance with international maritime standards.', true),
  ('HSE Coordinator', 'HSE', 'Port Harcourt, Nigeria', 'Full-time', 'Develop, implement and monitor HSE policies and procedures across all operations in compliance with industry standards.', true),
  ('Procurement Specialist', 'Supply Chain', 'Lagos, Nigeria', 'Full-time', 'Manage procurement activities for offshore equipment, safety gear and technical instruments from global suppliers.', true),
  ('Vessel Captain', 'Marine', 'Offshore', 'Rotational', 'Command and manage platform supply vessels, ensuring safe and efficient operations throughout West African waters.', true)
ON CONFLICT DO NOTHING;

INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order) VALUES
  ('home', 'hero', 'Hero Background', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=90', 'Offshore vessel at sea', 0),
  ('home', 'services', 'Marine Services Card', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', 'Marine services offshore vessel', 1),
  ('home', 'services', 'Procurement Card', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80', 'Procurement and equipment supply', 2),
  ('home', 'services', 'Logistics Card', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', 'Logistics and supply chain', 3),
  ('careers', 'hero', 'Team Culture', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80', 'Team culture at work', 0),
  ('careers', 'hero', 'Collaboration', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80', 'Team collaboration', 1),
  ('careers', 'hero', 'Marine Careers', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Marine career opportunities', 2),
  ('careers', 'hero', 'Engineering Roles', 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=600&q=80', 'Engineering roles offshore', 3),
  ('careers', 'internship', 'Internship Photo', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80', 'Interns collaborating', 0),
  ('services', 'offshore', 'Offshore Hero', 'https://images.unsplash.com/photo-1568283096533-078a49469a18?w=1600&q=90', 'Offshore support vessel', 0),
  ('services', 'procurement', 'Procurement Hero', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=90', 'Equipment procurement', 0),
  ('services', 'logistics', 'Logistics Hero', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=90', 'Logistics operations', 0)
ON CONFLICT DO NOTHING;

ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read job_listings" ON job_listings;
CREATE POLICY "Public read job_listings"
  ON job_listings FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public read site_images" ON site_images;
CREATE POLICY "Public read site_images"
  ON site_images FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public insert career_applications" ON career_applications;
CREATE POLICY "Public insert career_applications"
  ON career_applications FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Anon all job_listings" ON job_listings;
CREATE POLICY "Anon all job_listings"
  ON job_listings FOR ALL
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Anon all site_images" ON site_images;
CREATE POLICY "Anon all site_images"
  ON site_images FOR ALL
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Anon all career_applications" ON career_applications;
CREATE POLICY "Anon all career_applications"
  ON career_applications FOR ALL
  USING (true)
  WITH CHECK (true);

ALTER PUBLICATION supabase_realtime ADD TABLE job_listings;
ALTER PUBLICATION supabase_realtime ADD TABLE site_images;
