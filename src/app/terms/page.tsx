import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <section className="py-16">
      <div className="container-px mx-auto max-w-3xl">
        <h1 className="font-heading text-3xl font-extrabold text-slate-950">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: September 10, 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Services</h2>
            <p className="mt-2">
              Pexeta provides marketplace and quick-commerce growth
              management services under a Fixed Retainership, Revenue
              Performance Share, or Hybrid Enterprise engagement, as agreed
              in a separate written proposal or contract with each client.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Engagement terms</h2>
            <p className="mt-2">
              Engagements run month-to-month following an initial ramp-up
              period (typically three months) agreed at the start of the
              engagement. Either party may terminate with the notice period
              specified in the client&apos;s signed agreement.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Ad spend</h2>
            <p className="mt-2">
              Marketplace advertising spend (e.g. Amazon PPC, Flipkart Ads)
              is billed directly by the respective marketplace to the
              client&apos;s own account and is separate from Pexeta&apos;s
              management fee.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">No guaranteed results</h2>
            <p className="mt-2">
              While we manage accounts to defined targets, marketplace
              algorithms, competition, and category conditions are outside
              our control. Case studies and metrics shown on this website
              reflect specific client outcomes and are not a guarantee of
              results for any other brand.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Limitation of liability</h2>
            <p className="mt-2">
              Pexeta&apos;s liability under any engagement is limited to the
              fees paid by the client in the preceding three months, except
              where prohibited by applicable law.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Governing law</h2>
            <p className="mt-2">
              These terms are governed by the laws of India, with courts in
              Chennai, Tamil Nadu having exclusive jurisdiction.
            </p>
          </div>

          <p className="rounded-md bg-ice p-4 text-xs text-slate-500">
            This is a draft generated for launch purposes. Have it reviewed
            by a lawyer and aligned with your actual signed client
            agreements before going live.
          </p>
        </div>
      </div>
    </section>
  );
}
