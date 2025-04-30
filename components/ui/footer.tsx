import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black py-16">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Logo and description */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6">
                                <Image
                                    src="/SVG.png"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <span className="font-bold text-xl text-white">
                                StarkHive
                            </span>
                        </div>
                        <p className="text-zinc-400 text-sm max-w-xs">
                            The decentralized marketplace for Web3 talent and
                            opportunities.
                        </p>
                    </div>

                    {/* Platform links */}
                    <div>
                        <h3 className="font-semibold text-white mb-6">
                            Platform
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/jobs"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    Browse Jobs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/talent"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    Find Talent
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/how-it-works"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    How it Works
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal links */}
                    <div>
                        <h3 className="font-semibold text-white mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms-of-service"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cookie-policy"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 text-center text-zinc-500 text-sm">
                    © 2025 StarkHive. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
