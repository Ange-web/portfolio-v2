"use client";

import { useState } from "react";

interface TechIconProps {
    name: string;
    icon: React.ReactNode;
    color?: string;
}

export default function TechIcon({ name, icon, color = "text-white" }: TechIconProps) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {/* Icon */}
            <div
                className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center 
          hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-200 cursor-default ${color}`}
            >
                {icon}
            </div>

            {/* Tooltip */}
            <div
                className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#2a2a2a] border border-white/10 
          rounded-lg text-xs font-medium text-white whitespace-nowrap z-50 pointer-events-none
          transition-all duration-200 ${showTooltip
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
            >
                {name}
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#2a2a2a]" />
            </div>
        </div>
    );
}
