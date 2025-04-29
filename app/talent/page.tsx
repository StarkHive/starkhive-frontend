// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/ui/footer";

export default function TalentPage() {
    return (
        <div className="min-h-screen bg-starkhive-background text-white">
            <div className="bg-grid-pattern bg-black">
                <Navbar />
                <main className="container mx-auto px-4 py-16 text-black">
                    <div className="max-w-4xl mx-auto">
                        {/* Job Header */}
                        <div className="border border-[#0900FF] rounded-lg p-6 bg-transparent mb-8">
                            <h1 className="text-3xl text-white font-bold mb-4 ">
                                Smart Contract Developer
                            </h1>

                            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
                                <div className="flex items-center gap-1 text-white">
                                    <span className="inline-block ">🏢</span>
                                    DeFi Protocol X
                                </div>
                                <div className="flex items-center gap-1 text-white">
                                    <span className="inline-block">📍</span>
                                    Remote
                                </div>
                                <div className="flex items-center gap-1 text-white">
                                    <span className="inline-block">⏰</span>
                                    Full-time
                                </div>
                                <div className="flex items-center gap-1 text-white">
                                    <span className="inline-block">💰</span>
                                    120-150K USDC
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-between items-center">
                                <div className="flex flex-wrap gap-6 text-sm text-white">
                                    <div className="flex items-center gap-1">
                                        <span className="inline-block">📅</span>
                                        Posted: 2024-03-15
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="inline-block">⏳</span>
                                        Deadline: 2024-04-15
                                    </div>
                                </div>

                                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-gradient-to-r from-[#FF1CF7] to-[#0900FF] hover:bg-gradient-to-r hover:from-[#FF1CF7]/90 hover:to-[#0900FF]/90 text-white text-[14px] px-4 py-2 md:w-auto w-full">
                                    Apply Now
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">
                                Description
                            </h2>
                            <div className="text-white">
                                <p>
                                    Looking for an experienced Solidity
                                    developer to build and audit smart contracts
                                    for our DeFi protocol.
                                </p>
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">
                                Requirements
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-white">
                                <li>5+ years of experience with Solidity</li>
                                <li>Experience with Cairo and Starknet</li>
                                <li>Strong understanding of DeFi protocols</li>
                                <li>Security-first mindset</li>
                            </ul>
                        </div>

                        {/* Responsibilities */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">
                                Responsibilities
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-white">
                                <li>Design and implement smart contracts</li>
                                <li>Conduct internal audits</li>
                                <li>Collaborate with the security team</li>
                                <li>Optimize gas usage</li>
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">
                                Benefits
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-white">
                                <li>Competitive salary in USDC</li>
                                <li>Flexible working hours</li>
                                <li>Remote-first culture</li>
                                <li>Token incentives</li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
