"use client";

import { useState } from "react";

export function TalentFilters() {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const filters = [
        "Smart Contract",
        "Frontend",
        "Backend",
        "Full Stack",
        "Solidity",
        "Cairo",
        "Rust",
        "React",
        "Node.js",
        "DeFi",
        "NFT",
        "Security",
        "Auditor",
        "UI/UX",
        "Product Manager",
        "Community Manager",
        "Technical Writer",
        "Blockchain Architect",
    ];

    const toggleFilter = (filter: string) => {
        if (activeFilter === filter) {
            setActiveFilter(null);
        } else {
            setActiveFilter(filter);
        }
    };

    return (
        <div className="mb-10">
            <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => toggleFilter(filter)}
                        className={`px-4 py-2 rounded-md text-sm transition-colors ${
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
