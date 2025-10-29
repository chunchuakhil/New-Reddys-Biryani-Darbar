import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Reddys Biryani Darbar | Authentic Taste of Hyderabad",
    template: "%s | Reddys Biryani Darbar",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description:
    "Reddys Biryani Darbar serves authentic Hyderabadi dum biryani, fried rice, veg and non-veg Indian dishes in Pune. Dine-in, takeaway or order online.",
  keywords: [
    // 🔑 Core Brand Keywords
    "Reddys Biryani Darbar",
    "Reddy's Biryani Darbar",
    "Reddys Biryani",
    "Biryani Darbar",
    "Hyderabadi Biryani",
    "Authentic Biryani Restaurant",
    "Reddys Restaurant",

    // 🔑 Near Me Search Keywords
    "biryani near me",
    "best biryani near me",
    "hyderabadi biryani near me",
    "dum biryani near me",
    "veg food near me",
    "non-veg food near me",
    "fried rice near me",
    "chicken biryani near me",
    "mutton biryani near me",
    "egg biryani near me",
    "prawns biryani near me",
    "south indian food near me",
    "north indian food near me",
    "top restaurants near me",
    "best hotels near me",
    "family restaurant near me",
    "affordable restaurant near me",
    "ac restaurant near me",
    "takeaway restaurant near me",
    "home delivery restaurant near me",
    "food delivery near me",
    "late night food near me",

    // 🔑 Cuisine and Menu
    "fried rice",
    "chicken fried rice",
    "egg fried rice",
    "paneer biryani",
    "veg biryani",
    "non-veg biryani",
    "chicken curry",
    "mutton curry",
    "butter chicken",
    "grilled chicken",
    "tandoori chicken",
    "spicy biryani",
    "family biryani pack",
    "combo meals",
    "biryani with raita",
    "biryani takeaway",

    // 🔑 Local & Intent-based
    "biryani in Pune",
    "biryani in Hinjewadi",
    "biryani in Wakad",
    "best restaurant in Pune",
    "Hyderabadi restaurant in Pune",
    "top biryani in Pune",
    "restaurants open now near me",
    "food for lunch near me",
    "dinner near me",
    "takeaway near me",
    "lunch offers near me",
    "dinner offers near me",
    "Reddys Biryani Darbar Pune",
    "Reddys Biryani Darbar menu",
    "Reddys Biryani Darbar timings",
  ],
  metadataBase: new URL("https://reddysbiryanidarbar.in"),
  openGraph: {
    title: "Reddys Biryani Darbar | Authentic Taste of Hyderabad",
    description:
      "Enjoy flavorful Hyderabadi dum biryani and Indian delicacies at Reddys Biryani Darbar, Pune.",
    url: "https://reddysbiryanidarbar.in",
    siteName: "Reddys Biryani Darbar",
    images: [
      {
        url: "/reddys-biryani-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Reddys Biryani Darbar Restaurant",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddys Biryani Darbar | Authentic Taste of Hyderabad",
    description:
      "Authentic Hyderabadi Dum Biryani and Indian dishes — dine-in or takeaway in Pune.",
    images: ["/reddys-biryani-banner.jpg"],
  },
  alternates: { canonical: "https://reddysbiryanidarbar.in" },
};

// JSON-LD structured data
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Reddys Biryani Darbar",
  image: "https://reddysbiryanidarbar.in/reddys-biryani-banner.jpg",
  url: "https://reddysbiryanidarbar.in",
  telephone: "+91 9876543210",
  priceRange: "₹₹",
  servesCuisine: [
    "Hyderabadi",
    "Indian",
    "Biryani",
    "Veg",
    "Non-Veg",
    "Fried Rice",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Hinjewadi Phase 2, Pune",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411057",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "23:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/reddysbiryanidarbar",
    "https://www.instagram.com/reddysbiryanidarbar",
    "https://maps.google.com/?cid=reddysbiryanidarbar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD for LocalBusiness / Restaurant */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
