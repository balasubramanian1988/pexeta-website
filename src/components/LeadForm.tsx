"use client";

import { useState } from "react";

const revenueBands = ["Under ₹2L", "₹2L – ₹10L", "₹10L – ₹25L", "₹25L+"];
const channels = ["Amazon", "Flipkart", "Myntra", "FirstCry", "Blinkit", "Instamart", "Zepto", "BigBasket"];

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);

  function toggleChannel(c: string) {
    setSelectedChannels((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      brandUrl: (form.elements.namedItem("brandUrl") as HTMLInputElement).value,
      revenueBand: (form.elements.namedItem("revenueBand") as HTMLSelectElement).value,
      channels: selectedChannels,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setSelectedChannels([]);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-emerald/30 bg-emerald/5 p-6 text-center">
        <p className="font-semibold text-slate-950">Request received.</p>
        <p className="mt-1 text-sm text-slate-600">
          Our team will reach out on WhatsApp within one business day with your audit slot.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            className="w-full rounded-md border border-border px-3.5 py-2.5 text-sm text-slate-950 outline-none focus:border-blue"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-slate-800">
            WhatsApp Number
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            required
            type="tel"
            pattern="[0-9+ ]{10,15}"
            className="w-full rounded-md border border-border px-3.5 py-2.5 text-sm text-slate-950 outline-none focus:border-blue"
            placeholder="98XXXXXXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="brandUrl" className="mb-1.5 block text-sm font-medium text-slate-800">
          Brand / Store URL
        </label>
        <input
          id="brandUrl"
          name="brandUrl"
          type="text"
          className="w-full rounded-md border border-border px-3.5 py-2.5 text-sm text-slate-950 outline-none focus:border-blue"
          placeholder="amazon.in/yourbrand or your website"
        />
      </div>

      <div>
        <label htmlFor="revenueBand" className="mb-1.5 block text-sm font-medium text-slate-800">
          Current Monthly Revenue
        </label>
        <select
          id="revenueBand"
          name="revenueBand"
          required
          className="w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-slate-950 outline-none focus:border-blue"
        >
          <option value="">Select a range</option>
          {revenueBands.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <div>
        <span className="mb-1.5 block text-sm font-medium text-slate-800">Active Channels</span>
        <div className="flex flex-wrap gap-2">
          {channels.map((c) => (
            <button
              type="button"
              key={c}
              onClick={() => toggleChannel(c)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedChannels.includes(c)
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-border text-slate-600 hover:border-slate-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-amber px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-dark hover:text-white disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Claim Your Free Account Audit & Growth Roadmap"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}
    </form>
  );
}
// this is a sample line