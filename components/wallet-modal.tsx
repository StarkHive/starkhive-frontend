"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface WalletOption {
    id: string;
    name: string;
    description: string;
    icon: string;
    onClick: () => void;
}

interface WalletModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
    const walletOptions: WalletOption[] = [
        {
            id: "starkhive",
            name: "Starkhive wallet",
            description: "Connect using Starkhive wallet",
            icon: "/wallet-icons/starkhive.png",
            onClick: () => {
                console.log("Connecting to Starkhive wallet");
                onClose();
            },
        },
        {
            id: "metamask",
            name: "Metamask",
            description: "Connect using Metamask wallet",
            icon: "/wallet-icons/metamask.png",
            onClick: () => {
                console.log("Connecting to Metamask");
                onClose();
            },
        },
        {
            id: "coinbase",
            name: "Coinbase wallet",
            description: "Connect using coinbase wallet",
            icon: "/wallet-icons/coinbase.png",
            onClick: () => {
                console.log("Connecting to Coinbase wallet");
                onClose();
            },
        },
    ];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md p-1 bg-gradient-to-b from-[#FF1CF7] to-[#0900FF] rounded">
                <div className="bg-black rounded-lg p-6">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                            Connect Your Wallet
                        </DialogTitle>
                        <DialogDescription className="text-gray-400">
                            Access StarkHive&apos;s decentralized job
                            marketplace securely
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-4 py-4">
                        {walletOptions.map((wallet) => (
                            <button
                                key={wallet.id}
                                onClick={wallet.onClick}
                                className="flex items-center justify-between bg-zinc-900 rounded-lg p-4 hover:bg-zinc-800 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <Image
                                            src={
                                                wallet.icon ||
                                                "/placeholder.svg"
                                            }
                                            alt={wallet.name}
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold">
                                            {wallet.name}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {wallet.description}
                                        </p>
                                    </div>
                                </div>
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                            </button>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
