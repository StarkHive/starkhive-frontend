import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
    title: "Starkhive",
    description: "Starkhive: New Layout Ready",
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
}
