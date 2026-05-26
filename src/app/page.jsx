export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center py-24 bg-cream gap-4 px-4">
      <p className="text-sm tracking-widest text-saffron uppercase font-body">
        Sacred Ancestral Services
      </p>
      <h1 className="text-5xl md:text-7xl font-semibold text-navy text-center leading-tight font-heading">
        Pitra Paksh Portal
      </h1>
      <p className="text-lg text-sky text-center max-w-md font-body">
        Connecting devotees with authentic Pind Daan & Shradh ceremonies at sacred sites across India.
      </p>
      <button className="mt-4 px-8 py-3 bg-saffron text-white rounded-[--radius-btn] text-base tracking-wide hover:bg-maroon transition-colors font-body">
        Book a Ritual
      </button>
    </main>
  );
}
