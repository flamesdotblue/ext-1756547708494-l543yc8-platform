export default function Hero() {
  const bg = "url('https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=2000&auto=format&fit=crop')"; // pine forest
  return (
    <div
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center"
      style={{ backgroundImage: bg, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="relative container mx-auto px-4 py-24 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">Hand‑poured candles inspired by America’s National Parks</h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/90">Small-batch soy wax candles that capture the wild—pine groves at sunrise, sandstone after rain, alpine air, and ocean spray. Clean burn. Rich scent stories. Thoughtful gifting.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#candles" className="rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 text-sm font-medium">Shop Candles</a>
            <a href="#gifting" className="rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white px-5 py-3 text-sm font-medium">Gifting Options</a>
          </div>
        </div>
      </div>
    </div>
  );
}
