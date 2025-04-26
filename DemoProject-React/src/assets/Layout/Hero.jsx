export default function Hero() {
    return (
      <section className="min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center text-white px-4">
        <img src="/me.jpg" alt="Adam Evans" className="w-full rounded-full shadow-lg mb-6" />
        <h1 className="text-4xl font-bold mb-2">Adam Evans</h1>
        <p className="text-lg text-slate-300">Full-Stack Developer | Systems Architect</p>
      </section>
    );
  }