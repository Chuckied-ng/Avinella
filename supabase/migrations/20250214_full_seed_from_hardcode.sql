CREATE TABLE IF NOT EXISTS site_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page TEXT NOT NULL,
  section TEXT NOT NULL,
  label TEXT DEFAULT '',
  image_url TEXT NOT NULL,
  alt_text TEXT DEFAULT '',
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
  label TEXT DEFAULT '',
  content_type TEXT DEFAULT 'text',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS job_listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  department TEXT DEFAULT '',
  location TEXT DEFAULT '',
  type TEXT DEFAULT 'Full-time',
  description TEXT DEFAULT '',
  requirements TEXT DEFAULT '',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS career_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT DEFAULT '',
  position TEXT DEFAULT '',
  cover_letter TEXT DEFAULT '',
  cv_url TEXT DEFAULT '',
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT DEFAULT '',
  company TEXT DEFAULT '',
  subject TEXT DEFAULT '',
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

DELETE FROM site_images;
DELETE FROM site_content;

INSERT INTO site_images (page, section, label, image_url, alt_text, sort_order) VALUES

('home', 'hero', 'Hero Banner', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80', 'Offshore vessel at sea', 0),
('home', 'services', 'Service Card 1 – Offshore Support', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', 'Offshore support and marine services', 1),
('home', 'services', 'Service Card 2 – Procurement', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80', 'Procurement and equipment supply', 2),
('home', 'services', 'Service Card 3 – Logistics', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', 'Logistics and supply chain', 3),
('home', 'about', 'Who We Are Photo', 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80', 'Avinella Global team', 4),
('home', 'fleet', 'Platform Supply Vessel', '/platform-supply-vessel.png', 'Platform supply vessel', 5),
('home', 'fleet', 'Crew Transportation & Training', '/crew-transportation-training.png', 'Crew transportation and training', 6),
('home', 'fleet', 'Emergency Response Operations', '/emergency-response-operations.png', 'Emergency response operations', 7),
('home', 'fleet', 'Platform Supply', '/platform-supply.png', 'Platform supply operations', 8),
('home', 'projects', 'Project 1 – Offshore Platform Supply', '/platform-supply-vessel.png', 'Offshore platform supply project', 9),
('home', 'projects', 'Project 2 – Marine Vessel Operations', '/emergency-response-operations.png', 'Marine vessel operations', 10),
('home', 'projects', 'Project 3 – Equipment Procurement', '/procurement-equipment-supply.png', 'Subsea equipment procurement', 11),
('home', 'projects', 'Project 4 – Crew Transport', '/crew-transportation-training.png', 'Crew transport and training', 12),
('home', 'banner', 'Stats Banner', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&q=80', 'Offshore operations banner', 13),
('home', 'cta', 'CTA Background', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400&q=80', 'Call to action background', 14),

('about', 'hero', 'About Hero Background', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80', 'Avinella Global headquarters', 0),
('about', 'gallery', 'Gallery Photo 1', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', 'Offshore operations', 1),
('about', 'gallery', 'Gallery Photo 2', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80', 'Marine services', 2),
('about', 'gallery', 'Gallery Photo 3', 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80', 'Team at work', 3),
('about', 'gallery', 'Gallery Photo 4', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80', 'Supply chain operations', 4),
('about', 'cta', 'About CTA Background', 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1400&q=80', 'CTA background', 5),

('services', 'fan', 'Fan Card 1 – Marine Services', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', 'Marine services', 0),
('services', 'fan', 'Fan Card 2 – Vessel Operations', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Vessel operations', 1),
('services', 'fan', 'Fan Card 3 – Equipment Supply', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80', 'Equipment supply', 2),
('services', 'fan', 'Fan Card 4 – Supply Chain', 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80', 'Supply chain', 3),
('services', 'fan', 'Fan Card 5 – Safety Training', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80', 'Safety training', 4),
('services', 'why', 'Why Choose Us – Main', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=900&q=80', 'Integrated solutions', 5),
('services', 'grid', 'Grid Card 1 – Marine Vessel Chartering', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', 'Marine vessel chartering', 6),
('services', 'grid', 'Grid Card 2 – Geotechnical Survey', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 'Geotechnical survey', 7),
('services', 'grid', 'Grid Card 3 – Survey Equipment', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80', 'Survey equipment', 8),
('services', 'grid', 'Grid Card 4 – Rig & Platform Supply', 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80', 'Rig and platform supply', 9),
('services', 'grid', 'Grid Card 5 – Personnel Logistics', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80', 'Offshore personnel logistics', 10),
('services', 'grid', 'Grid Card 6 – Subsea Equipment', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', 'Subsea equipment handling', 11),
('services', 'grid', 'Grid Card 7 – Emergency Response', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', 'Emergency response', 12),
('services', 'grid', 'Grid Card 8 – Asset Integrity', 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80', 'Asset integrity management', 13),
('services', 'grid', 'Grid Card 9 – Training Services', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80', 'Offshore training services', 14),
('services', 'choose', 'Choose Us Gallery 1', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', 'Marine operations', 15),
('services', 'choose', 'Choose Us Gallery 2', 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80', 'Equipment', 16),
('services', 'choose', 'Choose Us Gallery 3', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', 'Logistics', 17),
('services', 'choose', 'Choose Us Gallery 4', 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80', 'Supply chain', 18),
('services', 'cta', 'Services CTA', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400&q=80', 'Services CTA background', 19),

('offshore', 'hero', 'Offshore Hero Background', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80', 'Offshore vessel at sea', 0),
('offshore', 'capabilities', 'Marine Operations Photo', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', 'Marine operations', 1),

('procurement', 'hero', 'Procurement Hero Photo', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', 'Equipment supply warehouse', 0),
('procurement', 'capabilities', 'Equipment Warehouse Photo', 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80', 'Equipment warehouse', 1),

('logistics', 'hero', 'Logistics Hero Photo', 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80', 'Logistics operations', 0),
('logistics', 'capabilities', 'Supply Chain Photo', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80', 'Supply chain management', 1),

('hse', 'hero', 'HSE Hero Background', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80', 'HSE safety operations', 0),
('hse', 'commitment', 'Safety Commitment Photo', 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80', 'Safety commitment', 1),
('hse', 'environment', 'Environmental Protection Photo', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80', 'Environmental protection', 2),
('hse', 'cta', 'HSE CTA Background', 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1400&q=80', 'HSE CTA', 3),

('training', 'hero', 'Training Hero Background', '/training-competence.png', 'Training and competence', 0),
('training', 'fan', 'Training Fan Card 1', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80', 'Safety training', 1),
('training', 'fan', 'Training Fan Card 2', 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80', 'Technical training', 2),
('training', 'fan', 'Training Fan Card 3', '/crew-transportation-training.png', 'Crew training', 3),
('training', 'cta', 'Training CTA', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400&q=80', 'Training CTA', 4),

('careers', 'hero', 'Careers Hero', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80', 'Careers at Avinella', 0),
('careers', 'culture', 'Company Culture', 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80', 'Company culture', 1),
('careers', 'internship', 'Internship Programme', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&q=80', 'Internship programme', 2),

('contact', 'hero', 'Contact Hero Background', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80', 'Contact us', 0);

INSERT INTO site_content (page, section, key, value, label, content_type, sort_order) VALUES

('home', 'hero', 'badge', 'Trusted Offshore Partner', 'Hero Badge', 'text', 1),
('home', 'hero', 'headline_1', 'Offshore', 'Hero Headline Line 1', 'text', 2),
('home', 'hero', 'headline_2', 'Support &', 'Hero Headline Line 2', 'text', 3),
('home', 'hero', 'headline_3', 'Marine Services', 'Hero Headline Line 3', 'text', 4),
('home', 'hero', 'description', 'Avinella Global Resources LTD delivers world-class offshore support, procurement, and logistics services across West Africa and beyond.', 'Hero Description', 'textarea', 5),
('home', 'hero', 'cta_primary', 'Explore Our Services', 'Primary CTA Button', 'text', 6),
('home', 'hero', 'cta_secondary', 'Contact Us', 'Secondary CTA Button', 'text', 7),

('home', 'stats', 'stat_1_value', '10+', 'Stat 1 Value', 'text', 1),
('home', 'stats', 'stat_1_label', 'Projects Delivered', 'Stat 1 Label', 'text', 2),
('home', 'stats', 'stat_2_value', '98%', 'Stat 2 Value', 'text', 3),
('home', 'stats', 'stat_2_label', 'On-Time Delivery Rate', 'Stat 2 Label', 'text', 4),
('home', 'stats', 'stat_3_value', '85%', 'Stat 3 Value', 'text', 5),
('home', 'stats', 'stat_3_label', 'Client Retention Rate', 'Stat 3 Label', 'text', 6),

('home', 'services', 'card_1_tag', 'Marine', 'Card 1 Tag', 'text', 1),
('home', 'services', 'card_1_title', 'Offshore Support & Marine Services', 'Card 1 Title', 'text', 2),
('home', 'services', 'card_1_desc', 'Platform supply vessels, crew boats, AHTS vessels, and 24/7 emergency response across West Africa.', 'Card 1 Description', 'textarea', 3),
('home', 'services', 'card_2_tag', 'Procurement', 'Card 2 Tag', 'text', 4),
('home', 'services', 'card_2_title', 'Procurement & Equipment Supply', 'Card 2 Title', 'text', 5),
('home', 'services', 'card_2_desc', 'High-quality offshore equipment, safety gear, and technical instruments from world-leading manufacturers.', 'Card 2 Description', 'textarea', 6),
('home', 'services', 'card_3_tag', 'Logistics', 'Card 3 Tag', 'text', 7),
('home', 'services', 'card_3_title', 'Logistics & Supply Chain', 'Card 3 Title', 'text', 8),
('home', 'services', 'card_3_desc', 'End-to-end logistics from warehousing to just-in-time delivery at offshore installations.', 'Card 3 Description', 'textarea', 9),

('home', 'about', 'title', 'Who We Are', 'About Section Title', 'text', 1),
('home', 'about', 'subtitle', 'Nigeria''s Premier Offshore Support Company', 'About Section Subtitle', 'text', 2),
('home', 'about', 'description', 'Avinella Global Resources LTD is a leading provider of offshore support, marine, and logistics services in Nigeria and across West Africa. Since 2018, we have delivered world-class solutions to oil & gas operators, supporting exploration, production, and logistics operations.', 'About Description', 'textarea', 3),
('home', 'about', 'cta', 'Learn More About Us', 'About CTA Button', 'text', 4),

('about', 'overview', 'title', 'About Avinella Global Resources LTD', 'Page Title', 'text', 1),
('about', 'overview', 'subtitle', 'Nigeria''s Premier Offshore Support Company', 'Subtitle', 'text', 2),
('about', 'overview', 'body', 'Avinella Global Resources LTD is a leading provider of offshore support, marine, and logistics services in Nigeria and across West Africa. Founded in 2018, we have grown from a focused marine services provider to a comprehensive offshore support company delivering integrated solutions across the energy value chain.', 'Body Text', 'textarea', 3),

('about', 'mission', 'mission_title', 'Our Mission', 'Mission Title', 'text', 1),
('about', 'mission', 'mission_body', 'To deliver world-class offshore support services with the highest standards of safety, quality and environmental stewardship, enabling our clients to achieve their operational objectives efficiently and responsibly.', 'Mission Body', 'textarea', 2),
('about', 'mission', 'vision_title', 'Our Vision', 'Vision Title', 'text', 3),
('about', 'mission', 'vision_body', 'To be the foremost offshore support and marine services company in West Africa, recognized for operational excellence, innovation and commitment to sustainable development.', 'Vision Body', 'textarea', 4),
('about', 'mission', 'values_title', 'Our Values', 'Values Title', 'text', 5),
('about', 'mission', 'value_1', 'Safety First', 'Value 1', 'text', 6),
('about', 'mission', 'value_2', 'Integrity', 'Value 2', 'text', 7),
('about', 'mission', 'value_3', 'Excellence', 'Value 3', 'text', 8),
('about', 'mission', 'value_4', 'Innovation', 'Value 4', 'text', 9),
('about', 'mission', 'value_5', 'Teamwork', 'Value 5', 'text', 10),

('hse', 'hero', 'badge', 'Health, Safety & Environment', 'Hero Badge', 'text', 1),
('hse', 'hero', 'title', 'Our Commitment to HSE Excellence', 'Hero Title', 'text', 2),
('hse', 'hero', 'description', 'Safety is not just a policy at Avinella — it is our culture. We maintain the highest standards of health, safety and environmental protection in all our operations.', 'Hero Description', 'textarea', 3),
('hse', 'commitment', 'title', 'Safety Commitment', 'Commitment Title', 'text', 1),
('hse', 'commitment', 'body', 'We are committed to achieving zero harm across all our operations. Our comprehensive HSE management system ensures that every team member, contractor, and stakeholder operates in a safe and healthy environment.', 'Commitment Body', 'textarea', 2),
('hse', 'commitment', 'stat_1_value', '0', 'LTI Stat Value', 'text', 3),
('hse', 'commitment', 'stat_1_label', 'Lost Time Injuries', 'LTI Stat Label', 'text', 4),
('hse', 'commitment', 'stat_2_value', '100%', 'HSE Compliance Value', 'text', 5),
('hse', 'commitment', 'stat_2_label', 'HSE Compliance Rate', 'HSE Compliance Label', 'text', 6),
('hse', 'environment', 'title', 'Environmental Protection', 'Environment Title', 'text', 1),
('hse', 'environment', 'body', 'Avinella is fully committed to environmental stewardship. We implement rigorous environmental management procedures to minimize the impact of our operations on the natural environment.', 'Environment Body', 'textarea', 2),

('training', 'hero', 'badge', 'Training & Competence', 'Hero Badge', 'text', 1),
('training', 'hero', 'title', 'Building a Competent Offshore Workforce', 'Hero Title', 'text', 2),
('training', 'hero', 'description', 'Avinella provides industry-certified training programs to develop competent, safety-conscious offshore personnel ready for the demands of modern energy operations.', 'Hero Description', 'textarea', 3),
('training', 'hero', 'cta', 'Register for Training', 'CTA Button', 'text', 4),
('training', 'courses', 'course_1_title', 'BOSIET & HUET Certification', 'Course 1 Title', 'text', 1),
('training', 'courses', 'course_1_desc', 'Basic Offshore Safety Induction and Emergency Training including Helicopter Underwater Escape Training', 'Course 1 Description', 'textarea', 2),
('training', 'courses', 'course_2_title', 'H2S Safety Training', 'Course 2 Title', 'text', 3),
('training', 'courses', 'course_2_desc', 'Hydrogen Sulfide awareness and safety procedures for offshore personnel', 'Course 2 Description', 'textarea', 4),
('training', 'courses', 'course_3_title', 'Rigging & Lifting', 'Course 3 Title', 'text', 5),
('training', 'courses', 'course_3_desc', 'Safe rigging, slinging, and lifting operations for offshore environments', 'Course 3 Description', 'textarea', 6),
('training', 'courses', 'course_4_title', 'First Aid & Firefighting', 'Course 4 Title', 'text', 7),
('training', 'courses', 'course_4_desc', 'Emergency first aid, CPR, and marine firefighting techniques', 'Course 4 Description', 'textarea', 8),
('training', 'courses', 'course_5_title', 'Dynamic Positioning (DP)', 'Course 5 Title', 'text', 9),
('training', 'courses', 'course_5_desc', 'DP Operator and Induction courses for vessel officers', 'Course 5 Description', 'textarea', 10),
('training', 'courses', 'course_6_title', 'Competency Assessments', 'Course 6 Title', 'text', 11),
('training', 'courses', 'course_6_desc', 'Structured competency frameworks and assessments for offshore roles', 'Course 6 Description', 'textarea', 12),

('careers', 'hero', 'badge', 'Careers at Avinella', 'Hero Badge', 'text', 1),
('careers', 'hero', 'title', 'Join Our World-Class Team', 'Hero Title', 'text', 2),
('careers', 'hero', 'description', 'Build your career with Nigeria''s premier offshore support company. We offer challenging roles, competitive packages, and opportunities to work on exciting projects across West Africa.', 'Hero Description', 'textarea', 3),
('careers', 'why', 'title', 'Why Work at Avinella', 'Why Work Here Title', 'text', 1),
('careers', 'why', 'benefit_1', 'Competitive salary & benefits package', 'Benefit 1', 'text', 2),
('careers', 'why', 'benefit_2', 'International working environment', 'Benefit 2', 'text', 3),
('careers', 'why', 'benefit_3', 'Career development & training opportunities', 'Benefit 3', 'text', 4),
('careers', 'why', 'benefit_4', 'Work on cutting-edge offshore projects', 'Benefit 4', 'text', 5),
('careers', 'why', 'benefit_5', 'Safety-first culture with zero-LTI record', 'Benefit 5', 'text', 6),
('careers', 'why', 'benefit_6', 'Health insurance & welfare programmes', 'Benefit 6', 'text', 7),
('careers', 'internship', 'title', 'Internship & Graduate Programme', 'Internship Title', 'text', 1),
('careers', 'internship', 'description', 'Avinella offers structured internship and graduate programmes for engineering, business, and marine disciplines. Gain hands-on experience working alongside industry professionals on live offshore projects.', 'Internship Description', 'textarea', 2),
('careers', 'internship', 'duration', '3 – 12 months', 'Programme Duration', 'text', 3),
('careers', 'internship', 'cta', 'Apply for Internship', 'Internship CTA', 'text', 4),

('contact', 'info', 'company_name', 'Avinella Global Resources LTD', 'Company Name', 'text', 1),
('contact', 'info', 'address', '1 Eleganza Plaza, Victoria Island, Lagos, Nigeria', 'Office Address', 'text', 2),
('contact', 'info', 'phone_1', '+234 803 000 0000', 'Phone 1', 'text', 3),
('contact', 'info', 'phone_2', '+234 816 000 0000', 'Phone 2', 'text', 4),
('contact', 'info', 'email_general', 'info@avinellaglobal.com', 'General Email', 'text', 5),
('contact', 'info', 'email_hr', 'careers@avinellaglobal.com', 'HR/Careers Email', 'text', 6),
('contact', 'info', 'hours', 'Monday – Friday: 8:00 AM – 6:00 PM (WAT)', 'Office Hours', 'text', 7),
('contact', 'info', 'linkedin', 'https://linkedin.com/company/avinella-global', 'LinkedIn URL', 'text', 8),
('contact', 'hero', 'title', 'Get In Touch With Us', 'Contact Page Title', 'text', 1),
('contact', 'hero', 'description', 'Have a project in mind or need a quote? Our team is ready to discuss your offshore support requirements. Reach out to us and we will get back to you within 24 hours.', 'Contact Page Description', 'textarea', 2);

INSERT INTO job_listings (title, department, location, type, description, requirements, is_active)
SELECT * FROM (VALUES
  (
    'Marine Operations Manager',
    'Marine Operations',
    'Lagos, Nigeria',
    'Full-time',
    'Lead and manage day-to-day marine vessel operations, ensuring safe, efficient, and cost-effective execution of all offshore support activities. Coordinate with vessel masters, port agents, and clients.',
    'Minimum 8 years in marine operations\nClass 1 Master (Unlimited) or equivalent\nProven leadership experience\nKnowledge of offshore oil & gas industry\nStrong HSE background',
    true
  ),
  (
    'HSE Coordinator',
    'Health, Safety & Environment',
    'Port Harcourt, Nigeria',
    'Full-time',
    'Implement and monitor the company HSE Management System across all offshore and onshore operations. Conduct safety audits, incident investigations, and deliver HSE training programmes.',
    'Degree in Safety Engineering or related field\nNEBOSH or IOSH certification\nMinimum 5 years HSE experience in oil & gas\nFamiliar with ISO 45001 and ISO 14001',
    true
  ),
  (
    'Procurement Specialist',
    'Procurement & Supply Chain',
    'Lagos, Nigeria',
    'Full-time',
    'Source, negotiate, and procure offshore equipment, consumables, and services from local and international suppliers. Manage vendor relationships and ensure on-time delivery to offshore locations.',
    'Degree in Supply Chain, Engineering, or Business\nMinimum 4 years procurement experience in oil & gas\nProficient in ERP procurement systems\nStrong negotiation and communication skills',
    true
  ),
  (
    'Vessel Captain (PSV)',
    'Marine Operations',
    'Offshore – Nigeria',
    'Rotational (4/4)',
    'Command a Platform Supply Vessel (PSV) and ensure safe and efficient vessel operations, crew management, cargo handling, and compliance with SOLAS, MARPOL, and company procedures.',
    'STCW Class 1 Master Certificate (Unlimited)\nMinimum 3 years as Master on PSV or offshore vessel\nDP Operator Certificate (DPOP/DPOQ)\nFamiliar with DP2 class vessels\nNIMASA endorsement required',
    true
  ),
  (
    'Logistics Coordinator',
    'Logistics & Supply Chain',
    'Lagos, Nigeria',
    'Full-time',
    'Coordinate end-to-end logistics for offshore supply operations including freight forwarding, customs clearance, warehousing, and transportation. Liaise with offshore teams, port agents, and clients.',
    'Degree in Logistics, Business, or related field\nMinimum 3 years logistics experience, preferably in oil & gas\nKnowledge of Nigerian customs and import regulations\nProficient in MS Office and logistics systems',
    true
  ),
  (
    'Marine Engineer (Chief)',
    'Marine Engineering',
    'Offshore – Nigeria',
    'Rotational (4/4)',
    'Responsible for the overall engineering operation, maintenance, and repair of all machinery and mechanical equipment aboard the vessel. Ensure compliance with class, flag state, and company requirements.',
    'Class 1 Engineer Certificate of Competency\nMinimum 3 years as Chief Engineer on similar vessel type\nStrong knowledge of diesel engines, hydraulics, and automation systems\nSTCW certifications current',
    true
  )
) AS v(title, department, location, type, description, requirements, is_active)
WHERE NOT EXISTS (SELECT 1 FROM job_listings LIMIT 1);
