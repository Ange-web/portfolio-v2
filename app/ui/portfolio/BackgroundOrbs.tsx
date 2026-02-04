export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#d9885a]/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#f2c38f]/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#d9885a]/10 rounded-full blur-[120px] animate-pulse delay-700" />
    </div>
  );
}
