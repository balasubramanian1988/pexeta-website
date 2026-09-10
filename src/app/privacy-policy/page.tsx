import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16">
      <div className="container-px mx-auto max-w-3xl">
        <h1 className="font-heading text-3xl font-extrabold text-slate-950">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: September 10, 2026</p>

        <div className="prose-content mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
          <p>
            Pexeta (&quot;we&quot;, &quot;us&quot;) operates pexeta.in. This
            policy explains what information we collect through this website
            and how we use it.
          </p>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Information we collect</h2>
            <p className="mt-2">
              When you submit our audit request or contact form, we collect
              your name, WhatsApp number, brand/store URL, current revenue
              range, and the marketplace channels you select. We also
              collect standard analytics data (pages visited, device type,
              approximate location) via Google Analytics and Microsoft
              Clarity.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">How we use it</h2>
            <p className="mt-2">
              We use the information you submit to contact you about our
              services, prepare an account audit, and follow up via WhatsApp,
              phone, or email. We do not sell your information to third
              parties.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Data storage</h2>
            <p className="mt-2">
              Form submissions are stored securely and are accessible only
              to our internal team for the purpose of following up on your
              enquiry.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Your rights</h2>
            <p className="mt-2">
              You can request that we delete your information at any time by
              contacting us at support@pexeta.in.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-slate-950">Contact</h2>
            <p className="mt-2">
              Questions about this policy can be sent to support@pexeta.in.
            </p>
          </div>

          <p className="rounded-md bg-ice p-4 text-xs text-slate-500">
            This is a draft policy generated for launch purposes. Have it
            reviewed by a lawyer before going live, particularly around
            DPDP Act 2023 compliance for Indian users.
          </p>
        </div>
      </div>
    </section>
  );
}
