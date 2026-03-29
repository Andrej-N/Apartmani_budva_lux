import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lux Apartmani Budva | Luksuzni smeštaj u Budvi",
  description:
    "5 luksuznih apartmana u srcu Budve sa pogledom na more i Stari grad. Potpuno opremljeni, savršena lokacija, dostupni za kratke i duže boravke. Rezervišite direktno za najbolju cenu.",
  keywords:
    "apartmani Budva, luksuzni smeštaj Budva, apartmani sa pogledom na more, Crna Gora apartmani, vacation rental Budva, Montenegro apartments",
  openGraph: {
    title: "Lux Apartmani Budva | Luksuzni smeštaj u Budvi",
    description:
      "5 luksuznih apartmana u srcu Budve sa pogledom na more i Stari grad.",
    type: "website",
    locale: "sr_RS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Lux Apartmani Budva",
              description:
                "5 luksuznih apartmana u Budvi sa pogledom na more i Stari grad. Moderan komfor i savršena lokacija.",
              image: "/images/apartments/1102-1104/city-sea-panorama.jpg",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ME",
                addressLocality: "Budva",
                addressRegion: "Crna Gora",
              },
              priceRange: "$$",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
                { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
                { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
                { "@type": "LocationFeatureSpecification", name: "Washing Machine", value: true },
              ],
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
