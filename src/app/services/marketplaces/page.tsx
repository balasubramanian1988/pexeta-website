import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketplace Growth — Amazon, Flipkart, Myntra, FirstCry",
  description:
    "Amazon PPC, SEO and content mastery, plus Flipkart, Myntra and FirstCry management — Pexeta's core marketplace growth engine.",
};

const process = [
  { step: "Audit", detail: "Full account health check — listings, PPC, catalog compliance, and TACoS baseline." },
  { step: "Strategy", detail: "Channel-by-channel growth plan with keyword, content and ad-spend targets." },
  { step: "Execution", detail: "Listing optimization, A+ Content, campaign builds, and daily bid management." },
  { step: "Reporting", detail: "Weekly performance reviews against revenue, ROAS and TACoS targets." },
  { step: "Scale", detail: "Budget reallocation into winning ASINs/SKUs and expansion into new categories." },
];

export default function MarketplacesPage() {
  return (
    <>
      <section className="border-b border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-extrabold text-slate-950">Marketplace growth</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Amazon is where our track record runs deepest — PPC, SEO and
            content are managed with the same rigor across Flipkart, Myntra
            and FirstCry.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto max-w-4xl">
          <div className="rounded-xl border-2 border-slate-950 bg-white p-8">
            <h2 className="font-heading text-2xl font-bold text-slate-950">Amazon growth engine</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Listing optimization & keyword indexing",
                "A+ Content & Brand Story build-out",
                "Brand Registry setup and protection",
                "Sponsored Products, Brands & Display",
                "Amazon DSP for retargeting & prospecting",
                "Weekly TACoS control and budget pacing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {["Flipkart", "Myntra", "FirstCry"].map((m) => (
              <div key={m} className="rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-slate-950">{m}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Catalog setup and health, promotional calendar planning,
                  and ad management tailored to {m}&apos;s seller ecosystem.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">How an engagement runs</h2>
          <ol className="mt-8 space-y-6">
            {process.map((p, i) => (
              <li key={p.step} className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <div className="font-semibold text-slate-950">{p.step}</div>
                  <div className="mt-0.5 text-sm text-slate-600">{p.detail}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container-px mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Not sure where your TACoS should sit?</h2>
          <p className="mt-2 text-slate-600">Talk to us and we&apos;ll benchmark it against your category.</p>
          <Link href="/contact" className="mt-6 inline-block rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-amber-dark hover:text-white">
            Book Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
