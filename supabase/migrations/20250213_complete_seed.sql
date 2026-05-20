-- Complete seed migration for Avinella Global Resources CMS
-- This migration ensures all tables exist and seeds them with current website content

-- ============================================================
-- TABLES
-- ============================================================

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

ALTER TABLE job_listings ADD COLUMN IF NOT EXISTS requirements TEXT;

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

-- ============================================================
-- RLS POLICIES
-- ============================================================

ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anon all job_listings" ON job_listings;
CREATE POLICY "Anon all job_listings" ON job_listings FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Anon all site_images" ON site_images;
CREATE POLICY "Anon all site_images" ON site_images FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Anon all site_content" ON site_content;
CREATE POLICY "Anon all site_content" ON site_content FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Anon all career_applications" ON career_applications;
CREATE POLICY "Anon all career_applications" ON career_applications FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Anon all contact_submissions" ON contact_submissions;
CREATE POLICY "Anon all contact_submissions" ON contact_submissions FOR ALL USING (true) WITH CHECK (true);

-- ============================================================
-- SEED: JOB LISTINGS
-- ============================================================

DELETE FROM job_listings;

INSERT INTO job_listings (title, department, location, type, description, requirements, is_active) VALUES
(
  'Marine Operations Manager',
  'Operations',
  'Lagos, Nigeria',
  'Full-time',
  'Lead and manage all marine operations activities across our fleet of PSVs, AHTS vessels, and crew boats. Ensure compliance with international maritime standards including ISM Code, STCW, and MARPOL regulations. Oversee vessel scheduling, crew management, and port operations across West Africa.',
  'Minimum 10 years marine industry experience\nClass 1 Master Mariner certificate or equivalent\nStrong knowledge of ISM Code and STCW regulations\nExperience in West African offshore operations\nExcellent leadership and communication skills',
  true
),
(
  'HSE Coordinator',
  'HSE',
  'Port Harcourt, Nigeria',
  'Full-time',
  'Develop, implement and monitor HSE policies and procedures across all operations. Conduct risk assessments, safety audits, and incident investigations. Deliver HSE training programs and ensure compliance with ISO 45001:2018, DPR, and NIMASA regulations.',
  'Degree in Occupational Health & Safety or related field\nMinimum 5 years HSE experience in oil & gas\nNEBOSH or IOSH certification\nKnowledge of ISO 14001 and ISO 45001\nExperience conducting safety audits and incident investigations',
  true
),
(
  'Procurement Specialist',
  'Supply Chain',
  'Lagos, Nigeria',
  'Full-time',
  'Manage procurement activities for offshore equipment, safety gear, and technical instruments sourced from global suppliers. Negotiate contracts, manage supplier relationships, and ensure timely delivery of critical materials to offshore operations.',
  'Degree in Supply Chain, Business, or Engineering\nMinimum 4 years procurement experience in oil & gas\nKnowledge of offshore equipment and safety standards\nStrong negotiation and vendor management skills\nCIPS qualification preferred',
  true
),
(
  'Vessel Captain',
  'Marine',
  'Offshore – Rotational (4 weeks on / 4 weeks off)',
  'Rotational',
  'Command and manage platform supply vessels, ensuring safe and efficient operations throughout West African waters. Responsible for cargo operations, crew safety, navigation, and compliance with all maritime regulations.',
  'Class 1 Master Mariner certificate (unlimited)\nMinimum 3 years command experience on PSVs or AHTS\nDPSO Operator certificate\nHUET and BOSIET certifications current\nStrong knowledge of West African port operations',
  true
),
(
  'Logistics Coordinator',
  'Logistics',
  'Port Harcourt, Nigeria',
  'Full-time',
  'Coordinate end-to-end logistics for offshore supply operations including warehousing, transportation, and just-in-time delivery to offshore installations. Manage relationships with freight forwarders, customs agents, and port authorities.',
  'Degree in Logistics, Supply Chain, or related field\nMinimum 3 years logistics experience in oil & gas\nKnowledge of Nigerian customs and port operations\nExperience with ERP/logistics management systems\nStrong organizational and problem-solving skills',
  true
),
(
  'Marine Engineer',
  'Engineering',
  'Offshore – Rotational',
  'Rotational',
  'Responsible for the maintenance and operation of vessel machinery and systems. Conduct preventive maintenance, troubleshoot mechanical failures, and ensure all engineering equipment meets operational standards.',
  'Class 2 Engineering Officer certificate or higher\nMinimum 5 years experience on offshore support vessels\nStrong knowledge of diesel engines, hydraulics, and electrical systems\nHUET and BOSIET certifications current\nExperience with planned maintenance systems (PMS)',
  true
);

