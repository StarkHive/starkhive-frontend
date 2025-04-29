import { CTASection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/feautures-section";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { JobListingsRedesign } from "@/components/job-listings-redesign";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/ui/footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-grid-pattern bg-black text-white px-20">
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <HowItWorks />
            <JobListingsRedesign />
            <CTASection />
            <Footer />
        </div>
    );
}
