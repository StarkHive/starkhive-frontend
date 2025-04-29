import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/ui/footer";
import { Globe, Shield, Zap } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-starkhive-background text-white">
            <div className="bg-grid-pattern bg-black">
                <Navbar />
                <main className="container mx-auto px-20 py-16">
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 p-3">
                                <Image
                                    src="/SVG.png"
                                    alt="Logo"
                                    width={64}
                                    height={64}
                                    className="w-[41px] h-[41px]"
                                />
                            </div>
                        </div>

                        <h2 className="text-3xl font-inter font-bold text-center mb-4">
                            <span className=" bg-gradient-to-r from-[#FF1CF7] to-[#0900FF] bg-clip-text text-transparent">
                                About StarkHive
                            </span>
                        </h2>
                        <p className="text-zinc-400">
                            Building the future of decentralized work on
                            Starknet
                        </p>
                    </div>

                    <div className=" mx-auto px-4 sm:px-6">
                        {/* Our Mission */}
                        <div className="bg-zinc-900/70 rounded-lg p-6 sm:p-8 mb-10 border border-zinc-800">
                            <h2 className="text-2xl font-bold mb-4">
                                Our Mission
                            </h2>
                            <p className="text-zinc-300 leading-relaxed mb-4">
                                StarkHive is revolutionizing the way Web3 talent
                                connects with opportunities. We&apos;re building
                                a trustless, efficient marketplace that
                                leverages
                            </p>
                            <p className="text-zinc-300 leading-relaxed">
                                blockchain technology to create transparent,
                                secure, and fair working relationships in the
                                decentralized economy.
                            </p>
                        </div>

                        {/* Core Values */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            {/* Decentralization */}
                            <div className="bg-zinc-900/70 rounded-lg p-6 border border-zinc-800 w-full h-auto">
                                <div className="flex flex-col items-start mb-4">
                                    <Globe className="h-8 w-8 text-white mb-3" />
                                    <h3 className="text-xl font-bold">
                                        Decentralization
                                    </h3>
                                </div>
                                <p className="text-zinc-400">
                                    We believe in a future where work is truly
                                    global, borderless, and accessible to
                                    everyone.
                                </p>
                            </div>

                            {/* Security */}
                            <div className="bg-zinc-900/70 rounded-lg p-6 border border-zinc-800 w-full h-auto">
                                <div className="flex flex-col items-start mb-4">
                                    <Shield className="h-8 w-8 text-white mb-3" />
                                    <h3 className="text-xl font-bold">
                                        Security
                                    </h3>
                                </div>
                                <p className="text-zinc-400">
                                    Built on Starknet&apos;s secure
                                    infrastructure, ensuring safe transactions
                                    and protected user data.
                                </p>
                            </div>

                            {/* Innovation */}
                            <div className="bg-zinc-900/70 rounded-lg p-6 border border-zinc-800 w-full h-auto">
                                <div className="flex flex-col items-start mb-4">
                                    <Zap className="h-8 w-8 text-white mb-3" />
                                    <h3 className="text-xl font-bold">
                                        Innovation
                                    </h3>
                                </div>
                                <p className="text-zinc-400">
                                    Pushing the boundaries of what&apos;s
                                    possible in decentralized talent
                                    acquisition.
                                </p>
                            </div>
                        </div>

                        {/* Our Technology */}
                        <div className="bg-zinc-900/70 rounded-lg p-6 sm:p-8 mb-10 border border-zinc-800">
                            <h2 className="text-2xl font-bold mb-6">
                                Our Technology
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-zinc-800/70 rounded p-4 border-l-4 border-white">
                                    <h3 className="text-lg font-semibold mb-2">
                                        Starknet Layer 2
                                    </h3>
                                    <p className="text-zinc-400">
                                        Built on Starknet for scalable, low-cost
                                        transactions and smart contract
                                        execution.
                                    </p>
                                </div>
                                <div className="bg-zinc-800/70 rounded p-4 border-l-4 border-white">
                                    <h3 className="text-lg font-semibold mb-2">
                                        Smart Contracts
                                    </h3>
                                    <p className="text-zinc-400">
                                        Secure, audited smart contracts for
                                        escrow, payments, and reputation
                                        management.
                                    </p>
                                </div>
                                <div className="bg-zinc-800/70 rounded p-4 border-l-4 border-white">
                                    <h3 className="text-lg font-semibold mb-2">
                                        AI Integration
                                    </h3>
                                    <p className="text-zinc-400">
                                        Advanced matching algorithms to connect
                                        the right talent with the right
                                        opportunities.
                                    </p>
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
