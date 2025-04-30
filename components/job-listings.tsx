import { Button } from "@/components/ui/button";

export function JobListings() {
    const jobs = [
        {
            title: "Smart Contract Developer",
            company: "DeFi Protocol",
            type: "Full-time",
            salary: "120-150k USDC",
            description:
                "Looking for an experienced Solidity developer to build and audit smart contracts for our DeFi protocol.",
        },
        {
            title: "Frontend Web3 Engineer",
            company: "NFT Marketplace",
            type: "Contract",
            salary: "80-100k USDC",
            description:
                "Seeking a frontend developer with experience in React, ethers.js, and Web3 integration.",
        },
        {
            title: "Blockchain Security Researcher",
            company: "Security DAO",
            type: "Full-time",
            salary: "130-160k USDC",
            description:
                "Join our team to research and improve blockchain security measures across multiple protocols.",
        },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 text-starkhive-purple">
                    Trending Web3 Jobs
                </h2>

                <div className="grid gap-6">
                    {jobs.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface JobCardProps {
    job: {
        title: string;
        company: string;
        type: string;
        salary: string;
        description: string;
    };
}

function JobCard({ job }: JobCardProps) {
    return (
        <div className="border border-starkhive-border rounded-lg p-6 bg-starkhive-cardBg">
            <div className="flex flex-wrap justify-between mb-4">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <Button className="bg-starkhive-purple hover:bg-starkhive-purple/90 text-white rounded-md px-4 py-1 text-sm">
                    Apply Now
                </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-zinc-400 mb-4">
                <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    {job.company}
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    {job.type}
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    {job.salary}
                </div>
            </div>
            <p className="text-sm text-zinc-400">{job.description}</p>
        </div>
    );
}
