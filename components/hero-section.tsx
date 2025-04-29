import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern bg-black opacity-20 z-0"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-[60px] text-spacing-10 md:text-6xl font-bold mb-4 font-inter">
                    Find the Best{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-starkhive-purple to-starkhive-blue">
                        Web3 Jobs & Talents
                    </span>
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    in One Place
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto mb-10 font-inter text-[20px] font-normal">
                    Connect with top Web3 talent and opportunities on StarkHive
                    - the decentralized job marketplace built on Starknet.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button className="bg-gradient-to-r from-[#FF1CF7] to-[#0900FF] hover:bg-gradient-to-r hover:from-[#FF1CF7]/90 hover:to-[#0900FF]/90 text-white rounded-md px-6 py-2">
                        Find Jobs <span className="ml-2">→</span>
                    </Button>
                    <div className="inline-block p-[1px] bg-gradient-to-b from-[#FF1CF7] to-[#0900FF] rounded-md">
                        <Button
                            variant="default" // switch off the default outline
                            className="bg-black text-white rounded-md px-6 py-2"
                        >
                            Hire Talent <span className="ml-2">→</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-16">
                <div className="relative ">
                    <Image
                        src="/glass.png"
                        alt="Geometric shape"
                        width={549}
                        height={542}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
