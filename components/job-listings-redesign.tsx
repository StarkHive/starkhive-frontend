import Link from "next/link";
import { Building, Clock, DollarSign } from "lucide-react";

export function JobListingsRedesign() {
    const jobs = [
        {
            id: 1,
            title: "Smart Contract Developer",
            company: "DeFi Protocol X",
            type: "Full-time",
            salary: "120-150K USDC",
            description:
                "Looking for an experienced Solidity developer to build and audit smart contracts for our DeFi protocol.",
        },
        {
            id: 2,
            title: "Frontend Web3 Engineer",
            company: "NFT Marketplace Y",
            type: "Contract",
            salary: "80-100K USDC",
            description:
                "Seeking a frontend developer with experience in React, ethers.js, and Web3 integration.",
        },
        {
            id: 3,
            title: "Blockchain Security Researcher",
            company: "Security DAO",
            type: "Full-time",
            salary: "130-160K USDC",
            description:
                "Join our team to research and improve blockchain security measures across multiple protocols.",
        },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-inter font-bold text-center mb-10">
                    <span className=" bg-gradient-to-r from-[#FF1CF7] to-[#0900FF] bg-clip-text text-transparent">
                        Trending Web3 Jobs
                    </span>
                </h2>

                <div className="flex flex-col gap-6">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="border border-[#0900FF] rounded-lg p-6 bg-[#0f0b26] hover:bg-[#151033] transition-colors"
                        >
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">
                                    {job.title}
                                </h3>
                                <Link
                                    href={`/jobs/${job.id}`}
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-gradient-to-r from-[#FF1CF7] to-[#0900FF] hover:bg-gradient-to-r hover:from-[#FF1CF7]/90 hover:to-[#0900FF]/90 text-white px-4 py-2 md:w-auto w-full"
                                >
                                    Apply Now
                                </Link>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
                                <div className="flex items-center gap-1">
                                    <Building className="h-4 w-4" />
                                    {job.company}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {job.type}
                                </div>
                                <div className="flex items-center gap-1">
                                    <DollarSign className="h-4 w-4" />
                                    {job.salary}
                                </div>
                            </div>

                            <p className="text-sm text-zinc-400">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