-- ============================================================
-- SEED: SITE IMAGES
-- ============================================================

DELETE FROM site_images;

INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order) VALUES

-- HOME PAGE
('home', 'hero', 'Hero Background', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=90', 'Offshore vessel at sea', 0),
('home', 'services', 'Offshore Support & Marine Services', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', 'Marine services offshore vessel', 1),
('home', 'services', 'Procurement & Equipment Supply', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80', 'Procurement and equipment supply', 2),
('home', 'services', 'Logistics & Supply Chain', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', 'Logistics and supply chain operations', 3),
('home', 'about', 'Who We Are Photo', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80', 'Offshore operations team', 0),
('home', 'banner', 'Stats Banner', 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80', 'Platform Supply Vessel at sea', 0),
('home', 'capabilities', 'Capabilities Photo', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', 'Offshore capabilities', 0),
('home', 'safety', 'Safety & Compliance', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', 'Safety operations offshore', 0),
('home', 'cta', 'CTA Background', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&q=80', 'Offshore CTA background', 0),
('home', 'fleet', 'Platform Supply Vessel', '/platform-supply-vessel.png', 'Platform supply vessel', 5),
('home', 'fleet', 'Crew Transportation & Training', '/crew-transportation-training.png', 'Crew transportation and training', 6),
('home', 'fleet', 'Emergency Response Operations', '/emergency-response-operations.png', 'Emergency response operations', 7),
('home', 'fleet', 'Platform Supply', '/platform-supply.png', 'Platform supply operations', 8),
('home', 'projects', 'Project 1 – Marine Ops', '/platform-supply-vessel.png', 'Offshore platform supply and logistics', 9),
('home', 'projects', 'Project 2 – Emergency Response', '/emergency-response-operations.png', 'Marine vessel emergency response', 10),
('home', 'projects', 'Project 3 – Procurement', '/procurement-equipment-supply.png', 'Subsea equipment procurement', 11),
('home', 'projects', 'Project 4 – Training', '/crew-transportation-training.png', 'Crew transport and HSE training', 12),

-- ABOUT PAGE
('about', 'hero', 'About Hero Background', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=90', 'Offshore operations overview', 0),
('about', 'overview', 'Company Overview Photo', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80', 'Avinella Global Resources team', 0),
('about', 'gallery', 'Gallery Image 1', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', 'Marine operations', 0),
('about', 'gallery', 'Gallery Image 2', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80', 'Equipment procurement', 1),
('about', 'gallery', 'Gallery Image 3', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', 'Logistics operations', 2),
('about', 'gallery', 'Gallery Image 4', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', 'Offshore platform', 3),
('about', 'values', 'Values Banner', 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80', 'Company values', 0),
('about', 'cta', 'About CTA', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400&q=80', 'Contact us background', 0),

-- SERVICES OVERVIEW PAGE
('services', 'fan', 'Marine Services Fan Card', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', 'Marine services offshore', 0),
('services', 'fan', 'Vessel Operations Fan Card', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Vessel operations at sea', 1),
('services', 'fan', 'Equipment Supply Fan Card', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80', 'Equipment and supply operations', 2),
('services', 'fan', 'Supply Chain Fan Card', 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80', 'Supply chain logistics', 3),
('services', 'fan', 'Safety Training Fan Card', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80', 'Safety training offshore', 4),
('services', 'why', 'Why Choose Us Main', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=900&q=80', 'Integrated services approach', 0),
('services', 'grid', 'Marine Vessel Chartering', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', 'Marine vessel chartering', 6),
('services', 'grid', 'Geotechnical Survey', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Geotechnical survey services', 7),
('services', 'grid', 'Survey Equipment', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80', 'Survey equipment supply', 8),
('services', 'grid', 'Rig and Platform Supply', 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80', 'Rig and platform supply', 9),
('services', 'grid', 'Personnel Logistics', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80', 'Offshore personnel logistics', 10),
('services', 'grid', 'Subsea Equipment', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', 'Subsea equipment handling', 11),
('services', 'grid', 'Emergency Response', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', 'Emergency response services', 12),
('services', 'grid', 'Asset Integrity', 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80', 'Asset integrity management', 13),
('services', 'grid', 'Offshore Training', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80', 'Offshore training services', 14),
('services', 'choose', 'Marine Operations Gallery 1', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', 'Marine operations', 15),
('services', 'choose', 'Equipment Gallery 2', 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80', 'Offshore equipment', 16),
('services', 'choose', 'Logistics Gallery 3', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', 'Logistics operations', 17),
('services', 'choose', 'Supply Chain Gallery 4', 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80', 'Supply chain', 18),
('services', 'cta', 'Services CTA', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400&q=80', 'Custom solutions CTA', 19),

-- OFFSHORE SERVICE PAGE
('offshore', 'hero', 'Offshore Hero Background', 'https://images.unsplash.com/photo-1568283096533-078a49469a18?w=1600&q=90', 'Offshore support vessel at sea', 0),
('offshore', 'capabilities', 'Offshore Capabilities', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', 'Offshore marine capabilities', 0),

-- PROCUREMENT SERVICE PAGE
('procurement', 'hero', 'Procurement Hero Background', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=90', 'Equipment procurement and supply', 0),
('procurement', 'capabilities', 'Procurement Capabilities', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80', 'Procurement capabilities', 0),

-- LOGISTICS SERVICE PAGE
('logistics', 'hero', 'Logistics Hero Background', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=90', 'Logistics and supply chain operations', 0),
('logistics', 'capabilities', 'Logistics Capabilities', 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=800&q=80', 'Logistics capabilities', 0),

-- HSE PAGE
('hse', 'hero', 'HSE Hero Background', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=90', 'HSE safety operations', 0),
('hse', 'commitment', 'Safety Commitment Photo', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', 'Safety commitment offshore', 0),
('hse', 'environment', 'Environmental Protection', 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80', 'Environmental protection at sea', 0),
('hse', 'team', 'HSE Team', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80', 'HSE team at work', 0),
('hse', 'cta', 'HSE CTA Background', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80', 'HSE commitment CTA', 0),

-- TRAINING PAGE
('training', 'hero', 'Training Hero Background', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=1600&q=90', 'Offshore safety training', 0),
('training', 'fan', 'BOSIET Training', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80', 'BOSIET certification training', 0),
('training', 'fan', 'HUET Training', 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80', 'HUET underwater escape training', 1),
('training', 'fan', 'Fire Safety Training', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', 'Fire safety and firefighting', 2),
('training', 'fan', 'First Aid Training', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80', 'First aid and medical response', 3),
('training', 'cta', 'Training CTA', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=1400&q=80', 'Training registration CTA', 0),

-- CAREERS PAGE
('careers', 'hero', 'Team Culture', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80', 'Team culture at work', 0),
('careers', 'hero', 'Collaboration', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80', 'Team collaboration', 1),
('careers', 'hero', 'Marine Careers', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Marine career opportunities', 2),
('careers', 'hero', 'Engineering Roles', 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=600&q=80', 'Engineering roles offshore', 3),
('careers', 'internship', 'Internship Programme', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80', 'Interns collaborating', 0),
('careers', 'culture', 'Company Culture', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80', 'Company culture and team', 0),

-- CONTACT PAGE
('contact', 'hero', 'Contact Hero Background', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=90', 'Contact Avinella Global Resources', 0),
('contact', 'map', 'Lagos Office Location', 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=800&q=80', 'Office location map', 0);

-- ============================================================
-- SEED: SITE CONTENT
-- ============================================================

DELETE FROM site_content;

INSERT INTO site_content (page, section, key, value, label, content_type, sort_order) VALUES

-- HOME PAGE
('home', 'hero', 'badge', 'West Africa''s Premier Offshore Partner', 'Hero Badge Text', 'text', 1),
('home', 'hero', 'headline_1', 'A full range of', 'Hero Headline Line 1', 'text', 2),
('home', 'hero', 'headline_2', 'services for', 'Hero Headline Line 2', 'text', 3),
('home', 'hero', 'headline_accent', 'offshore operations', 'Hero Headline Accent', 'text', 4),
('home', 'hero', 'description', 'We offer a full range of services – from sourcing and mobilising vessels to supporting them throughout their entire service life across the Gulf of Guinea.', 'Hero Description', 'textarea', 5),
('home', 'hero', 'cta_primary', 'Submit a Request', 'Hero Primary CTA Button', 'text', 6),
('home', 'hero', 'cta_secondary', 'Find Out More', 'Hero Secondary CTA Button', 'text', 7),

('home', 'stats', 'stat_1_value', '10+', 'Stat 1 Value', 'text', 1),
('home', 'stats', 'stat_1_label', 'Projects Delivered', 'Stat 1 Label', 'text', 2),
('home', 'stats', 'stat_2_value', '98%', 'Stat 2 Value', 'text', 3),
('home', 'stats', 'stat_2_label', 'On-Time Delivery Rate', 'Stat 2 Label', 'text', 4),
('home', 'stats', 'stat_3_value', '85%', 'Stat 3 Value', 'text', 5),
('home', 'stats', 'stat_3_label', 'Client Retention Rate', 'Stat 3 Label', 'text', 6),

('home', 'services', 'section_label', 'What We Do', 'Services Section Label', 'text', 1),
('home', 'services', 'section_title', 'Offshore service usage guidelines', 'Services Section Title', 'text', 2),
('home', 'services', 'card_1_tag', 'Marine', 'Service Card 1 Tag', 'text', 3),
('home', 'services', 'card_1_title', 'Offshore Support & Marine Services', 'Service Card 1 Title', 'text', 4),
('home', 'services', 'card_1_desc', 'Platform supply vessels, crew boats, AHTS vessels, and 24/7 emergency response across West Africa.', 'Service Card 1 Description', 'textarea', 5),
('home', 'services', 'card_2_tag', 'Procurement', 'Service Card 2 Tag', 'text', 6),
('home', 'services', 'card_2_title', 'Procurement & Equipment Supply', 'Service Card 2 Title', 'text', 7),
('home', 'services', 'card_2_desc', 'High-quality offshore equipment, safety gear, and technical instruments from world-leading manufacturers.', 'Service Card 2 Description', 'textarea', 8),
('home', 'services', 'card_3_tag', 'Logistics', 'Service Card 3 Tag', 'text', 9),
('home', 'services', 'card_3_title', 'Logistics & Supply Chain', 'Service Card 3 Title', 'text', 10),
('home', 'services', 'card_3_desc', 'End-to-end logistics from warehousing to just-in-time delivery at offshore installations.', 'Service Card 3 Description', 'textarea', 11),

('home', 'about', 'section_label', 'Who We Are', 'About Section Label', 'text', 1),
('home', 'about', 'headline', 'It has long been established that design and composition matter', 'About Headline', 'text', 2),
('home', 'about', 'para_1', 'Avinella Global Resources LTD is a leading provider of offshore support services in West Africa, combining technical expertise, operational excellence, and an unwavering commitment to safety.', 'About Paragraph 1', 'textarea', 3),
('home', 'about', 'para_2', 'With ISO-certified operations, a modern fleet, and presence in 8+ countries, we are not just service providers — we are strategic partners in your offshore success.', 'About Paragraph 2', 'textarea', 4),
('home', 'about', 'cta', 'Submit a Request', 'About CTA Button', 'text', 5),
('home', 'about', 'stat_value', '15+', 'Floating Stat Value', 'text', 6),
('home', 'about', 'stat_label', 'Countries Served', 'Floating Stat Label', 'text', 7),

('home', 'cta', 'headline', 'Free consultation!', 'CTA Section Headline', 'text', 1),
('home', 'cta', 'subline', 'We are ready to assist 24/7 nonstop.', 'CTA Subline', 'text', 2),
('home', 'cta', 'phone', '+234 (0) 123 456 7890', 'CTA Phone Number', 'text', 3),
('home', 'cta', 'button', 'Submit a Request', 'CTA Button Text', 'text', 4),

-- ABOUT PAGE
('about', 'hero', 'title', 'About Avinella Global Resources', 'About Page Hero Title', 'text', 1),
('about', 'hero', 'subtitle', 'A leading provider of offshore support services in West Africa, built on a foundation of excellence, safety, and innovation.', 'About Hero Subtitle', 'textarea', 2),

('about', 'overview', 'label', 'Who We Are', 'Overview Section Label', 'text', 1),
('about', 'overview', 'title', 'Powering Offshore Excellence Across West Africa', 'Overview Title', 'text', 2),
('about', 'overview', 'para_1', 'Avinella Global Resources LTD was established to bridge the gap in quality offshore support services across West Africa. Since our founding, we have grown to become a trusted partner for major oil & gas operators in the region.', 'Overview Paragraph 1', 'textarea', 3),
('about', 'overview', 'para_2', 'We offer an integrated suite of marine, procurement, and logistics services backed by ISO-certified processes and a commitment to zero incidents in all operations.', 'Overview Paragraph 2', 'textarea', 4),

('about', 'mission', 'mission_title', 'Our Mission', 'Mission Title', 'text', 1),
('about', 'mission', 'mission_text', 'To provide world-class offshore support services that enable our clients to achieve operational excellence, safely and efficiently, across all offshore environments.', 'Mission Text', 'textarea', 2),
('about', 'mission', 'vision_title', 'Our Vision', 'Vision Title', 'text', 3),
('about', 'mission', 'vision_text', 'To be the most trusted and innovative offshore support company in West Africa, recognised for our safety culture, technical expertise, and commitment to sustainable operations.', 'Vision Text', 'textarea', 4),
('about', 'mission', 'values_title', 'Our Values', 'Values Title', 'text', 5),
('about', 'mission', 'value_1', 'Safety First', 'Value 1', 'text', 6),
('about', 'mission', 'value_2', 'Operational Excellence', 'Value 2', 'text', 7),
('about', 'mission', 'value_3', 'Integrity & Transparency', 'Value 3', 'text', 8),
('about', 'mission', 'value_4', 'Innovation & Continuous Improvement', 'Value 4', 'text', 9),
('about', 'mission', 'value_5', 'Client Partnership', 'Value 5', 'text', 10),

-- SERVICES PAGE
('services', 'hero', 'title', 'Comprehensive Offshore & Marine Solutions', 'Services Hero Title', 'text', 1),
('services', 'hero', 'description', 'From marine vessel chartering to logistics and training — Avinella delivers integrated solutions for every stage of your offshore operations.', 'Services Hero Description', 'textarea', 2),
('services', 'hero', 'cta_primary', 'Request a Quote', 'Services Primary CTA', 'text', 3),

('services', 'overview', 'section_label', 'What We Offer', 'Services Overview Label', 'text', 1),
('services', 'overview', 'section_title', 'Our Service Portfolio', 'Services Overview Title', 'text', 2),
('services', 'overview', 'section_desc', 'Tailored solutions for every stage of offshore operations — delivered by experts who know the industry.', 'Services Overview Description', 'textarea', 3),

-- HSE PAGE
('hse', 'hero', 'title', 'Health, Safety & Environment', 'HSE Hero Title', 'text', 1),
('hse', 'hero', 'subtitle', 'Safety is not just a priority at Avinella — it is our core value. We are committed to achieving zero incidents across all operations.', 'HSE Hero Subtitle', 'textarea', 2),

('hse', 'commitment', 'label', 'Our Commitment', 'Commitment Label', 'text', 1),
('hse', 'commitment', 'title', 'Safety Is At The Heart Of Everything We Do', 'Commitment Title', 'text', 2),
('hse', 'commitment', 'description', 'Our HSE management system is built on international best practices, including ISO 45001:2018, and is integrated into every aspect of our operations — from vessel management to procurement and logistics.', 'Commitment Description', 'textarea', 3),
('hse', 'commitment', 'stat_1', 'Zero LTI in 2023', 'HSE Stat 1', 'text', 4),
('hse', 'commitment', 'stat_2', 'ISO 45001:2018 Certified', 'HSE Stat 2', 'text', 5),
('hse', 'commitment', 'stat_3', 'DPR & NIMASA Registered', 'HSE Stat 3', 'text', 6),
('hse', 'commitment', 'stat_4', 'STCW Compliant Fleet', 'HSE Stat 4', 'text', 7),

('hse', 'environment', 'label', 'Environmental Protection', 'Environment Label', 'text', 1),
('hse', 'environment', 'title', 'Protecting Our Marine Environment', 'Environment Title', 'text', 2),
('hse', 'environment', 'description', 'We operate in full compliance with MARPOL regulations and ISO 14001:2015 environmental management standards. Our operations are designed to minimise environmental impact across all activities.', 'Environment Description', 'textarea', 3),

-- TRAINING PAGE
('training', 'hero', 'title', 'Training & Competence Development', 'Training Hero Title', 'text', 1),
('training', 'hero', 'subtitle', 'Building the competence of offshore professionals through internationally accredited training programmes designed for the modern energy sector.', 'Training Hero Subtitle', 'textarea', 2),

('training', 'overview', 'label', 'Our Programmes', 'Training Overview Label', 'text', 1),
('training', 'overview', 'title', 'Industry-Certified Offshore Training', 'Training Overview Title', 'text', 2),
('training', 'overview', 'description', 'All our training courses are developed to meet or exceed international standards set by IMO, STCW, and OPITO. Participants receive internationally recognised certifications.', 'Training Overview Description', 'textarea', 3),
('training', 'overview', 'course_1', 'BOSIET – Basic Offshore Safety Induction & Emergency Training', 'Course 1', 'text', 4),
('training', 'overview', 'course_2', 'HUET – Helicopter Underwater Escape Training', 'Course 2', 'text', 5),
('training', 'overview', 'course_3', 'H2S Awareness & Safety', 'Course 3', 'text', 6),
('training', 'overview', 'course_4', 'First Aid & Medical Response', 'Course 4', 'text', 7),
('training', 'overview', 'course_5', 'Rigging, Lifting & Slinging Operations', 'Course 5', 'text', 8),
('training', 'overview', 'course_6', 'Firefighting & Fire Prevention', 'Course 6', 'text', 9),
('training', 'overview', 'cta', 'Register for Training', 'Training CTA Button', 'text', 10),

-- CAREERS PAGE
('careers', 'hero', 'title', 'Join Avinella Global Resources', 'Careers Hero Title', 'text', 1),
('careers', 'hero', 'subtitle', 'Build your career with a leading offshore support company in West Africa. We invest in our people and value every contribution to our team.', 'Careers Hero Subtitle', 'textarea', 2),

('careers', 'why', 'label', 'Why Work With Us', 'Why Work Label', 'text', 1),
('careers', 'why', 'title', 'A Career That Makes a Difference', 'Why Work Title', 'text', 2),
('careers', 'why', 'description', 'At Avinella, we believe our people are our greatest asset. We offer competitive compensation, professional development opportunities, and a culture built on respect and excellence.', 'Why Work Description', 'textarea', 3),
('careers', 'why', 'benefit_1', 'Competitive Salary & Benefits Package', 'Benefit 1', 'text', 4),
('careers', 'why', 'benefit_2', 'Professional Development & Training', 'Benefit 2', 'text', 5),
('careers', 'why', 'benefit_3', 'International Exposure & Growth', 'Benefit 3', 'text', 6),
('careers', 'why', 'benefit_4', 'Strong Safety Culture', 'Benefit 4', 'text', 7),
('careers', 'why', 'benefit_5', 'Team-Oriented Work Environment', 'Benefit 5', 'text', 8),

('careers', 'internship', 'label', 'Graduate & Internship Programme', 'Internship Label', 'text', 1),
('careers', 'internship', 'title', 'Launch Your Offshore Career With Us', 'Internship Title', 'text', 2),
('careers', 'internship', 'description', 'Our graduate programme is designed to give talented individuals a structured pathway into the offshore industry. Interns work alongside experienced professionals on live projects.', 'Internship Description', 'textarea', 3),
('careers', 'internship', 'duration', '6–12 months', 'Internship Duration', 'text', 4),
('careers', 'internship', 'cta', 'Apply for Internship', 'Internship CTA', 'text', 5),

-- CONTACT PAGE
('contact', 'hero', 'title', 'Get In Touch', 'Contact Hero Title', 'text', 1),
('contact', 'hero', 'subtitle', 'Have a project in mind or need a quote? Our team is ready to assist you 24/7.', 'Contact Hero Subtitle', 'textarea', 2),

('contact', 'info', 'company_name', 'Avinella Global Resources LTD', 'Company Name', 'text', 1),
('contact', 'info', 'address_1', 'Plot 15, Adeola Odeku Street', 'Address Line 1', 'text', 2),
('contact', 'info', 'address_2', 'Victoria Island, Lagos, Nigeria', 'Address Line 2', 'text', 3),
('contact', 'info', 'phone_1', '+234 (0) 123 456 7890', 'Phone Number 1', 'text', 4),
('contact', 'info', 'phone_2', '+234 (0) 987 654 3210', 'Phone Number 2', 'text', 5),
('contact', 'info', 'email_1', 'info@avinellaglobal.com', 'Email Address 1', 'text', 6),
('contact', 'info', 'email_2', 'operations@avinellaglobal.com', 'Email Address 2', 'text', 7),
('contact', 'info', 'hours', 'Monday – Friday: 8am – 6pm WAT | Emergency: 24/7', 'Office Hours', 'text', 8),

('contact', 'cta', 'form_title', 'Send Us a Message', 'Contact Form Title', 'text', 1),
('contact', 'cta', 'form_desc', 'Fill in the form below and one of our team members will get back to you within 24 hours.', 'Contact Form Description', 'textarea', 2),
('contact', 'cta', 'submit_button', 'Send Message', 'Form Submit Button Text', 'text', 3);

-- ============================================================
-- ENABLE REALTIME (safe to run multiple times)
-- ============================================================

DO $$
BEGIN
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE job_listings;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE site_images;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE site_content;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE career_applications;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE contact_submissions;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
END $$;
