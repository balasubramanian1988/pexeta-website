import Link from "next/link";
import { ArrowUpRight, Boxes, LineChart, ShoppingBag, Zap, Monitor, ListChecks, CreditCard, Camera, Megaphone, Target, ClipboardCheck } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const stats = [
  { value: "₹1.5 Cr+", label: "Monthly revenue managed" },
  { value: "₹8–10 L", label: "Monthly ad capital deployed" },
  { value: "14+", label: "Active retained brands" },
  { value: "3.8x", label: "Average ROAS / TACoS gain" },
];

const servicesHandled = [
  { icon: Monitor, label: "Account Management" },
  { icon: ListChecks, label: "Product Cataloguing" },
  { icon: CreditCard, label: "Payment Management" },
  { icon: ClipboardCheck, label: "Order Management" },
  { icon: Camera, label: "Product Photography" },
  { icon: Megaphone, label: "Product Marketing & Promotion" },
  { icon: Target, label: "Pricing Strategies & Execution" },
];

const channelLogos = [
  "Amazon", "Flipkart", "Myntra", "FirstCry", "Blinkit", "Instamart", "Zepto", "BigBasket",
];

const caseStudies = [
  {
    category: "Beauty & Personal Care",
    result: "₹3L → ₹22L / mo on Amazon in 120 days",
    metric: "4.2x ROAS",
  },
  {
    category: "Home & Kitchen",
    result: "TACoS cut from 28% to 14% while revenue doubled to ₹35L/mo",
    metric: "14% TACoS",
  },
  {
    category: "Apparel — Myntra & Amazon",
    result: "Omnichannel rollout driving ₹40L+ combined GMV",
    metric: "₹40L+ GMV",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-white">
        <div className="container-px mx-auto grid max-w-6xl items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-[fadeUp_0.6s_ease-out]">
            <h1 className="font-heading text-4xl font-extrabold leading-[1.08] text-slate-950 md:text-5xl">
              Scaling D2C brands to 8-figure monthly revenues across Amazon and omnichannel ecosystems.
            </h1>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-slate-600">
              We combine high-yield Amazon advertising and listing mastery with
              fast-track growth on quick commerce — Blinkit, Zepto, Instamart —
              and India&apos;s top marketplaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-amber-dark hover:text-white"
              >
                Book Free Strategy Call
              </Link>
              <Link
                href="/case-studies"
                className="rounded-md border border-slate-950 px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-ice"
              >
                Explore Amazon Case Studies
              </Link>
            </div>
          </div>

          <div className="relative rounded-xl border border-border bg-slate-950 p-6 shadow-xl shadow-slate-950/10">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Managed Revenue Trajectory</span>
              <span className="text-emerald">+412% YoY</span>
            </div>
            <svg viewBox="0 0 340 140" className="mt-4 w-full">
              <polyline
                fill="none"
                stroke="#f2871e"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="0,120 60,110 100,95 140,88 180,60 220,45 260,30 300,15 340,6"
              />
              <polyline
                fill="#f2871e"
                fillOpacity="0.08"
                stroke="none"
                points="0,120 60,110 100,95 140,88 180,60 220,45 260,30 300,15 340,6 340,140 0,140"
              />
            </svg>
            <div className="mt-3 flex justify-between text-[11px] text-slate-400">
              <span>₹0</span>
              <span>₹1.5 Cr / mo</span>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {["AMZ", "FLK", "BLK", "ZPT"].map((c) => (
                <div key={c} className="rounded-md bg-slate-900 py-2 text-center text-[11px] font-medium text-slate-400">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-border bg-white">
        <div className="container-px mx-auto grid max-w-6xl grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="border-l border-border pl-5">
              <div className={`font-heading text-2xl font-bold md:text-3xl ${i % 2 === 0 ? "text-blue" : "text-amber-dark"}`}>{s.value}</div>
              <div className="mt-1 text-xs text-slate-600 md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="border-b border-border bg-white py-20">
        <div className="container-px mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-bold text-slate-950">The omnichannel growth matrix</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            One growth partner across every channel your customers already buy on —
            anchored by the marketplace where we have the deepest track record.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/services/marketplaces"
              className="group relative rounded-xl border-2 border-blue bg-ice p-6"
            >
              <ShoppingBag className="text-amber-dark" size={24} />
              <h3 className="mt-3 font-heading text-base font-bold text-slate-950">Amazon Scaling Engine</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Deep listing optimization, A+ Content, Brand Registry, PPC &amp; DSP
                strategy, and disciplined TACoS control.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-950">
                See how it works <ArrowUpRight size={15} />
              </span>
            </Link>

            <Link href="/services/quick-commerce" className="rounded-xl border border-border p-6 hover:border-slate-400">
              <Zap className="text-emerald" size={24} />
              <h3 className="mt-3 font-heading text-base font-bold text-slate-950">Quick-Commerce Acceleration</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Dark-store inventory planning, PO management, top-of-search
                placement on Blinkit, Zepto, Instamart &amp; BigBasket.
              </p>
            </Link>

            <Link href="/services/marketplaces" className="rounded-xl border border-border p-6 hover:border-slate-400">
              <Boxes className="text-blue" size={24} />
              <h3 className="mt-3 font-heading text-base font-bold text-slate-950">Multi-Marketplace Expansion</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Cataloging and promotional management across Flipkart, Myntra
                and FirstCry.
              </p>
            </Link>

            <Link href="/services/marketplaces" className="rounded-xl border border-border p-6 hover:border-slate-400">
              <LineChart className="text-slate-950" size={24} />
              <h3 className="mt-3 font-heading text-base font-bold text-slate-950">Revenue &amp; Inventory Analytics</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Stockout prevention, restocking alerts, and profit margin
                protection built into weekly reporting.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE HANDLE FOR YOU */}
      <section className="border-b border-border bg-ice py-20">
        <div className="container-px mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-bold text-slate-950">Everything we handle for you</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            End-to-end account operations, so you can focus on the product while we run the storefront.
          </p>
          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {servicesHandled.map((s) => (
              <div key={s.label} className="flex items-start gap-3">
                <s.icon className="mt-0.5 shrink-0 text-blue" size={22} />
                <span className="text-sm font-semibold text-slate-950">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES SPOTLIGHT */}
      <section className="bg-ice py-20">
        <div className="container-px mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl font-bold text-slate-950">Our core track record</h2>
              <p className="mt-2 max-w-xl text-slate-600">Amazon growth proof points from active client accounts.</p>
            </div>
            <Link href="/case-studies" className="text-sm font-semibold text-slate-950 underline underline-offset-4">
              View all case studies
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {caseStudies.map((c) => (
              <div key={c.category} className="rounded-xl border border-border bg-white p-6">
                <div className="text-xs font-medium text-slate-600">{c.category}</div>
                <div className="mt-3 font-heading text-lg font-bold leading-snug text-slate-950">{c.result}</div>
                <div className="mt-4 inline-block rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold text-amber">
                  {c.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHANNEL BADGES */}
      <section className="border-b border-border bg-white py-16">
        <div className="container-px mx-auto max-w-6xl">
          <p className="text-center text-sm font-medium text-slate-600">Channels we grow brands on</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {channelLogos.map((c) => (
              <span key={c} className={`font-heading text-lg font-bold ${c === "Amazon" ? "text-amber-dark" : "text-slate-400"}`}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="border-y border-border bg-ice py-20">
        <div className="container-px mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-950">Transparent engagement models</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            A fixed retainer for emerging brands, or a revenue share for
            established ones scaling GMV with us.
          </p>
          <Link
            href="/pricing"
            className="mt-8 inline-block rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-amber-dark hover:text-white"
          >
            See pricing details
          </Link>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section id="audit" className="bg-white py-20">
        <div className="container-px mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-950">Claim your free account audit</h2>
            <p className="mt-3 text-slate-600">
              Tell us where your brand stands today. We&apos;ll review your
              current channels and send back a growth roadmap — no obligation.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
