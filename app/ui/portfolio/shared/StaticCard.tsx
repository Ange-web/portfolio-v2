interface StaticCardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function StaticCard({ title, children, className = "" }: StaticCardProps) {
    return (
        <div
            className={`bg-[#1f1f1f] border border-white/5 rounded-2xl p-5 hover:border-white/10 
        transition-colors duration-300 ${className}`}
        >
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
                {title}
            </h3>
            {children}
        </div>
    );
}
