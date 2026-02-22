import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from './components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nomads | Navigating the Future of Technology',
  description: 'We are digital pioneers, helping businesses navigate the ever-evolving landscape of technology. From AI-powered solutions to cloud infrastructure, we build the future, today.',
  keywords: ['AI', 'Machine Learning', 'Cloud Solutions', 'Software Development', 'Digital Transformation', 'Technology Consulting'],
  authors: [{ name: 'Nomads' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Nomads | Navigating the Future of Technology',
    description: 'We are digital pioneers, helping businesses navigate the ever-evolving landscape of technology.',
    url: 'https://nomads.tech',
    siteName: 'Nomads',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nomads | Navigating the Future of Technology',
    description: 'We are digital pioneers, helping businesses navigate the ever-evolving landscape of technology.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
