"use client";

import { Search } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function TalentSearch() {
    const [availableOnly, setAvailableOnly] = useState(false);

    return (
        <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search talent by skill, name, or expertise..."
                        className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md py-3 pl-10 pr-4 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-starkhive-purple"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <Switch
                        id="available-only"
                        checked={availableOnly}
                        onCheckedChange={setAvailableOnly}
                        className="data-[state=checked]:bg-starkhive-purple"
                    />
                    <Label htmlFor="available-only" className="text-white">
                        Available Only
                    </Label>
                </div>
            </div>
        </div>
    );
}
