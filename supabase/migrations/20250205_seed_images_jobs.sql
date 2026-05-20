-- Seed job listings if table is empty
INSERT INTO job_listings (title, department, location, type, description, is_active)
SELECT title, department, location, type, description, is_active FROM (VALUES
  ('Marine Operations Manager', 'Operations', 'Lagos, Nigeria', 'Full-time', 'Lead and manage all marine operations activities across our fleet, ensuring compliance with international maritime standards.', true),
  ('HSE Coordinator', 'HSE', 'Port Harcourt, Nigeria', 'Full-time', 'Develop, implement and monitor HSE policies and procedures across all operations in compliance with industry standards.', true),
  ('Procurement Specialist', 'Supply Chain', 'Lagos, Nigeria', 'Full-time', 'Manage procurement activities for offshore equipment, safety gear and technical instruments from global suppliers.', true),
  ('Vessel Captain', 'Marine', 'Offshore', 'Rotational', 'Command and manage platform supply vessels, ensuring safe and efficient operations throughout West African waters.', true)
) AS v(title, department, location, type, description, is_active)
WHERE NOT EXISTS (SELECT 1 FROM job_listings LIMIT 1);

-- Seed site images if table is empty
INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order)
SELECT page, section, label, image_url, alt_text, sort_order FROM (VALUES
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
  ('services', 'logistics', 'Logistics Hero', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=90', 'Logistics operations', 0),
  ('hse', 'hero', 'HSE Hero', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=90', 'Safety operations offshore', 0),
  ('training', 'hero', 'Training Hero', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=90', 'Training and competence', 0),
  ('about', 'hero', 'About Hero', 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=1600&q=90', 'About Avinella Global Resources', 0)
) AS v(page, section, label, image_url, alt_text, sort_order)
WHERE NOT EXISTS (SELECT 1 FROM site_images LIMIT 1);
