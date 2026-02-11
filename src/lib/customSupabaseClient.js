import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ymbfvvbymmfdhmvafgsp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltYmZ2dmJ5bW1mZGhtdmFmZ3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3ODIyMDUsImV4cCI6MjA4NjM1ODIwNX0.zQET1mzU_74k_AP0fw3Pzbo5-T98gGT7-nTu0qc3qCc';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
