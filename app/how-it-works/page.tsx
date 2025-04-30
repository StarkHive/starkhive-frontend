// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/ui/footer";
import {
    Wallet,
    UserCircle,
    FileText,
    Bitcoin,
    Shield,
    Zap,
} from "lucide-react";

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-starkhive-background text-white">
            <div className="bg-grid-pattern bg-black">
                <Navbar />
                <main className="container mx-auto px-20 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-2">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-starkhive-purple to-starkhive-blue">
                                How Starkhive Works
                            </span>
                        </h2>
                        <p className="text-zinc-400">
                            Your guide to using the decentralized job
                            marketplace
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        {/* Step 1 */}
                        <div className="bg-zinc-900/70 rounded-lg p-6 border border-pink-900/95 w-full h-auto">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-zinc-800 rounded-lg">
                                    <Wallet className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-2">
                                        1. Connect Your Wallet
                                    </h2>
                                    <p className="text-zinc-400">
                                        Start by connecting your Web3 wallet to
                                        access the platform. We support multiple
                                        wallets including MetaMask and
                                        WalletConnect.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-zinc-900/70 rounded-lg p-6 border border-pink-900/95 w-full h-auto">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-zinc-800 rounded-lg">
                                    <UserCircle className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-2">
                                        2. Create Your Profile
                                    </h2>
                                    <p className="text-zinc-400">
                                        Build your decentralized identity with
                                        verifiable credentials. Showcase your
                                        skills and experience on-chain.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-zinc-900/70 rounded-lg p-6 border border-pink-900/95 w-full h-auto">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-zinc-800 rounded-lg">
                                    <FileText className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-2">
                                        3. Smart Contract Agreement
                                    </h2>
                                    <p className="text-zinc-400">
                                        All work agreements are secured by smart
                                        contracts, ensuring transparent terms
                                        and automatic payments.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-zinc-900/70 rounded-lg p-6 border border-pink-900/95 w-full h-auto">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-zinc-800 rounded-lg">
                                    <Bitcoin className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-2">
                                        4. Secure Payments
                                    </h2>
                                    <p className="text-zinc-400">
                                        Get paid in crypto with our escrow
                                        system. Funds are released automatically
                                        upon work completion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-10">
                            Platform Features
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Feature 1 */}
                            <div className="bg-zinc-900/70 rounded-lg p-6 border border-zinc-800 w-full h-auto">
                                <div className="flex flex-col items-start gap-2">
                                    <div className="bg-zinc-800 rounded-lg p-2">
                                        <Shield className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1">
                                            Trustless Escrow
                                        </h3>
                                        <p className="text-zinc-400 text-[16px]">
                                            Our smart contract escrow system
                                            ensures secure payments and protects
                                            both parties throughout the work
                                            process.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-zinc-900/70 rounded-lg p-6 border border-zinc-800 w-full h-auto">
                                <div className="flex flex-col items-start gap-2">
                                    <div className="bg-zinc-800 rounded-lg p-2">
                                        <Zap className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1">
                                            AI-Powered Matching
                                        </h3>
                                        <p className="text-zinc-400 text-[16px]">
                                            Advanced algorithms match talent
                                            with opportunities based on skills,
                                            experience, and project
                                            requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
