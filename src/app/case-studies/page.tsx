import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Amazon revenue jumps, ROAS improvements, and ad scaling — real results from Pexeta's retained brands.",
};

const studies = [
  {
    category: "Beauty & Personal Care",
    channel: "Amazon",
    headline: "₹3L to ₹22L monthly revenue in 120 days",
    metrics: [
      { label: "Revenue growth", value: "7.3x" },
      { label: "ROAS", value: "4.2x" },
      { label: "Timeline", value: "120 days" },
    ],
    summary:
      "A relaunch of core listings paired with a restructured PPC account — moving spend off broad match and into defensible exact-match and DSP retargeting — took this brand from an under-optimized catalog to a top performer in its subcategory.",
  },
  {
    category: "Home & Kitchen",
    channel: "Amazon",
    headline: "TACoS cut from 28% to 14% while revenue doubled",
    metrics: [
      { label: "Revenue", value: "₹35L/mo" },
      { label: "TACoS", value: "28% → 14%" },
      { label: "Result", value: "2x growth" },
    ],
    summary:
      "The account was spending efficiently on a narrow set of keywords but leaving organic rank on the table. A content and indexing overhaul, combined with tighter bid automation, let ad spend grow slower than revenue.",
  },
  {
    category: "Apparel",
    channel: "Myntra & Amazon",
    headline: "₹40L+ combined GMV from an omnichannel rollout",
    metrics: [
      { label: "Combined GMV", value: "₹40L+" },
      { label: "Channels", value: "2" },
      { label: "Approach", value: "Omnichannel" },
    ],
    summary:
      "Rather than treating Myntra as an afterthought to Amazon, we ran a coordinated catalog and promotional calendar across both — timing markdowns and ad pushes to each platform's own traffic cycles.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-extrabold text-slate-950">Case studies</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Our core track record sits on Amazon — where these results come
            from. As our quick-commerce and other marketplace work matures,
            we&apos;ll add proof points here rather than claim results we
            haven&apos;t earned yet.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto max-w-4xl space-y-6">
          {studies.map((s) => (
            <div key={s.headline} className="rounded-xl border border-border p-7">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
                <span className="rounded-full bg-ice-dim px-2.5 py-1">{s.category}</span>
                <span className="rounded-full bg-ice-dim px-2.5 py-1">{s.channel}</span>
              </div>
              <h2 className="mt-4 font-heading text-xl font-bold text-slate-950">{s.headline}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.summary}</p>
              <div className="mt-5 flex flex-wrap gap-6 border-t border-border pt-5">
                {s.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-heading text-lg font-bold text-slate-950">{m.value}</div>
                    <div className="text-xs text-slate-600">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-ice py-16 text-center">
        <div className="container-px mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Want results like this for your brand?</h2>
          <Link href="/contact" className="mt-6 inline-block rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-amber-dark hover:text-white">
            Book Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
