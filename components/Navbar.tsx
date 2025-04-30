"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { WalletModal } from "@/components/wallet-modal";
import { useWallet } from "@/components/wallet-provider";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navbar() {
    const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
    const { isConnected, walletAddress, disconnectWallet } = useWallet();
    const pathname = usePathname();

    const openWalletModal = () => {
        setIsWalletModalOpen(true);
    };

    const closeWalletModal = () => {
        setIsWalletModalOpen(false);
    };

    const formatWalletAddress = (address: string) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <header
            className="relative sticky top-0
    container mx-auto px-4 py-4
    flex items-center justify-between

    after:content-['']          
    after:absolute after:left-0 after:bottom-0
    after:w-full after:h-[2px]  
    after:bg-gradient-to-r
      after:from-[#FF1CF7]
      after:to-[#0900FF]"
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/SVG.png"
                            alt="Logo"
                            width={32}
                            height={32}
                        />
                        <span className="font-bold font-inter text-lg">
                            StarkHive
                        </span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/jobs"
                        className={`text-sm transition-colors font-inter font-semibold ${
                            isActive("/jobs")
                                ? "text-starkhive-purple"
                                : "text-white hover:text-starkhive-purple"
                        }`}
                    >
                        Jobs
                    </Link>
                    <Link
                        href="/talent"
                        className={`text-sm transition-colors font-inter font-semibold ${
                            isActive("/talent")
                                ? "text-starkhive-purple"
                                : "text-white hover:text-starkhive-purple"
                        }`}
                    >
                        Talent
                    </Link>
                    <Link
                        href="/how-it-works"
                        className={`text-sm transition-colors font-inter font-semibold ${
                            isActive("/how-it-works")
                                ? "text-starkhive-purple"
                                : "text-white hover:text-starkhive-purple"
                        }`}
                    >
                        How It Works
                    </Link>
                    <Link
                        href="/about"
                        className={`text-sm transition-colors font-inter font-semibold ${
                            isActive("/about")
                                ? "text-starkhive-purple"
                                : "text-white hover:text-starkhive-purple"
                        }`}
                    >
                        About
                    </Link>
                </nav>

                {isConnected && walletAddress ? (
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-400">
                            {formatWalletAddress(walletAddress)}
                        </span>
                        <Button
                            variant="outline"
                            className="border-starkhive-purple text-starkhive-purple hover:bg-starkhive-purple/10 rounded-md px-4 py-2 text-sm"
                            onClick={disconnectWallet}
                        >
                            Disconnect
                        </Button>
                    </div>
                ) : (
                    <Button
                        className="bg-gradient-to-r from-[#FF1CF7] to-[#0900FF] hover:bg-gradient-to-r hover:from-[#FF1CF7]/90 hover:to-[#0900FF]/90 text-white rounded-md px-4 py-2 text-sm"
                        onClick={openWalletModal}
                    >
                        <Image
                            src="/bag.png"
                            alt="bag"
                            width={16}
                            height={16}
                        />
                        Connect Wallet
                    </Button>
                )}
            </div>

            <WalletModal
                isOpen={isWalletModalOpen}
                onClose={closeWalletModal}
            />
        </header>
    );
}
