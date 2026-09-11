import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-slate-950 text-slate-400">
      <div className="container-px mx-auto max-w-6xl py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="font-heading text-lg font-bold text-white">Pexeta</div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Amazon-anchored, omnichannel growth partner for Indian D2C and
              retail brands — across marketplaces and quick commerce.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Services</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/services/marketplaces" className="hover:text-white">Marketplace Growth</Link></li>
              <li><Link href="/services/quick-commerce" className="hover:text-white">Quick Commerce</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Engagement Models</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Legal</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-800 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Pexeta. All rights reserved.</span>
          <span>Chennai, India</span>
        </div>
      </div>
    </footer>
  );
}
