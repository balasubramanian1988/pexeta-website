-- Run this in the Supabase SQL editor for your project.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  whatsapp text not null,
  brand_url text,
  revenue_band text not null,
  channels text[] default '{}',
  source text default 'website_audit_form'
);

-- Row Level Security: block all client-side access.
-- Only the server (using the service role key in /api/lead) can write.
alter table public.leads enable row level security;
