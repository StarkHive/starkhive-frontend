import Image from "next/image";
import type React from "react";

export function FeaturesSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-20">
                <h2 className="text-3xl font-inter font-bold text-center mb-16">
                    <span className=" bg-gradient-to-r from-[#FF1CF7] to-[#0900FF] bg-clip-text text-transparent">
                        Why Choose StarkHive?
                    </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <FeatureCard
                        image={
                            <Image
                                src="/overlay.png"
                                alt="Overlay"
                                width={48}
                                height={48}
                                className="w-10 h-10"
                            />
                        }
                        title="Trustless Interactions"
                        description="Smart contracts ensure secure, escrow-based payments and verifiable work history."
                        iconBgColor="bg-purple-900/50"
                        iconTextColor="text-purple-400"
                    />

                    <FeatureCard
                        image={
                            <Image
                                src="/overlay1.png"
                                alt="Overlay"
                                width={48}
                                height={48}
                                className="w-10 h-10"
                            />
                        }
                        title="AI-Powered Matching"
                        description="Find the perfect match with our advanced AI-driven job recommendation system."
                        iconBgColor="bg-orange-900/50"
                        iconTextColor="text-orange-400"
                    />

                    <FeatureCard
                        image={
                            <Image
                                src="/overlay2.png"
                                alt="Overlay"
                                width={48}
                                height={48}
                                className="w-10 h-10"
                            />
                        }
                        title="Global Opportunities"
                        description="Access worldwide opportunities with instant crypto payments and low fees."
                        iconBgColor="bg-blue-900/50"
                        iconTextColor="text-blue-400"
                    />
                </div>
            </div>
            <div className="flex justify-center -mt-10">
                <Image
                    src="/vector.png"
                    alt="vector"
                    width={100}
                    height={100}
                    className="w-[336px]"
                />
            </div>
        </section>
    );
}

interface FeatureCardProps {
    image: React.ReactNode;
    title: string;
    description: string;
    iconBgColor: string;
    iconTextColor: string;
}

function FeatureCard({
    image,
    title,
    description,
    iconBgColor,
    iconTextColor,
}: FeatureCardProps) {
    return (
        <div className="bg-zinc-900/50 p-6 rounded-lg border border-starkhive-border w-[381px] h-[221px]">
            <div
                className={`w-10 h-10 rounded-full ${iconBgColor} flex items-center justify-center mb-4`}
            >
                <div className={iconTextColor}>{image}</div>
            </div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-zinc-400 text-sm">{description}</p>
        </div>
    );
}
