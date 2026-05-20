INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'cv-uploads',
  'cv-uploads',
  true,
  5242880,
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Public upload cv-uploads" ON storage.objects;
CREATE POLICY "Public upload cv-uploads"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'cv-uploads');

DROP POLICY IF EXISTS "Public read cv-uploads" ON storage.objects;
CREATE POLICY "Public read cv-uploads"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'cv-uploads');
