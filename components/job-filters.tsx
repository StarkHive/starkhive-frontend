"use client";

import { useState } from "react";

export function JobFilters() {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const filters = [
        "Analyst",
        "Backend",
        "Blockcain",
        "Community Manager",
        "Cryptography",
        "CTO",
        "Customer Service",
        "Data Science",
        "Design",
        "Devops",
        "Entry Level",
        "Frontend",
        "Full stack",
        "Gaming",
        "Intern",
        "Java",
        "Marketing",
        "Mobile",
        "Non tech",
        "NFT",
        "Project Manager",
        "Smart contract",
        "Solana",
    ];

    const toggleFilter = (filter: string) => {
        if (activeFilter === filter) {
            setActiveFilter(null);
        } else {
            setActiveFilter(filter);
        }
    };

    return (
        <div className="">
            <div className="flex flex-wrap gap-2 px-6 items-center justify-center">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => toggleFilter(filter)}
                        className={`px-4 py-2 rounded-md text-14 md:text-[20px] transition-colors ${
                            activeFilter === filter
                                ? "bg-starkhive-purple text-white"
                                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
}
