import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hqajgjlrffrmngkkehye.supabase.co'

// Используйте import.meta.env для Vite вместо process.env
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || ''

if (!supabaseKey) {
  console.warn('SUPABASE_KEY is not set in environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)