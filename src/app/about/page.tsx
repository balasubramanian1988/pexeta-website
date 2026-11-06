import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Pexeta is a Chennai-based e-commerce growth agency, founded in December 2012. We manage 40+ brands across Amazon, Flipkart, Myntra, FirstCry and quick-commerce apps.",
  alternates: { canonical: "https://www.pexeta.in/about" },
};

const milestones = [
  { label: "Brands retained", value: "40+" },
  { label: "Revenue managed / month", value: "₹5 Cr+" },
  { label: "Ad spend deployed / month", value: "₹1.1 Cr+" },
];

const FACTS: [string, string][] = [
  ["Founded", "December 2012"],
  ["Based in", "Chennai, Tamil Nadu"],
  ["What we do", "E-commerce growth: marketplace and quick-commerce account management and advertising"],
  ["Marketplaces", "Amazon, Flipkart, Myntra, FirstCry"],
  ["Quick commerce", "Blinkit, Swiggy Instamart, Zepto, BigBasket"],
  ["Founder", "Balasubramanian VA (MBA, IIT Madras)"],
  ["Google rating", "5.0 from 16 reviews (November 2026)"],
];

const SERVICES = [
  "Marketplace account management and advertising",
  "Account health checks and reinstatement",
  "FBA reimbursement audits",
  "RTO audits",
  "Monthly GST packs for your auditors",
  "Quick commerce purchase order and operations management",
  "Quick commerce ads audits",
];

const FAQS = [
  { q: "What does Pexeta do?", a: "Pexeta is an e-commerce growth agency. We manage brands' accounts and advertising on Amazon, Flipkart, Myntra, FirstCry and quick-commerce apps such as Blinkit, Swiggy Instamart, Zepto and BigBasket." },
  { q: "Where is Pexeta based?", a: "Our office is at No. 1, Kaspapuram Main Road, Kaspapuram, Chennai 600126. We work with brands across India." },
  { q: "When was Pexeta founded?", a: "Pexeta was founded in December 2012 by Balasubramanian VA." },
  { q: "How many brands does Pexeta manage?", a: "We retain 40+ brands, with more than ₹5 crore of monthly revenue and more than ₹1.1 crore of monthly ad spend under management." },
  { q: "How do I contact Pexeta?", a: "Call or WhatsApp +91 87545 79898, email support@pexeta.in, or use the form on our contact page." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.pexeta.in/#organization",
      name: "Pexeta",
      url: "https://www.pexeta.in",
      description: "E-commerce growth agency for brands on Amazon, Flipkart, Myntra, FirstCry and quick-commerce apps.",
      foundingDate: "2012-12",
      founder: { "@type": "Person", name: "Balasubramanian VA" },
      telephone: "+91-8754579898",
      email: "support@pexeta.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 1, Kaspapuram Main Road, Kaspapuram",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600126",
        addressCountry: "IN",
      },
      areaServed: { "@type": "Country", name: "India" },
      sameAs: ["https://share.google/ML8Yb1yEIC72M7NB6"],
    },
    {
      "@type": "AboutPage",
      url: "https://www.pexeta.in/about",
      name: "About Pexeta",
      mainEntity: { "@id": "https://www.pexeta.in/#organization" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="border-b border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-extrabold text-slate-950">About Pexeta</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            We started as an Amazon-focused consultancy in Chennai and grew
            into an omnichannel growth partner — because that&apos;s where
            our clients&apos; customers actually are.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
          {milestones.map((m) => (
            <div key={m.label} className="border-l-2 border-amber pl-5">
              <div className="font-heading text-3xl font-extrabold text-slate-950">{m.value}</div>
              <div className="mt-1 text-sm text-slate-600">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Pexeta at a glance</h2>
          <dl className="mt-6 divide-y divide-border border-y border-border">
            {FACTS.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-3 sm:grid-cols-3">
                <dt className="text-sm font-semibold text-slate-950">{k}</dt>
                <dd className="text-sm text-slate-600 sm:col-span-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Led by operators, not just marketers</h2>
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            Pexeta is led by Balasubramanian VA, an entrepreneur with 13+
            years of experience across e-commerce, retail distribution, and
            go-to-market strategy, and an MBA from IIT Madras. Long before
            marketplaces were central to how Indian brands grew, he was
            already building distribution — as Managing Director of Arivar
            Retail, he ran a ₹9 Cr+ annual business representing Usha
            International, Singer India, TTK Prestige, Butterfly
            Gandhimathi, and Jio Infocom across Tamil Nadu, with a
            consistent 20% year-on-year growth. That same operator&apos;s
            eye for distribution and sell-through now shapes how Pexeta runs
            marketplace accounts, from go-to-market planning and listing
            strategy to performance marketing for D2C brands and SMEs.
          </p>
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            That founder-level operating experience is paired with over a
            decade of dedicated Amazon growth expertise on the team —
            hands-on account management for sellers across India, the UK,
            and the US — so every client account gets both strategic
            direction and platform-level execution depth.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">What we do</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <li key={s} className="flex gap-2 text-slate-600"><span className="text-amber">✓</span>{s}</li>
            ))}
          </ul>
          <p className="mt-6 text-slate-600">
            See <Link href="/services/marketplaces" className="font-semibold text-slate-950 underline">marketplace growth</Link> and{" "}
            <Link href="/services/quick-commerce" className="font-semibold text-slate-950 underline">quick commerce</Link> services.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">How we work</h2>
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            Every account starts with an Amazon-first audit, because that&apos;s
            where we can show you the clearest path to measurable growth
            fastest. From there, we build out the channels that make sense
            for your category — whether that&apos;s Flipkart, Myntra,
            FirstCry, or quick commerce. We report weekly, we&apos;re direct
            about what&apos;s working and what isn&apos;t, and we don&apos;t
            claim results on a channel until we&apos;ve actually delivered
            them for a client there.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {FAQS.map((f) => (
              <details key={f.q} className="py-4">
                <summary className="cursor-pointer font-semibold text-slate-950">{f.q}</summary>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 text-center">
        <div className="container-px mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Let&apos;s talk about your brand</h2>
          <Link href="/contact" className="mt-6 inline-block rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-amber-dark hover:text-white">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
