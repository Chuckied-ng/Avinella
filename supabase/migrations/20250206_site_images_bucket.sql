-- Create site-images bucket for CMS image uploads
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'site-images',
  'site-images',
  true,
  10485760,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Public upload site-images" ON storage.objects;
CREATE POLICY "Public upload site-images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'site-images');

DROP POLICY IF EXISTS "Public read site-images" ON storage.objects;
CREATE POLICY "Public read site-images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'site-images');

DROP POLICY IF EXISTS "Public update site-images" ON storage.objects;
CREATE POLICY "Public update site-images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'site-images');

DROP POLICY IF EXISTS "Public delete site-images" ON storage.objects;
CREATE POLICY "Public delete site-images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'site-images');
