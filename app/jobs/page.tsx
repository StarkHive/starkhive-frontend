import { JobFilters } from "@/components/job-filters";
import { JobListingsRedesign } from "@/components/job-listings-redesign";
// import { JobListings } from "@/components/job-listings-redesign";
import { JobSearch } from "@/components/job-search";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/ui/footer";

export default function JobsPage() {
    return (
        <div className="min-h-screen bg-starkhive-background text-white">
            <div className="bg-grid-pattern bg-black ">
                <Navbar />
                <main className="container mx-auto px-20 py-16">
                    <div className="text-center mb-12  flex flex-col items-center mx-auto">
                        <h2 className="text-3xl w-[328px] font-inter font-bold text-center mb-4">
                            <span className=" bg-gradient-to-r from-[#FF1CF7] to-[#0900FF] bg-clip-text text-transparent">
                                Web3 Job Opportunities
                            </span>
                        </h2>
                        <p className="text-zinc-400 text-[18px] font-inter">
                            Find your next role in the decentralized economy
                        </p>
                    </div>

                    <JobSearch />
                    <JobFilters />
                    <JobListingsRedesign />
                </main>
            </div>
            <Footer />
        </div>
    );
}
