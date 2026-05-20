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

ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anon all site_content" ON site_content;
CREATE POLICY "Anon all site_content" ON site_content FOR ALL USING (true) WITH CHECK (true);

ALTER PUBLICATION supabase_realtime ADD TABLE site_content;

INSERT INTO site_content (page, section, key, value, label, content_type, sort_order) VALUES
  -- Home page
  ('home', 'hero', 'headline', 'Offshore Excellence, Delivered Worldwide', 'Hero Headline', 'text', 1),
  ('home', 'hero', 'subheadline', 'Avinella Global Resources LTD provides world-class offshore support, marine logistics, and procurement solutions across West Africa and beyond.', 'Hero Subheadline', 'textarea', 2),
  ('home', 'hero', 'cta_primary', 'Explore Our Services', 'Primary CTA Button', 'text', 3),
  ('home', 'hero', 'cta_secondary', 'Get In Touch', 'Secondary CTA Button', 'text', 4),
  ('home', 'about', 'title', 'Who We Are', 'Section Title', 'text', 1),
  ('home', 'about', 'description', 'Avinella Global Resources LTD is a Nigerian-registered offshore support company delivering integrated marine, logistics, and procurement solutions to the oil & gas industry since 2018.', 'Section Description', 'textarea', 2),
  ('home', 'stats', 'projects', '10+', 'Projects Delivered Value', 'text', 1),
  ('home', 'stats', 'delivery_rate', '98%', 'On-Time Delivery Rate Value', 'text', 2),
  ('home', 'stats', 'retention_rate', '85%', 'Client Retention Rate Value', 'text', 3),

  -- About page
  ('about', 'hero', 'headline', 'About Avinella Global Resources', 'Hero Headline', 'text', 1),
  ('about', 'hero', 'subheadline', 'A trusted partner in offshore support, marine services, and integrated logistics solutions.', 'Hero Subheadline', 'textarea', 2),
  ('about', 'overview', 'title', 'Company Overview', 'Section Title', 'text', 1),
  ('about', 'overview', 'description', 'Avinella Global Resources LTD was incorporated in Nigeria with a focus on providing top-tier offshore support services to the oil and gas sector. Since our founding in 2018, we have grown into a reliable partner for major operators across West Africa.', 'Section Description', 'textarea', 2),
  ('about', 'mission', 'mission', 'To deliver innovative, safe, and efficient offshore support solutions that empower our clients to achieve operational excellence.', 'Mission Statement', 'textarea', 1),
  ('about', 'mission', 'vision', 'To be the foremost offshore support and marine services company in West Africa, recognized globally for operational excellence.', 'Vision Statement', 'textarea', 2),
  ('about', 'mission', 'values', 'Safety, Integrity, Excellence, Innovation, Sustainability', 'Core Values', 'text', 3),

  -- HSE page
  ('hse', 'hero', 'headline', 'Health, Safety & Environment', 'Hero Headline', 'text', 1),
  ('hse', 'hero', 'subheadline', 'Our commitment to HSE is unwavering. We operate with zero-compromise on safety across all our operations.', 'Hero Subheadline', 'textarea', 2),
  ('hse', 'commitment', 'title', 'Our Safety Commitment', 'Section Title', 'text', 1),
  ('hse', 'commitment', 'description', 'At Avinella, safety is not just a policy — it is our culture. Every team member is empowered to stop work if they identify an unsafe condition.', 'Section Description', 'textarea', 2),
  ('hse', 'environment', 'title', 'Environmental Protection', 'Section Title', 'text', 1),
  ('hse', 'environment', 'description', 'We are committed to minimizing our environmental footprint through responsible operational practices, waste management, and continuous improvement.', 'Section Description', 'textarea', 2),

  -- Training page
  ('training', 'hero', 'headline', 'Training & Competence', 'Hero Headline', 'text', 1),
  ('training', 'hero', 'subheadline', 'Building the next generation of offshore professionals through world-class training and certification programs.', 'Hero Subheadline', 'textarea', 2),
  ('training', 'overview', 'title', 'Our Training Programs', 'Section Title', 'text', 1),
  ('training', 'overview', 'description', 'We offer a comprehensive range of OPITO-approved and industry-recognized training courses designed for offshore and marine professionals.', 'Section Description', 'textarea', 2),
  ('training', 'cta', 'text', 'Register for a Course', 'CTA Button Text', 'text', 1),

  -- Careers page
  ('careers', 'hero', 'headline', 'Build Your Career With Us', 'Hero Headline', 'text', 1),
  ('careers', 'hero', 'subheadline', 'Join a team of offshore professionals dedicated to excellence, safety, and innovation in West Africa and beyond.', 'Hero Subheadline', 'textarea', 2),
  ('careers', 'why', 'title', 'Why Work at Avinella?', 'Section Title', 'text', 1),
  ('careers', 'why', 'description', 'We offer competitive compensation, career development opportunities, and the chance to work on exciting offshore projects across the region.', 'Section Description', 'textarea', 2),
  ('careers', 'internship', 'title', 'Internship Programme', 'Section Title', 'text', 1),
  ('careers', 'internship', 'description', 'Our internship programme offers recent graduates the opportunity to gain hands-on experience in offshore operations, logistics, and technical roles.', 'Section Description', 'textarea', 2),

  -- Contact page
  ('contact', 'hero', 'headline', 'Get In Touch', 'Hero Headline', 'text', 1),
  ('contact', 'hero', 'subheadline', 'Have a question or want to work with us? We would love to hear from you.', 'Hero Subheadline', 'textarea', 2),
  ('contact', 'info', 'address', '14 Adeola Odeku Street, Victoria Island, Lagos, Nigeria', 'Office Address', 'textarea', 1),
  ('contact', 'info', 'phone', '+234 (0) 803 000 0000', 'Phone Number', 'text', 2),
  ('contact', 'info', 'email', 'info@avinellaglobal.com', 'Email Address', 'text', 3)
ON CONFLICT (page, section, key) DO NOTHING;
