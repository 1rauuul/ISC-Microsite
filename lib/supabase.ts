import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Acepta el nuevo naming `PUBLISHABLE_KEY` (sb_publishable_...) y mantiene
// compatibilidad con el legacy `ANON_KEY`.
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error(
      "Supabase no está configurado. Define NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY en tu archivo .env.local."
    );
  }

  if (!client) {
    client = createClient(supabaseUrl, supabasePublishableKey, {
      auth: { persistSession: false },
    });
  }

  return client;
}

export type ContactoInteresadoInsert = {
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
  escuela_procedencia: string | null;
  ciudad_estado: string | null;
  como_se_entero: string;
  intereses: string | null;
  graduado: boolean;
  acepta_aviso_privacidad: boolean;
};
