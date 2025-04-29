import Image from "next/image";

export function HowItWorks() {
    return (
        <section className="py-20 relative bg-black overflow-hidden">
            <div className="container mx-auto px-20">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-3/5">
                        <h2 className="text-4xl font-bold mb-2">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-starkhive-purple to-starkhive-blue">
                                How It Works
                            </span>
                        </h2>
                        <p className="text-zinc-400 mb-12">
                            Getting Started is Easy!
                        </p>

                        <div className="relative">
                            {/* Vertical timeline line */}
                            <div className="absolute left-[22px] top-0 bottom-0 w-1 bg-zinc-800 rounded-full"></div>

                            {/* Step 1 */}
                            <div className="relative mb-12 pl-16">
                                <div className="absolute left-0 top-0 w-11 h-11 rounded-full bg-zinc-800 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-full bg-starkhive-purple"></div>
                                </div>
                                <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 relative">
                                    <span className="absolute right-6 top-6 text-8xl font-bold text-zinc-800">
                                        1
                                    </span>
                                    <h3 className="text-2xl font-bold mb-2 text-white">
                                        Create Your Profile
                                    </h3>
                                    <p className="text-zinc-400 relative z-10">
                                        Set up your decentralized resume and
                                        connect your wallet.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative mb-12 pl-16">
                                <div className="absolute left-0 top-0 w-11 h-11 rounded-full bg-zinc-800 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-full bg-starkhive-purple"></div>
                                </div>
                                <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 relative">
                                    <span className="absolute right-6 top-6 text-8xl font-bold text-zinc-800">
                                        2
                                    </span>
                                    <h3 className="text-2xl font-bold mb-2 text-white">
                                        Find Opportunities
                                    </h3>
                                    <p className="text-zinc-400 relative z-10">
                                        Browse and apply for jobs or post
                                        opportunities for talent.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative pl-16">
                                <div className="absolute left-0 top-0 w-11 h-11 rounded-full bg-zinc-800 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-full bg-starkhive-purple"></div>
                                </div>
                                <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 relative">
                                    <span className="absolute right-6 top-6 text-8xl font-bold text-zinc-800">
                                        3
                                    </span>
                                    <h3 className="text-2xl font-bold mb-2 text-white">
                                        Get Paid Securely
                                    </h3>
                                    <p className="text-zinc-400 relative z-10">
                                        Receive payments in crypto through smart
                                        contracts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center text-center items-center">
                        <Image
                            src="/blob.png"
                            alt="Iridescent 3D blob"
                            width={400}
                            height={400}
                            className="object-contain w-[621px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
