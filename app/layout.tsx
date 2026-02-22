import type { Metadata } from "next";
import { Providers } from "./providers";
import { Header, Footer } from "@/app/components/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nomads | AI Engineering & Digital Transformation",
  description: "A cutting-edge IT solutions and AI engineering company delivering end-to-end digital transformation services for startups, enterprises, and global clients.",
  keywords: ["AI", "Machine Learning", "Software Development", "Digital Transformation", "Generative AI", "Computer Vision"],
  openGraph: {
    title: "Nomads | Engineering Tomorrow's Intelligence",
    description: "Your partner in AI innovation and digital transformation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
