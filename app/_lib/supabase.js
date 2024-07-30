import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tlimnggpboefehkbqums.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsaW1uZ2dwYm9lZmVoa2JxdW1zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODQ4MzY0MCwiZXhwIjoyMDE0MDU5NjQwfQ._6pOLBnehZRN91oaVQ5rjBsZqQayrn5W-dhuXwKEyyY"
);
