-- Step 1: Remove all existing site_images and job_listings (we'll re-insert clean data)
DELETE FROM site_images;
DELETE FROM job_listings;

-- Step 2: Add unique constraints
ALTER TABLE site_images ADD CONSTRAINT site_images_page_section_label_key UNIQUE (page, section, label);
ALTER TABLE job_listings ADD CONSTRAINT job_listings_title_key UNIQUE (title);

-- ── INSERT JOB LISTINGS ────────────────────────────────────────────────────
INSERT INTO job_listings (title, department, location, type, description, is_active) VALUES
  ('Marine Operations Manager', 'Operations', 'Lagos, Nigeria', 'Full-time', 'Lead and manage all marine operations activities across our fleet, ensuring compliance with international maritime standards. Oversee vessel scheduling, crew coordination, and operational efficiency.', true),
  ('HSE Coordinator', 'HSE', 'Port Harcourt, Nigeria', 'Full-time', 'Develop, implement and monitor HSE policies and procedures across all operations in compliance with IMCA, OPITO and industry standards. Conduct risk assessments and safety audits.', true),
  ('Procurement Specialist', 'Supply Chain', 'Lagos, Nigeria', 'Full-time', 'Manage procurement activities for offshore equipment, safety gear and technical instruments from global suppliers. Negotiate contracts and ensure timely delivery of critical materials.', true),
  ('Vessel Captain', 'Marine', 'Offshore', 'Rotational', 'Command and manage platform supply vessels, ensuring safe and efficient operations throughout West African waters. Maintain STCW certifications and ensure full regulatory compliance.', true),
  ('Logistics Coordinator', 'Logistics', 'Lagos, Nigeria', 'Full-time', 'Coordinate end-to-end logistics for offshore support operations including cargo planning, customs clearance, and supply chain optimization across our operational areas.', true),
  ('Marine Engineer', 'Engineering', 'Offshore / Lagos', 'Rotational', 'Maintain and repair vessel machinery, propulsion systems, and all onboard equipment. Ensure operational readiness and compliance with classification society requirements.', true);

-- ── INSERT SITE IMAGES ────────────────────────────────────────────────────

-- HOME
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
  ('home', 'cta', 'CTA Background', 'https://images.unsplash.com/photo-1568283096533-078a49469a18?w=1400&q=80', 'Contact us background', 16);

-- SERVICES OVERVIEW
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order) VALUES
  ('services', 'fan', 'Fan Card – Marine', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', 'Marine services', 0),
  ('services', 'fan', 'Fan Card – Vessel Ops', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Vessel operations', 1),
  ('services', 'fan', 'Fan Card – Equipment', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80', 'Equipment supply', 2),
  ('services', 'fan', 'Fan Card – Supply Chain', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', 'Supply chain', 3),
  ('services', 'fan', 'Fan Card – Training', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80', 'Safety training', 4),
  ('services', 'grid', 'Service Grid 1', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', 'Marine vessel chartering', 6),
  ('services', 'grid', 'Service Grid 2', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Survey services', 7),
  ('services', 'grid', 'Service Grid 3', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80', 'Equipment supply', 8),
  ('services', 'cta', 'Services CTA Background', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400&q=80', 'Need a custom solution', 19);

-- OFFSHORE SERVICE
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order) VALUES
  ('services', 'offshore', 'Offshore Hero', 'https://images.unsplash.com/photo-1568283096533-078a49469a18?w=1600&q=90', 'Offshore support vessel at sea', 0),
  ('services', 'offshore', 'Offshore Capabilities', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', 'Marine operations capabilities', 1);

-- PROCUREMENT SERVICE
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order) VALUES
  ('services', 'procurement', 'Procurement Hero', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=90', 'Equipment procurement and supply', 0),
  ('services', 'procurement', 'Procurement Capabilities', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80', 'Procurement capabilities', 1);

-- LOGISTICS SERVICE
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order) VALUES
  ('services', 'logistics', 'Logistics Hero', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=90', 'Logistics and supply chain operations', 0),
  ('services', 'logistics', 'Logistics Capabilities', 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=800&q=80', 'Supply chain logistics', 1);

-- HSE
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order) VALUES
  ('hse', 'hero', 'HSE Hero Background', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=90', 'Safety operations offshore', 0),
  ('hse', 'commitment', 'Safety Commitment Photo', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', 'Safety commitment at work', 1),
  ('hse', 'environment', 'Environment Photo', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', 'Environmental protection', 2),
  ('hse', 'team', 'HSE Team Photo', 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=800&q=80', 'HSE team at work', 3),
  ('hse', 'cta', 'HSE CTA Background', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80', 'HSE call to action', 4);

-- TRAINING
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order) VALUES
  ('training', 'hero', 'Training Hero', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=90', 'Training and competence development', 0),
  ('training', 'fan', 'Fan – BOSIET Training', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', 'BOSIET safety training', 1),
  ('training', 'fan', 'Fan – Emergency Drills', 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80', 'Emergency drills HUET training', 2),
  ('training', 'fan', 'Fan – H2S Training', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', 'H2S safety training', 3),
  ('training', 'fan', 'Fan – Rigging & Lifting', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Rigging and lifting operations', 4),
  ('training', 'cta', 'Training CTA Background', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=1400&q=80', 'Register for training', 5);

-- CAREERS
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order) VALUES
  ('careers', 'hero', 'Hero – Team Culture', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80', 'Team culture at work', 0),
  ('careers', 'hero', 'Hero – Collaboration', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80', 'Team collaboration', 1),
  ('careers', 'hero', 'Hero – Marine Careers', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Marine career opportunities', 2),
  ('careers', 'hero', 'Hero – Engineering Roles', 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=600&q=80', 'Engineering roles offshore', 3),
  ('careers', 'internship', 'Internship Section Photo', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80', 'Interns collaborating', 0),
  ('careers', 'culture', 'Culture Section Photo', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80', 'Company culture and values', 1);

-- ABOUT
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order) VALUES
  ('about', 'hero', 'About Hero Background', 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=1600&q=90', 'About Avinella Global Resources', 0),
  ('about', 'overview', 'Company Overview Photo', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80', 'Company overview offshore operations', 1),
  ('about', 'values', 'Mission & Values Photo', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', 'Mission vision and values', 2),
  ('about', 'team', 'Team Photo 1', 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=400&q=80', 'Company leadership team', 3);

-- CONTACT
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order) VALUES
  ('contact', 'hero', 'Contact Hero Background', 'https://images.unsplash.com/photo-1568283096533-078a49469a18?w=1600&q=90', 'Contact Avinella Global Resources', 0),
  ('contact', 'map', 'Office Location Photo', 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', 'Lagos Nigeria office location', 1);
