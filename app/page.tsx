import { CTASection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/feautures-section";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { JobListingsRedesign } from "@/components/job-listings-redesign";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen   text-white px-20">
            <Navbar />
            {/* Corner grids */}
            <Image
                src="/grid.png"
                alt="Grid pattern"
                width={325}
                height={345}
                className="absolute top-[120px] left-[-20px] object-contain opacity-80 pointer-events-none z-0 w-60 h-72 sm:w-96 sm:h-128 md:w-[325px] md:h-[345px]"
            />
            <Image
                src="/grid.png"
                alt="Grid pattern"
                width={325}
                height={345}
                className="absolute top-[120px] right-[-20px] object-contain opacity-80 pointer-events-none z-0  w-60 h-72 sm:w-96 sm:h-128 md:w-[325px] md:h-[345px]"
            />
            <Image
                src="/grid.png"
                alt="Grid pattern"
                width={325}
                height={345}
                className="absolute bottom-0 left-[-20px] top-[653px] object-contain opacity-80 pointer-events-none z-0  w-60 h-72 sm:w-96 sm:h-128 md:w-[325px] md:h-[345px]"
            />
            <Image
                src="/grid.png"
                alt="Grid pattern"
                width={325}
                height={345}
                className="absolute bottom-0 right-[-20px] top-[653px] object-contain  pointer-events-none opacity-80  w-60 h-72 sm:w-96 sm:h-128 md:w-[325px] md:h-[345px]"
            />
            <HeroSection />
            <FeaturesSection />
            <HowItWorks />
            <JobListingsRedesign />
            <CTASection />
            <Footer />
        </div>
    );
}
