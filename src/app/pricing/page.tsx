import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Engagement Models",
  description:
    "Fixed retainership, revenue performance share, or a hybrid enterprise model — transparent pricing for Pexeta's e-commerce growth partnership.",
};

const models = [
  {
    name: "Fixed Retainership",
    price: "₹25,000",
    unit: "+ GST / month",
    tagline: "For emerging brands",
    features: [
      "End-to-end account management",
      "PPC campaign setup & optimization",
      "Catalog health monitoring",
      "Weekly performance reporting",
    ],
  },
  {
    name: "Revenue Performance Share",
    price: "3%",
    unit: "of overall revenue",
    tagline: "For established brands",
    highlighted: true,
    features: [
      "Everything in Fixed Retainership",
      "Growth incentives aligned to GMV",
      "Priority strategy reviews",
      "Cross-channel expansion planning",
    ],
  },
  {
    name: "Hybrid Enterprise",
    price: "Custom",
    unit: "base + tiered rev share",
    tagline: "For >₹25L/mo GMV accounts",
    features: [
      "Dedicated account pod",
      "Custom reporting & dashboards",
      "Multi-brand / multi-channel scale",
      "Quarterly business reviews",
    ],
  },
];

const faqs = [
  {
    q: "Which model is right for my brand?",
    a: "If you're under roughly ₹10L/month in marketplace revenue, the fixed retainer usually works out cheaper and gives you predictable costs. Above that, the revenue share aligns our incentives directly with your growth.",
  },
  {
    q: "Is ad spend included in the retainer?",
    a: "No — the retainer or revenue share covers our management fee. Ad spend is paid directly to the marketplace (Amazon, Flipkart, etc.) by you, so you retain full visibility and control over that budget.",
  },
  {
    q: "What's the minimum commitment?",
    a: "We work on a month-to-month basis after an initial 3-month ramp-up period, which is roughly how long it takes to see the first meaningful results from listing and campaign changes.",
  },
  {
    q: "Can I switch models later?",
    a: "Yes. Many brands start on the fixed retainer and move to revenue share once their monthly GMV crosses a level where that makes more sense for both sides.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-extrabold text-slate-950">Engagement models</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Transparent pricing — no hidden setup fees, no lock-in beyond the initial ramp-up period.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {models.map((m) => (
            <div
              key={m.name}
              className={`rounded-xl border p-7 ${
                m.highlighted ? "border-2 border-slate-950 bg-white shadow-lg shadow-slate-950/5" : "border-border bg-white"
              }`}
            >
              <div className="text-xs font-medium text-slate-600">{m.tagline}</div>
              <h2 className="mt-2 font-heading text-lg font-bold text-slate-950">{m.name}</h2>
              <div className="mt-4">
                <span className="font-heading text-3xl font-extrabold text-slate-950">{m.price}</span>
                <span className="ml-1 text-sm text-slate-600">{m.unit}</span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {m.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check size={16} className="mt-0.5 shrink-0 text-emerald" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-7 block rounded-md px-5 py-3 text-center text-sm font-semibold ${
                  m.highlighted
                    ? "bg-amber text-slate-950 hover:bg-amber-dark hover:text-white"
                    : "border border-slate-950 text-slate-950 hover:bg-ice"
                }`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-border rounded-xl border border-border bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="cursor-pointer list-none font-medium text-slate-950">
                  {f.q}
                </summary>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
