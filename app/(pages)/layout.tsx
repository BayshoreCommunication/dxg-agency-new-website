import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TailwindIndicator from "@/components/TailwindIndicator";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITECONFIG } from "@/config/site";

import "./globals.css";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const metadata: Metadata = {
  title: SITECONFIG.siteMetadata.title,
  description: SITECONFIG.siteMetadata.description,
  metadataBase: new URL("https://www.dxg.agency"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-black font-sans">
      <body
        className={cn(
          "relative h-full overflow-x-hidden font-sans antialiased",
        )}
      >
        <Navbar />
        <main className="relative flex min-h-screen flex-col">
          <div className="flex-1 flex-grow bg-black">{children}</div>
        </main>
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  );
}
