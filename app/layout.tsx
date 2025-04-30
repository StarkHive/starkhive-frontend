import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "@/components/wallet-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "StarkHive - Web3 Jobs Marketplace",
    description:
        "The decentralized marketplace for Web3 talent and opportunities",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <WalletProvider>{children}</WalletProvider>
            </body>
        </html>
    );
}
