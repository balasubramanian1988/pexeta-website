import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Pexeta for a free account audit and growth roadmap for your brand.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container-px mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <div>
          <h1 className="font-heading text-4xl font-extrabold text-slate-950">Get in touch</h1>
          <p className="mt-4 text-slate-600">
            Tell us about your brand and current channels — we&apos;ll get back
            to you on WhatsApp within one business day.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3 text-slate-700">
              <Phone size={18} className="text-slate-400" />
              <span>+91 87545 79898</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Mail size={18} className="text-slate-400" />
              <span>support@pexeta.in</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <MapPin size={18} className="text-slate-400" />
              <span>No. 1, Kaspapuram Main Road, Kaspapuram, Chennai 600126</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border p-7">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
