import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quick Commerce Enablement — Blinkit, Zepto, Instamart, BigBasket",
  description:
    "Dark-store operations, PO fulfillment, visibility bidding and regional hub strategy for brands scaling on 10-minute delivery apps.",
};

const pillars = [
  {
    title: "Dark store operations",
    detail: "Mapping SKU availability across dark stores by pin code, and coordinating restocks before they turn into lost visibility.",
  },
  {
    title: "PO fulfillment",
    detail: "Managing purchase order cycles with platform teams so fill rates stay high and penalties stay low.",
  },
  {
    title: "Visibility bidding",
    detail: "Running paid placements — search and category — to win the first screen on each app.",
  },
  {
    title: "Regional hub strategy",
    detail: "Sequencing city and hub rollouts so ad spend and inventory follow actual demand, not guesswork.",
  },
];

export default function QuickCommercePage() {
  return (
    <>
      <section className="border-b border-border bg-ice py-16">
        <div className="container-px mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-extrabold text-slate-950">Quick commerce enablement</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            10-minute delivery has changed how Indian consumers shop for
            everyday categories. We help brands get shelf-visible and
            in-stock across Blinkit, Zepto, Instamart and BigBasket.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto max-w-4xl">
          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-slate-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-ice p-6 text-sm text-slate-600">
            Quick commerce is a newer part of our practice than Amazon — we
            bring the same operational discipline, and we&apos;re upfront
            with every brand about what stage of proof we&apos;re at on this
            channel before we start.
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 text-center">
        <div className="container-px mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Considering quick commerce for your brand?</h2>
          <p className="mt-2 text-slate-600">Let&apos;s map out whether it&apos;s the right next channel for you.</p>
          <Link href="/contact" className="mt-6 inline-block rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-amber-dark hover:text-white">
            Book Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
