interface StackColumnProps {
    items: { name: string; icon: React.ReactNode }[];
    reverse?: boolean;
}

export default function StackColumn({ items, reverse = false }: StackColumnProps) {
    // Double les items pour le scroll infini
    const duplicatedItems = [...items, ...items];

    return (
        <div className="h-48 overflow-hidden relative">
            {/* Fade top */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#1f1f1f] to-transparent z-10" />

            {/* Scrolling content */}
            <div
                className={`flex flex-col gap-3 ${reverse ? "animate-scroll-v-reverse" : "animate-scroll-v"
                    }`}
            >
                {duplicatedItems.map((item, index) => (
                    <div
                        key={`${item.name}-${index}`}
                        className="flex items-center gap-2.5 px-3 py-2 bg-white/5 border border-white/5 rounded-lg 
              hover:bg-white/10 hover:border-white/10 transition-colors"
                    >
                        <span className="w-5 h-5 text-white/70">{item.icon}</span>
                        <span className="text-sm text-white/80">{item.name}</span>
                    </div>
                ))}
            </div>

            {/* Fade bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#1f1f1f] to-transparent z-10" />
        </div>
    );
}
