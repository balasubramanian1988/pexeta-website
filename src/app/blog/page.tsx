// app/blog/page.tsx — blog index.
import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "E-commerce Growth Blog: Amazon, Flipkart and Quick Commerce",
  description:
    "Practical guides for Indian brands selling on Amazon, Flipkart, Blinkit, Zepto and Instamart: ads, account health, listings, profitability and growth strategy. By Pexeta.",
  alternates: { canonical: "https://pexeta.in/blog" },
  openGraph: {
    title: "Pexeta Blog | Amazon and Quick-Commerce Growth Guides",
    description: "Practical guides for Indian brands selling on Amazon, Flipkart and quick-commerce apps.",
    url: "https://pexeta.in/blog",
    type: "website",
  },
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function BlogIndexPage() {
  return (
    <>
      <section className="border-b border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-6xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-dark">Pexeta insights</div>
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-slate-950">The e-commerce growth blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Practical, India-specific guides on Amazon ads, account health, marketplace strategy and quick commerce,
            from the team that manages ₹5 Cr+ in monthly marketplace revenue.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="flex flex-col rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-slate-950/5"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-blue">{p.category}</div>
              <h2 className="mt-3 font-heading text-lg font-bold leading-snug text-slate-950">{p.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                <span>{fmt(p.datePublished)} · {p.readMinutes} min read</span>
                <span className="font-semibold text-amber-dark">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
