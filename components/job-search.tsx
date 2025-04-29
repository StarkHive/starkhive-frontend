"use client";

import { Search } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function JobSearch() {
    const [remoteOnly, setRemoteOnly] = useState(false);

    return (
        <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex justify-center items-center w-full gap-3">
                    <div className="relative items-center">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search jobs by title, company, or keywords..."
                            className="w-full md:w-[672px] bg-zinc-800/50 border border-zinc-700 rounded-md py-3 pl-10 pr-4 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-starkhive-purple"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="remote-only"
                            checked={remoteOnly}
                            onCheckedChange={setRemoteOnly}
                            className="data-[state=checked]:bg-starkhive-purple"
                        />
                        <Label htmlFor="remote-only" className="text-white">
                            Only Remote
                        </Label>
                    </div>
                </div>
            </div>
        </div>
    );
}
