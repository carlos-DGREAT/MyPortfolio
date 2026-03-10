export default function LoadingScreen({ phase = "enter" }) {
  const isExiting = phase === "exit";

  return (
    <div
      className={`fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-white transition-all duration-500 ${
        isExiting ? "opacity-0 scale-[1.01]" : "opacity-100 scale-100"
      }`}
      role="status"
      aria-live="polite"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="select-none tracking-tight leading-none text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[8vw] [font-family:Montserrat] [font-weight:900] text-[#932929]/10">
          CARLOS.DGREAT
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(ellipse_at_center,rgba(147,41,41,0.16),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(120deg,rgba(147,41,41,0)_35%,rgba(147,41,41,0.22)_50%,rgba(147,41,41,0)_65%)] [background-size:240%_100%] animate-loader-sheen"
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 rounded-full animate-loader-spin [background:conic-gradient(from_180deg,rgba(147,41,41,0.0),rgba(147,41,41,0.92),rgba(147,41,41,0.12),rgba(147,41,41,0.0))]" />
          <div className="absolute inset-[5px] rounded-full bg-white ring-1 ring-black/10 flex items-center justify-center">
            <img
              src="/logo-5.png"
              alt="Logo"
              className="h-14 w-14 object-contain opacity-95"
            />
          </div>
        </div>

        <div className="mt-6 text-xs sm:text-sm text-black/60 tracking-widest uppercase animate-pulse">
          Loading
        </div>
      </div>
    </div>
  );
}
