export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group p-8 rounded-3xl bg-[#2a2a2a]/50 border border-white/5 hover:border-[#d9885a]/30 hover:bg-[#2a2a2a]/80 transition-all duration-300 hover:-translate-y-2">
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#f5f5f5] mb-3 group-hover:text-[#d9885a] transition-colors">{title}</h3>
      <p className="text-[#c9c9c9] leading-relaxed">{description}</p>
    </div>
  );
}
