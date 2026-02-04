export default function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-3xl md:text-5xl font-bold text-[#f5f5f5]">{title}</h2>
      <p className="text-[#d9885a] font-medium tracking-wide uppercase text-sm">{subtitle}</p>
      <div className="w-20 h-1 bg-gradient-to-r from-[#d9885a] to-[#f2c38f] mx-auto rounded-full" />
    </div>
  );
}
