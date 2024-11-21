// import Footer from '@/components/Footer';
// import Navbar from '@/components/Navbar';
import TailwindIndicator from '@/components/TailwindIndicator';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITECONFIG } from '@/config/site';
const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: SITECONFIG.siteMetadata.title,
//   description: SITECONFIG.siteMetadata.description,
//   icons: {
//     icon: '/favicon.ico',
//     shortcut: '/favicon-16x16.png',
//     apple: '/apple-icon.png',
//   },
//   openGraph: {
//     images: '/opengraph-image.jpg',
//   },
// };

export const metadata: Metadata = {
  title: SITECONFIG.siteMetadata.title,
  description: SITECONFIG.siteMetadata.description,
  metadataBase: new URL('https://www.dxg.agency'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-USA',
    },
  },
  openGraph: {
    images: '/opengraph-image.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full scroll-smooth bg-black'>
      <body
        className={cn(
          'relative h-full overflow-x-hidden font-sans antialiased',
          inter.className
        )}
      >
        {/* <Navbar /> */}
        <main className=''>
          <div className=''>{children}</div>
        </main>
        {/* <Footer /> */}
        {/* <TailwindIndicator /> */}
      </body>
    </html>
  );
}
