"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface WalletContextType {
    isConnected: boolean;
    walletAddress: string | null;
    walletType: string | null;
    connectWallet: (type: string) => Promise<string>;
    disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType>({
    isConnected: false,
    walletAddress: null,
    walletType: null,
    connectWallet: async () => "",
    disconnectWallet: () => {},
});

export const useWallet = () => useContext(WalletContext);

interface WalletProviderProps {
    children: ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
    const [isConnected, setIsConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [walletType, setWalletType] = useState<string | null>(null);

    const connectWallet = async (type: string) => {
        // In a real implementation, this would connect to the actual wallet
        // For now, we'll simulate a connection
        try {
            console.log(`Connecting to ${type}...`);

            // Simulate connection delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Mock wallet address
            const mockAddress = "0x" + Math.random().toString(16).slice(2, 42);

            setIsConnected(true);
            setWalletAddress(mockAddress);
            setWalletType(type);

            console.log(`Connected to ${type} with address ${mockAddress}`);

            // Store in localStorage for persistence
            localStorage.setItem("walletConnected", "true");
            localStorage.setItem("walletAddress", mockAddress);
            localStorage.setItem("walletType", type);

            return mockAddress;
        } catch (error) {
            console.error("Error connecting wallet:", error);
            throw error;
        }
    };

    const disconnectWallet = () => {
        setIsConnected(false);
        setWalletAddress(null);
        setWalletType(null);

        // Clear localStorage
        localStorage.removeItem("walletConnected");
        localStorage.removeItem("walletAddress");
        localStorage.removeItem("walletType");

        console.log("Wallet disconnected");
    };

    return (
        <WalletContext.Provider
            value={{
                isConnected,
                walletAddress,
                walletType,
                connectWallet,
                disconnectWallet,
            }}
        >
            {children}
        </WalletContext.Provider>
    );
}
