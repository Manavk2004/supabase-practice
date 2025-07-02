import OpenAI from "openai"
import { createClient } from "@supabase/supabase-js"

export const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
})


const url = "https://mwjmrfeotpjtldcbhpud.supabase.co"
const api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13am1yZmVvdHBqdGxkY2JocHVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzODU1MzcsImV4cCI6MjA2Njk2MTUzN30.Wy2QRLcIBAa5OSo-m_KPF-WtLTl8N3i697KUIQxry9k"

export const supabase = createClient(url, api)