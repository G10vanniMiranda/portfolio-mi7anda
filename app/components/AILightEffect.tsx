export default function AILightEffect() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_65%)]" />
      <div className="absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-sky-500/15 blur-[140px]" />
      <div className="absolute -bottom-48 -right-32 h-[36rem] w-[36rem] rounded-full bg-blue-500/20 blur-[150px]" />
    </div>
  );
}
