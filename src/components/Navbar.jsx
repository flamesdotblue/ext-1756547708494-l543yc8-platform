import { ShoppingCart, Leaf, Gift } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-stone-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2 group">
          <Leaf className="h-6 w-6 text-emerald-700 group-hover:scale-110 transition-transform" />
          <span className="font-semibold tracking-tight text-stone-900">Trail & Ember</span>
        </a>
        <nav className="hidden sm:flex items-center gap-8 text-sm">
          <a href="#candles" className="hover:text-stone-700">Candles</a>
          <a href="#gifting" className="hover:text-stone-700 flex items-center gap-1">
            <Gift className="h-4 w-4" /> Gifting
          </a>
          <a href="#about" className="hover:text-stone-700">About</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-3 py-1.5 text-sm hover:bg-stone-100">
          <ShoppingCart className="h-4 w-4" />
          Cart
        </button>
      </div>
    </header>
  );
}
