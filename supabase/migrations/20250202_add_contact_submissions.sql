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

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public insert contact_submissions" ON contact_submissions;
CREATE POLICY "Public insert contact_submissions"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Anon all contact_submissions" ON contact_submissions;
CREATE POLICY "Anon all contact_submissions"
  ON contact_submissions FOR ALL
  USING (true)
  WITH CHECK (true);
