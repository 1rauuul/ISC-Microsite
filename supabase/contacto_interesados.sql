-- =====================================================================
-- Tabla: contacto_interesados
-- Propósito: almacenar registros del formulario "Datos de contacto"
--            del micrositio de ISC.
-- Ejecutar este script en el SQL Editor de Supabase.
-- =====================================================================

create extension if not exists "pgcrypto";

create table if not exists public.contacto_interesados (
  id uuid primary key default gen_random_uuid(),
  nombres text not null,
  apellidos text not null,
  email text not null,
  telefono text not null,
  escuela_procedencia text,
  ciudad_estado text,
  como_se_entero text not null,
  intereses text,
  graduado boolean not null default false,
  acepta_aviso_privacidad boolean not null,
  created_at timestamptz not null default now(),

  constraint contacto_interesados_telefono_formato
    check (telefono ~ '^[0-9]{10}$'),
  constraint contacto_interesados_email_formato
    check (email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$'),
  constraint contacto_interesados_como_se_entero_valido
    check (como_se_entero in (
      'Redes sociales',
      'Recomendación de alguien',
      'Medios de comunicación',
      'El Tec fue a mi escuela',
      'Expo de universidades'
    )),
  constraint contacto_interesados_acepta_aviso
    check (acepta_aviso_privacidad = true)
);

-- Migración segura: si la tabla ya existía sin la columna `graduado`.
alter table public.contacto_interesados
  add column if not exists graduado boolean not null default false;

create index if not exists contacto_interesados_created_at_idx
  on public.contacto_interesados (created_at desc);

create index if not exists contacto_interesados_email_idx
  on public.contacto_interesados (email);

-- =====================================================================
-- Row Level Security
-- =====================================================================

alter table public.contacto_interesados enable row level security;

-- Limpia políticas previas para permitir ejecutar este script varias veces.
drop policy if exists "Permitir INSERT anónimo" on public.contacto_interesados;
drop policy if exists "Permitir INSERT autenticado" on public.contacto_interesados;

-- Permite que cualquier visitante (rol `anon`) envíe el formulario.
create policy "Permitir INSERT anónimo"
  on public.contacto_interesados
  for insert
  to anon
  with check (true);

-- Permite que usuarios autenticados también puedan enviar el formulario.
create policy "Permitir INSERT autenticado"
  on public.contacto_interesados
  for insert
  to authenticated
  with check (true);

-- IMPORTANTE: No se crean políticas de SELECT/UPDATE/DELETE para `anon`
-- ni `authenticated`, por lo que esos roles NO podrán leer, modificar ni
-- borrar registros. Solo los roles con bypass de RLS (como `service_role`
-- usado desde el dashboard o el servidor) podrán acceder.
