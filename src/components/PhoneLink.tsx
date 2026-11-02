"use client";

import { trackPhoneClick } from "@/lib/track";

export default function PhoneLink({ source, className }: { source: string; className?: string }) {
  return (
    <a href="tel:+918754579898" onClick={() => trackPhoneClick(source)} className={className}>
      +91 87545 79898
    </a>
  );
}
