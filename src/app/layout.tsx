import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "آفاق المتكاملة لتكنولوجيا المعلومات - حلول تقنية متكاملة",
  description: "آفاق المتكاملة لتكنولوجيا المعلومات - شريكك الموثوق لتقديم حلول تقنية مبتكرة في الشبكات، الأمن، والبرمجيات للقطاعات الصحية والتعليمية والتجارية",
  keywords: "تقنية المعلومات، البرمجيات، الشبكات، أمن المعلومات، القطاع الصحي، التعليم، الأعمال",
  authors: [{ name: "آفاق المتكاملة لتكنولوجيا المعلومات" }],
  openGraph: {
    title: "آفاق المتكاملة لتكنولوجيا المعلومات",
    description: "حلول تقنية متكاملة للقطاعات الصحية والتعليمية والتجارية",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${cairo.variable} ${tajawal.variable} bg-gray-50 font-cairo antialiased`}
      >
        <TopBar />
        {children}
      </body>
    </html>
  );
}
