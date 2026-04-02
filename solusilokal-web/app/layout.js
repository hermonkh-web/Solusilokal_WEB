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

import './globals.css'

export const metadata = {

metadataBase: new URL("https://solusilokal.id"),

title: {
default: "SolusiLokal.id | Jasa Website UMKM & Sistem Digital",
template: "%s | SolusiLokal"
},

description:
"Jasa pembuatan website UMKM, landing page, company profile dan sistem digital bisnis. Konsultasi gratis untuk bisnis yang ingin berkembang.",

keywords: [
"jasa website umkm",
"jasa website palangkaraya",
"jasa landing page",
"company profile website",
"jasa web murah",
"web developer indonesia",
"sistem bisnis digital",
"automation bisnis"
],

authors: [
{
name: "SolusiLokal",
url: "https://solusilokal.id"
}
],

creator: "SolusiLokal",
publisher: "SolusiLokal",

icons: {

icon: [
{ url: "/image/favicon.ico" },
{ url: "/image/icon.png", type: "image/png" }
],

shortcut: ["/image/favicon.ico"],

apple: [
{ url: "/image/icon.png" }
],

},

openGraph: {

title: "SolusiLokal.id | Website & Sistem Digital UMKM",

description:
"Kami membantu UMKM naik level dengan website profesional dan sistem digital.",

url: "https://solusilokal.id",

siteName: "SolusiLokal",

images: [
{
url: "/image/og-image.jpg",
width: 1200,
height: 630,
alt: "SolusiLokal Website Service"
}
],

locale: "id_ID",

type: "website"

},

twitter: {

card: "summary_large_image",

title: "SolusiLokal.id",

description:
"Jasa website UMKM dan sistem digital untuk bisnis berkembang",

images: ["/image/og-image.jpg"]

},

robots: {

index: true,

follow: true,

nocache: false,

googleBot: {

index: true,

follow: true,

noimageindex: false,

"max-video-preview": -1,

"max-image-preview": "large",

"max-snippet": -1

}

},

verification: {

google: "ISI_KALAU_SUDAH_DAFTAR_SEARCH_CONSOLE"

}

}

export default function RootLayout({ children }) {

return (

<html lang="id">

<body>

{children}

</body>

</html>

)

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
