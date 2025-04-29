import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";
import {
    Building,
    Clock,
    DollarSign,
    MapPin,
    Calendar,
    Clock3,
} from "lucide-react";

export default function JobDetailsPage() {
    return (
        <div className="min-h-screen bg-starkhive-background text-white">
            <div className="bg-grid-pattern bg-black">
                <Navbar />
                <main className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        {/* Job Header */}
                        <div className="border border-starkhive-purple/30 rounded-lg p-6 bg-black/40 mb-8">
                            <h1 className="text-3xl font-bold mb-4">
                                Smart Contract Developer
                            </h1>

                            <div className="flex flex-wrap gap-6 text-sm text-zinc-300 mb-4">
                                <div className="flex items-center gap-1">
                                    <Building className="h-4 w-4" />
                                    DeFi Protocol X
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    Remote
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    Full-time
                                </div>
                                <div className="flex items-center gap-1">
                                    <DollarSign className="h-4 w-4" />
                                    120-150K USDC
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-between items-center">
                                <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        Posted: 2024-03-15
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock3 className="h-4 w-4" />
                                        Deadline: 2024-04-15
                                    </div>
                                </div>

                                <Button className="bg-starkhive-purple hover:bg-starkhive-purple/90 text-white">
                                    Apply Now
                                </Button>
                            </div>
                        </div>

                        {/* Job Description */}
                        <div className="mb-10">
                            <p className="text-zinc-300 leading-relaxed">
                                Looking for an experienced Solidity developer to
                                build and audit smart contracts for our DeFi
                                protocol.
                            </p>
                        </div>

                        {/* Requirements */}
                        <div className="mb-10">
                            <h2 className="text-xl font-semibold mb-4 text-starkhive-purple">
                                Requirements
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                                <li>5+ years of experience with Solidity</li>
                                <li>Experience with Cairo and Starknet</li>
                                <li>Strong understanding of DeFi protocols</li>
                                <li>Security-first mindset</li>
                            </ul>
                        </div>

                        {/* Responsibilities */}
                        <div className="mb-10">
                            <h2 className="text-xl font-semibold mb-4 text-starkhive-purple">
                                Responsibilities
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                                <li>Design and implement smart contracts</li>
                                <li>Conduct internal audits</li>
                                <li>Collaborate with the security team</li>
                                <li>Optimize gas usage</li>
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="mb-10">
                            <h2 className="text-xl font-semibold mb-4 text-starkhive-purple">
                                Benefits
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                                <li>Competitive salary in USDC</li>
                                <li>Flexible working hours</li>
                                <li>Remote-first culture</li>
                                <li>Token incentives</li>
                            </ul>
                        </div>

                        {/* Apply Button */}
                        <div className="flex justify-center mt-12 mb-8">
                            <Button
                                size="lg"
                                className="bg-starkhive-purple hover:bg-starkhive-purple/90 text-white px-8 py-6 text-lg"
                            >
                                Apply Now
                            </Button>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
