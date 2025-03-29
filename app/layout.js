import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import Header from '@/components/layout/Header';
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Use specific weights
  variable: "--font-poppins", // Define a CSS variable
  display: "swap",
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})


export const metadata = {
  title: {
    template: '%s',
    default: 'AC Repair Service Near Me | Onit', // a default is required when creating a template
  },
  description: "Fast, reliable, and affordable AC repair near you. Stay cool with Onit's expert service—contact us today!",
  robots: "index", // Ensures pages are marked as noindex

  metadataBase: new URL('https://www.onit.services'),

  alternates: {
    canonical: '/',
  },

  openGraph: {
    url: '/',
    siteName: 'Onit Services',
    images: [
      {
        url: "/public/services/acService.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'ogImage',
      },
      {
        url: "/public/services/acService.jpg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'ogImage1',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

  verification: {
    google: 'KtngcCcWiJ4_DHLFxqyw0TAmlr_WIGsV0P_Q3w4pSdM',
  },

}



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <GoogleTagManager gtmId="G-YDVFP0QVY0" />
      <GoogleAnalytics gaId="G-YDVFP0QVY0" />

      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >

        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
