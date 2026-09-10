import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, whatsapp, brandUrl, revenueBand, channels } = body ?? {};

  if (!name || !whatsapp || !revenueBand) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
// this is just a new line
  // If Supabase env vars aren't configured yet, don't fail the form —
  // log it so it's still visible during setup/local dev.
  // this is secondd another line
  if (!supabase) {
    console.warn("[lead] Supabase not configured. Lead payload:", body);
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("leads").insert({
    name,
    whatsapp,
    brand_url: brandUrl ?? null,
    revenue_band: revenueBand,
    channels: channels ?? [],
    source: "website_audit_form",
  });

  if (error) {
    console.error("[lead] Supabase insert failed:", error.message);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
