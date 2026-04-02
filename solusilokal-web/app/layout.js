import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SolusiLokal.id | Jasa Website & Sistem Bisnis UMKM",
  description: "Solusi website, landing page, dan sistem digital untuk UMKM. Konsultasi gratis.",

  openGraph: {
    title: "SolusiLokal.id | Jasa Website UMKM",
    description: "Kami membantu UMKM naik kelas dengan website dan sistem digital.",
    url: "https://solusilokal.id",
    siteName: "SolusiLokal.id",
    images: [
      {
        url: "https://solusilokal.id/og-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SolusiLokal.id",
    description: "Jasa website UMKM dan sistem bisnis digital",
    images: ["https://solusilokal.id/og-image.jpg"],
  }
}



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
