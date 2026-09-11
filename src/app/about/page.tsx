import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Pexeta is an e-commerce growth agency scaling D2C and retail brands across India's marketplaces and quick-commerce apps.",
};

const milestones = [
  { label: "Brands retained", value: "14+" },
  { label: "Revenue managed / month", value: "₹1.5 Cr+" },
  { label: "Ad spend deployed / month", value: "₹8–10 L" },
];

export default function AboutPage() {
  return (
    <>
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
            marketplace accounts — through Thrise.in, he has guided D2C
            brands and SMEs through go-to-market planning, listing strategy,
            and performance marketing across Amazon, Flipkart, Meesho, and
            brand-owned websites.
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

      <section className="py-16 text-center">
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
