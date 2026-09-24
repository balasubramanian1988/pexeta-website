import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing & Engagement Models",
  description:
    "Fixed retainership or revenue performance share — the right engagement model for Pexeta's e-commerce growth partnership depends on your brand's scope and maturity.",
};

const models = [
  {
    name: "Fixed Retainership",
    tagline: "For brands building their foundation",
    description:
      "A flat monthly engagement covering end-to-end account management, campaign setup and optimization, and ongoing reporting — well suited to brands still establishing themselves on marketplaces.",
  },
  {
    name: "Revenue Performance Share",
    tagline: "For established, scaling brands",
    description:
      "Our fee is tied directly to your revenue growth, keeping incentives aligned with your GMV — well suited to brands with an established base looking to scale further.",
  },
];

const faqs = [
  {
    q: "Which model is right for my brand?",
    a: "It depends on your brand's current scope, catalog size, and growth stage. Brands still establishing themselves on marketplaces usually do better on a fixed retainer for predictable costs; established brands looking to scale often prefer revenue share so our incentives move with their growth. We'll recommend a fit after understanding your business.",
  },
  {
    q: "Is ad spend included in the fee?",
    a: "No — our fee covers account management and strategy. Ad spend is paid directly to the marketplace (Amazon, Flipkart, etc.) by you, so you retain full visibility and control over that budget.",
  },
  {
    q: "What's the minimum commitment?",
    a: "We work on a month-to-month basis after an initial 3-month ramp-up period, which is roughly how long it takes to see the first meaningful results from listing and campaign changes.",
  },
  {
    q: "Can I switch models later?",
    a: "Yes. Many brands start on the fixed retainer and move to revenue share once their business reaches a stage where that makes more sense for both sides.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-extrabold text-slate-950">Engagement models</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            We work with brands on both a fixed retainership and a revenue performance share — the right structure
            depends on your brand's scope and maturity, not a one-size-fits-all plan.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {models.map((m) => (
            <div key={m.name} className="rounded-xl border border-border bg-white p-7">
              <div className="text-xs font-medium text-slate-600">{m.tagline}</div>
              <h2 className="mt-2 font-heading text-lg font-bold text-slate-950">{m.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{m.description}</p>
            </div>
          ))}
        </div>
        <div className="container-px mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm text-slate-600">
            Not sure which fits? We'll recommend one after a quick look at your brand.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-md bg-amber px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-dark hover:text-white"
          >
            Get started
          </Link>
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
