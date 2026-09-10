import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918754579898";
const PREFILLED = encodeURIComponent(
  "Hi Pexeta team, I'd like to get an account audit for my brand..."
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Pexeta on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-white shadow-lg shadow-emerald/30 transition-transform hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}
