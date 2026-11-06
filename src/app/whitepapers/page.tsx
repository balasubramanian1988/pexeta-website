// app/whitepapers/page.tsx — white papers index.
import type { Metadata } from "next";
import Link from "next/link";
import { WHITEPAPERS } from "@/lib/whitepapers";

export const metadata: Metadata = {
  title: "White Papers: Research for Indian Marketplace Sellers",
  description:
    "In-depth, fully sourced Pexeta white papers on selling on Amazon, Flipkart and quick commerce in India: market changes, data and practical playbooks.",
  alternates: { canonical: "https://www.pexeta.in/whitepapers" },
  openGraph: {
    title: "Pexeta White Papers | Research for Indian Marketplace Sellers",
    description: "In-depth, fully sourced research on selling on Amazon, Flipkart and quick commerce in India.",
    url: "https://www.pexeta.in/whitepapers",
    type: "website",
  },
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function WhitePapersIndexPage() {
  return (
    <>
      <section className="border-b border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-6xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-dark">Pexeta research</div>
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-slate-950">White papers</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            In-depth research on how selling on Indian marketplaces is changing, with every figure linked to its source
            and a practical playbook for sellers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {WHITEPAPERS.map((w) => (
            <Link
              key={w.slug}
              href={`/whitepapers/${w.slug}`}
              className="flex flex-col rounded-xl border border-border border-t-4 border-t-amber bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-slate-950/5"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-blue">White paper</div>
              <h2 className="mt-3 font-heading text-xl font-bold leading-snug text-slate-950">{w.title}</h2>
              <div className="mt-1 text-sm font-medium text-slate-700">{w.subtitle}</div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{w.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                <span>{fmt(w.datePublished)} · {w.readMinutes} min read</span>
                <span className="font-semibold text-amber-dark">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
