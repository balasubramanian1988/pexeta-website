import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  robots: { index: true, follow: true },
};

export default function RefundPolicyPage() {
  return (
    <section className="py-16">
      <div className="container-px mx-auto max-w-3xl">
        <h1 className="font-heading text-3xl font-extrabold text-slate-950">Refund &amp; Cancellation Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: September 10, 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Retainer fees</h2>
            <p className="mt-2">
              Fixed retainer fees are billed monthly in advance. Because
              work — audits, listing changes, campaign builds — begins
              immediately at the start of each billing cycle, retainer fees
              already paid for the current month are non-refundable.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Revenue share fees</h2>
            <p className="mt-2">
              Revenue share fees are calculated and invoiced based on actual
              revenue for the preceding month and are non-refundable once
              invoiced, as they reflect work already completed.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Cancellation</h2>
            <p className="mt-2">
              You may cancel your engagement at any time with the notice
              period specified in your signed agreement. Cancellation stops
              billing from the next cycle onward; it does not refund the
              current cycle.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Ad spend</h2>
            <p className="mt-2">
              Marketplace ad spend is paid directly to the marketplace by
              you and is not covered by this policy — refunds for ad spend
              are subject to the respective marketplace&apos;s own policies.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Contact</h2>
            <p className="mt-2">
              For billing questions, contact support@pexeta.in.
            </p>
          </div>

          <p className="rounded-md bg-ice p-4 text-xs text-slate-500">
            This is a draft generated for launch purposes. Confirm these
            terms match your actual billing practices and have it reviewed
            by a lawyer before going live — this page is required for
            payment gateway (Razorpay/Cashfree) activation.
          </p>
        </div>
      </div>
    </section>
  );
}
