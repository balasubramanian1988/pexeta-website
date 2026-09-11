import type { Metadata } from "next";
import { Rocket, Users, TrendingUp, Handshake, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Pexeta's team and help scale D2C and retail brands across Amazon, marketplaces, and quick commerce.",
};

const whyJoin = [
  {
    icon: Rocket,
    title: "Real brands, real impact",
    body: "You're not managing dummy accounts — every listing, campaign, and report you touch moves an actual client's revenue.",
  },
  {
    icon: TrendingUp,
    title: "Fast learning curve",
    body: "Exposure across Amazon, Flipkart, Myntra, FirstCry, and quick commerce means you build a genuinely broad e-commerce skill set, fast.",
  },
  {
    icon: Users,
    title: "Small team, real ownership",
    body: "We're a growth-stage agency, not a large corporate — your work is visible, and so is your impact.",
  },
  {
    icon: Handshake,
    title: "Direct, no-fluff culture",
    body: "We report honestly to clients and to each other. If something isn't working, we say so and fix it.",
  },
];

const hiringAreas = [
  "Account Management",
  "Advertising & PPC",
  "Client Servicing",
  "Operations & Catalog Management",
];

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-extrabold text-slate-950">Careers at Pexeta</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            We&apos;re a growing omnichannel e-commerce team based in Chennai,
            managing ₹1.5 Cr+ in monthly revenue for 14+ brands. If you want
            to work close to real client outcomes, we&apos;d like to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Why work here</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {whyJoin.map((w) => (
              <div key={w.title} className="rounded-xl border border-border p-6">
                <w.icon className="text-blue" size={24} />
                <h3 className="mt-3 font-heading text-base font-bold text-slate-950">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Where you could fit in</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            We don&apos;t always have every role open, but we&apos;re
            consistently growing across these areas:
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {hiringAreas.map((a) => (
              <span key={a} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-slate-800">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container-px mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Interested in joining?</h2>
          <p className="mt-3 text-slate-600">
            Send your resume, the role you&apos;re interested in, and a bit
            about yourself to our team. We personally read every application.
          </p>
          <a
            href="mailto:hr@pexeta.in?subject=Application%20-%20Pexeta%20Careers"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-amber-dark hover:text-white"
          >
            <Mail size={18} />
            Email hr@pexeta.in
          </a>
        </div>
      </section>
    </>
  );
}
