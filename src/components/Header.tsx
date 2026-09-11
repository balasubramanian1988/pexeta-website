"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const serviceLinks = [
  { href: "/services/marketplaces", label: "Marketplace Growth", sub: "Amazon, Flipkart, Myntra, FirstCry" },
  { href: "/services/quick-commerce", label: "Quick Commerce", sub: "Blinkit, Zepto, Instamart, BigBasket" },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur">
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/pexeta-logo.png" alt="Pexeta" width={130} height={46} priority className="h-9 w-auto md:h-10" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-slate-800 hover:text-slate-950">
              Services <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="rounded-lg border border-border bg-white p-2 shadow-lg shadow-slate-950/5">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block rounded-md px-3 py-2.5 hover:bg-ice"
                    >
                      <div className="text-sm font-semibold text-slate-950">{s.label}</div>
                      <div className="text-xs text-slate-600">{s.sub}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/case-studies" className="text-[15px] font-medium text-slate-800 hover:text-slate-950">
            Case Studies
          </Link>
          <Link href="/pricing" className="text-[15px] font-medium text-slate-800 hover:text-slate-950">
            Pricing
          </Link>
          <Link href="/about" className="text-[15px] font-medium text-slate-800 hover:text-slate-950">
            About Us
          </Link>
          <Link href="/careers" className="text-[15px] font-medium text-slate-800 hover:text-slate-950">
            Careers
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-md bg-amber px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-dark hover:text-white"
          >
            Get Free Audit
          </Link>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="container-px mx-auto flex flex-col gap-1 py-3">
            {serviceLinks.map((s) => (
              <Link key={s.href} href={s.href} className="py-2 text-slate-800" onClick={() => setMobileOpen(false)}>
                {s.label}
              </Link>
            ))}
            <Link href="/case-studies" className="py-2 text-slate-800" onClick={() => setMobileOpen(false)}>
              Case Studies
            </Link>
            <Link href="/pricing" className="py-2 text-slate-800" onClick={() => setMobileOpen(false)}>
              Pricing
            </Link>
            <Link href="/about" className="py-2 text-slate-800" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
            <Link href="/careers" className="py-2 text-slate-800" onClick={() => setMobileOpen(false)}>
              Careers
            </Link>
            <Link
              href="/contact"
              className="mt-2 rounded-md bg-amber px-4 py-2.5 text-center text-sm font-semibold text-slate-950"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
