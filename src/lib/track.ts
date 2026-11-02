// lib/track.ts: send lead events to GA4. These names are marked as key events in the Pexeta GA4 property.
type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

function send(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, { page_path: window.location.pathname, ...params });
}

export const trackLead = (params: Record<string, unknown> = {}) => send("generate_lead", params);
export const trackWhatsAppClick = (source: string) => send("whatsapp_click", { source });
export const trackPhoneClick = (source: string) => send("phone_click", { source });
