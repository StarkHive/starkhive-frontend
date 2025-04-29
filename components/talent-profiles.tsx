import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MapPin, Star, Clock } from "lucide-react";

interface TalentProfile {
    id: number;
    name: string;
    title: string;
    location: string;
    rate: string;
    availability: string;
    rating: number;
    skills: string[];
    image: string;
}

export function TalentProfiles() {
    const profiles: TalentProfile[] = [
        {
            id: 1,
            name: "Alex Johnson",
            title: "Smart Contract Developer",
            location: "Remote",
            rate: "120-150 USDC/hr",
            availability: "Available now",
            rating: 4.9,
            skills: ["Solidity", "Cairo", "DeFi", "Security"],
            image: "/diverse-group-city.png",
        },
        {
            id: 2,
            name: "Sarah Chen",
            title: "Blockchain Architect",
            location: "Remote",
            rate: "150-180 USDC/hr",
            availability: "Available in 2 weeks",
            rating: 4.8,
            skills: ["Solidity", "Rust", "zkSNARKs", "Layer 2"],
            image: "/diverse-group-city.png",
        },
        {
            id: 3,
            name: "Michael Rodriguez",
            title: "Full Stack Web3 Developer",
            location: "Remote",
            rate: "100-130 USDC/hr",
            availability: "Available now",
            rating: 4.7,
            skills: ["React", "Node.js", "ethers.js", "Solidity"],
            image: "/diverse-group-city.png",
        },
        {
            id: 4,
            name: "Emma Wilson",
            title: "Smart Contract Auditor",
            location: "Remote",
            rate: "140-170 USDC/hr",
            availability: "Available in 1 week",
            rating: 5.0,
            skills: ["Security", "Solidity", "Auditing", "DeFi"],
            image: "/diverse-group-city.png",
        },
        {
            id: 5,
            name: "David Kim",
            title: "Frontend Web3 Developer",
            location: "Remote",
            rate: "90-120 USDC/hr",
            availability: "Available now",
            rating: 4.6,
            skills: ["React", "TypeScript", "Web3.js", "UI/UX"],
            image: "/diverse-group-city.png",
        },
    ];

    return (
        <div className="space-y-4">
            {profiles.map((profile) => (
                <TalentCard key={profile.id} profile={profile} />
            ))}
        </div>
    );
}

function TalentCard({ profile }: { profile: TalentProfile }) {
    return (
        <div className="border border-starkhive-purple/30 rounded-lg p-6 bg-black/40 hover:bg-black/60 transition-colors">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-starkhive-purple/30">
                        <Image
                            src={profile.image || "/placeholder.svg"}
                            alt={profile.name}
                            width={96}
                            height={96}
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="flex-grow">
                    <div className="flex flex-col md:flex-row justify-between mb-3">
                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                {profile.name}
                            </h3>
                            <p className="text-zinc-400">{profile.title}</p>
                        </div>
                        <div className="flex items-center mt-2 md:mt-0">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span className="text-white">{profile.rating}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-zinc-400 mb-4">
                        <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {profile.location}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {profile.availability}
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-starkhive-purple font-medium">
                                {profile.rate}
                            </span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                            {profile.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button
                            variant="outline"
                            className="border-starkhive-purple text-starkhive-purple hover:bg-starkhive-purple/10 mr-2"
                        >
                            View Profile
                        </Button>
                        <Button className="bg-starkhive-purple hover:bg-starkhive-purple/90 text-white">
                            Contact
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
