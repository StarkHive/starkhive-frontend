import Link from "next/link";
import Image from "next/image";

export function CTASection() {
    return (
        <section className="py-16">
            <div className="container mx-auto">
                <div className="rounded-3xl overflow-hidden relative">
                    {/* Gradient background */}
                    <div className="bg-gradient-to-r from-[#ff00d0] to-[#0900ff] p-12 md:p-16 relative">
                        <div className="flex flex-col md:flex-row">
                            {/* Left content */}
                            <div className="md:w-1/2 z-10 mb-10 md:mb-0">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Ready to Get Started?
                                </h2>
                                <p className="text-white text-lg mb-8 max-w-md">
                                    Join the future of work today and become
                                    part of the growing Web3 talent ecosystem.
                                </p>
                                <Link
                                    href="/create-profile"
                                    className="inline-flex items-center bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-zinc-900 transition-colors text-[14px]"
                                >
                                    Create Your Profile
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </div>

                            {/* Right content - World map with profile images */}
                            <div className="md:w-1/2 relative min-h-[300px]">
                                {/* Dotted world map */}

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                        src="/dotted-world-outline.png"
                                        alt="World map"
                                        width={800}
                                        height={500}
                                        className="w-[707.71px] h-[344px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
