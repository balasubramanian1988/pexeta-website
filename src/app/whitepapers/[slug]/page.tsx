// app/whitepapers/[slug]/page.tsx — single white paper (statically generated).
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WHITEPAPERS, WHITEPAPER_MAP } from "@/lib/whitepapers";
import RenderBlocks from "../../blog/renderBlocks";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return WHITEPAPERS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const w = WHITEPAPER_MAP[slug];
  if (!w) return {};
  return {
    title: { absolute: w.titleTag },
    description: w.metaDescription,
    keywords: w.keywords,
    alternates: { canonical: `https://pexeta.in/whitepapers/${w.slug}` },
    openGraph: {
      title: w.title,
      description: w.metaDescription,
      url: `https://pexeta.in/whitepapers/${w.slug}`,
      type: "article",
      publishedTime: w.datePublished,
      modifiedTime: w.dateModified,
    },
  };
}

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function WhitePaperPage({ params }: Params) {
  const { slug } = await params;
  const w = WHITEPAPER_MAP[slug];
  if (!w) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Report",
    headline: w.title,
    alternativeHeadline: w.subtitle,
    description: w.metaDescription,
    datePublished: w.datePublished,
    dateModified: w.dateModified,
    author: { "@type": "Organization", name: "Pexeta", url: "https://pexeta.in" },
    publisher: { "@type": "Organization", name: "Pexeta", logo: { "@type": "ImageObject", url: "https://pexeta.in/pexeta-logo.png" } },
    mainEntityOfPage: `https://pexeta.in/whitepapers/${w.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article>
        <header className="border-b border-border bg-ice py-14">
          <div className="container-px mx-auto max-w-3xl">
            <Link href="/whitepapers" className="text-sm font-medium text-blue hover:underline">← All white papers</Link>
            <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-amber-dark">Pexeta white paper</div>
            <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">{w.title}</h1>
            <p className="mt-3 text-lg font-medium text-slate-700">{w.subtitle}</p>
            <div className="mt-4 text-sm text-slate-600">
              {w.author} · {fmt(w.datePublished)} · {w.readMinutes} min read
            </div>
          </div>
        </header>

        <div className="container-px mx-auto max-w-3xl py-10 text-[17px]">
          <RenderBlocks blocks={w.body} />

          <div className="mt-14 rounded-xl bg-slate-950 p-8 text-white">
            <div className="text-xs font-semibold uppercase tracking-widest text-amber">Pexeta marketplace services</div>
            <div className="mt-2 font-heading text-xl font-bold">Start with a free audit of your top listings</div>
            <p className="mt-2 text-slate-400">
              We check attributes, questions, reviews and stock on your best-selling products across Amazon, Flipkart and quick commerce.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-block rounded-md bg-amber px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-dark hover:text-white">
                Get Free Audit
              </Link>
              <Link href="/services/marketplaces" className="inline-block rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                Marketplace services
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
