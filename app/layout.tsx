import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],

export const metadata: Metadata = {
    title: 'Starkhive',
    description: 'Starkhive: New Layout Ready',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-white text-gray-900">
                <main className="flex flex-col items-center justify-center min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
}>) {
  return (
    <html lang="en">
      <body className={dmSans.variable}>
        <Navbar/>
        {children}

        <Footer/>
      </body>
    </html>
  );
}
