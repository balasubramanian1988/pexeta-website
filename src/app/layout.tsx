import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pexeta.in"),
  title: {
    default: "Pexeta.in | Amazon & Omnichannel E-commerce Growth Agency",
    template: "%s | Pexeta",
  },
  description:
    "Scale your brand across Amazon, Flipkart, Blinkit, and Zepto. Pexeta manages ₹1.5 Cr+ monthly revenue with proven ad yield strategies.",
  openGraph: {
    title: "Pexeta.in | Amazon & Omnichannel E-commerce Growth Agency",
    description:
      "Scale your brand across Amazon, Flipkart, Blinkit, and Zepto. Pexeta manages ₹1.5 Cr+ monthly revenue with proven ad yield strategies.",
    url: "https://pexeta.in",
    siteName: "Pexeta",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
