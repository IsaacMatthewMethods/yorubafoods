import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for the browser
const createBrowserClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Create a single supabase client for server components
const createServerClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL as string
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string
  return createClient(supabaseUrl, supabaseServiceKey)
}

// Client-side singleton
let browserClient: ReturnType<typeof createBrowserClient> | null = null

// Get the browser client (singleton pattern)
export function getSupabaseBrowserClient() {
  if (!browserClient) {
    browserClient = createBrowserClient()
  }
  return browserClient
}

// Get the server client (created fresh each time)
export function getSupabaseServerClient() {
  return createServerClient()
}

// Types for our database
export type Category = {
  id: string
  name: string
  description: string | null
  image_url: string | null
  slug: string
  created_at: string
  updated_at: string
}

export type Food = {
  id: string
  name: string
  description: string | null
  long_description: string | null
  image_url: string | null
  video_id: string | null
  category_id: string
  ingredients: string[]
  instructions: string[]
  nutritional_info: {
    calories: string
    protein: string
    carbs: string
    fat: string
    fiber: string
  }
  cultural_significance: string | null
  slug: string
  featured: boolean
  created_at: string
  updated_at: string
}

export type Profile = {
  id: string
  full_name: string | null
  avatar_url: string | null
  is_admin: boolean
  created_at: string
  updated_at: string
}
