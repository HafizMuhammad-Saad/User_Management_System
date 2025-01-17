const { createClient } = supabase;
const supabaseUrl = 'https://mmzcxvikiozggrqmrmqe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1temN4dmlraW96Z2dycW1ybXFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNTY1OTEsImV4cCI6MjA1MTczMjU5MX0.agJKMgLZPa44D52JApyMDyWpArdyiPQW4JIBLBU8jHQ'

const supabaseClient = createClient(supabaseUrl, supabaseKey);

window.supabase = supabaseClient;