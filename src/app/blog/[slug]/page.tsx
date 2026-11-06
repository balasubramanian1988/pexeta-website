// app/blog/[slug]/page.tsx — single blog post (statically generated).
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, POST_MAP } from "@/lib/blog";
import RenderBlocks from "../renderBlocks";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = POST_MAP[slug];
  if (!p) return {};
  return {
    title: { absolute: p.titleTag },
    description: p.metaDescription,
    keywords: p.keywords,
    alternates: { canonical: `https://www.pexeta.in/blog/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.metaDescription,
      url: `https://www.pexeta.in/blog/${p.slug}`,
      type: "article",
      publishedTime: p.datePublished,
      modifiedTime: p.dateModified,
    },
  };
}

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const p = POST_MAP[slug];
  if (!p) notFound();

  const faq = p.body.find((b) => b.kind === "faq");
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: p.title,
      description: p.metaDescription,
      datePublished: p.datePublished,
      dateModified: p.dateModified,
      author: { "@type": "Organization", name: p.author, url: "https://www.pexeta.in" },
      publisher: { "@type": "Organization", name: "Pexeta", logo: { "@type": "ImageObject", url: "https://www.pexeta.in/pexeta-logo.png" } },
      mainEntityOfPage: `https://www.pexeta.in/blog/${p.slug}`,
    },
    ...(faq && faq.kind === "faq"
      ? [{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }]
      : []),
  ];
  const svc = p.category === "Quick Commerce"
    ? { eyebrow: "Pexeta quick commerce services", heading: "Selling on Blinkit, Zepto or Instamart?", text: "We manage purchase orders, dark-store operations and ads on quick-commerce apps for brands, so you grow without losing margin.", href: "/services/quick-commerce", linkLabel: "Quick commerce services" }
    : { eyebrow: "Pexeta marketplace services", heading: "Want us to look at your account?", text: "Get a free audit of your Amazon, Flipkart, Myntra or FirstCry account: ads, listings, account health and profitability.", href: "/services/marketplaces", linkLabel: "Marketplace services" };
  const related = POSTS.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 2);
  const more = related.length < 2 ? POSTS.filter((x) => x.slug !== p.slug && !related.includes(x)).slice(0, 2 - related.length) : [];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article>
        <header className="border-b border-border bg-ice py-14">
          <div className="container-px mx-auto max-w-3xl">
            <Link href="/blog" className="text-sm font-medium text-blue hover:underline">← All articles</Link>
            <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-amber-dark">{p.category}</div>
            <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">{p.title}</h1>
            <div className="mt-4 text-sm text-slate-600">
              {p.author} · {fmt(p.datePublished)} · {p.readMinutes} min read
            </div>
          </div>
        </header>

        <div className="container-px mx-auto max-w-3xl py-10 text-[17px]">
          <RenderBlocks blocks={p.body} />

          <div className="mt-14 rounded-xl bg-slate-950 p-8 text-white">
            <div className="text-xs font-semibold uppercase tracking-widest text-amber">{svc.eyebrow}</div>
            <div className="mt-2 font-heading text-xl font-bold">{svc.heading}</div>
            <p className="mt-2 text-slate-400">{svc.text}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-block rounded-md bg-amber px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-dark hover:text-white">
                Get Free Audit
              </Link>
              <Link href={svc.href} className="inline-block rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                {svc.linkLabel}
              </Link>
              <Link href="/case-studies" className="inline-block px-2 py-3 text-sm font-semibold text-slate-300 underline hover:text-white">
                See client results
              </Link>
            </div>
          </div>

          {[...related, ...more].length > 0 && (
            <div className="mt-14">
              <div className="font-heading text-lg font-bold text-slate-950">Keep reading</div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[...related, ...more].map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="rounded-lg border border-border p-5 hover:bg-ice">
                    <div className="text-xs font-semibold uppercase tracking-wider text-blue">{r.category}</div>
                    <div className="mt-2 font-semibold leading-snug text-slate-950">{r.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
