interface MarqueeProps {
    items: { name: string; icon: React.ReactNode }[];
}

export default function Marquee({ items }: MarqueeProps) {
    // Triple pour assurer la continuité
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div className="relative overflow-hidden py-4 group">
            {/* Fade gauche */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#101010] to-transparent z-10" />

            {/* Marquee content */}
            <div className="flex gap-6 animate-marquee">
                {duplicatedItems.map((item, index) => (
                    <div
                        key={`${item.name}-${index}`}
                        className="flex items-center gap-2.5 px-4 py-2.5 bg-white/5 border border-white/5 rounded-full 
              hover:bg-white/10 hover:border-white/10 transition-colors flex-shrink-0"
                    >
                        <span className="w-5 h-5 text-white/70">{item.icon}</span>
                        <span className="text-sm font-medium text-white/80">{item.name}</span>
                    </div>
                ))}
            </div>

            {/* Fade droite */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#101010] to-transparent z-10" />
        </div>
    );
}
