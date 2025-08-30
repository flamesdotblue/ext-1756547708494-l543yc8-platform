import { Gift, NotebookPen } from 'lucide-react';

export default function GiftOptions() {
  const options = [
    {
      id: 'wrap',
      title: 'Gift Wrap',
      price: 5,
      desc: 'Recycled kraft wrap with evergreen twine and wax seal.',
    },
    {
      id: 'box',
      title: 'Keepsake Box',
      price: 12,
      desc: 'Rigid box with letterpress sleeve. Perfect for sets.',
    },
    {
      id: 'note',
      title: 'Handwritten Note',
      price: 0,
      desc: 'Complimentary card with your custom message.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 flex items-center gap-2">
            <Gift className="h-6 w-6 text-emerald-700" /> Gifting made easy
          </h2>
          <p className="mt-2 text-stone-700">Elevate your present with eco-conscious packaging and a thoughtful note. Add gifting at checkout and we’ll handle the rest.</p>
        </div>
        <a href="#candles" className="rounded-full bg-stone-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-stone-800">Build a gift</a>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {options.map((o) => (
          <div key={o.id} className="rounded-2xl border border-stone-200 bg-white shadow-sm p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-stone-900">{o.title}</h3>
              <div className="text-stone-900 text-sm">{o.price === 0 ? 'Free' : `$${o.price}`}</div>
            </div>
            <p className="mt-2 text-sm text-stone-600">{o.desc}</p>
            {o.id === 'note' && (
              <div className="mt-4">
                <label htmlFor="gift-note" className="text-xs uppercase tracking-wide text-stone-500">Optional message</label>
                <div className="mt-1 flex items-center gap-2 rounded-xl border border-stone-300 focus-within:ring-2 focus-within:ring-emerald-200 px-3 py-2 bg-white">
                  <NotebookPen className="h-4 w-4 text-stone-500" />
                  <input id="gift-note" placeholder="Write a short note…" className="w-full outline-none bg-transparent text-sm" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white">
          <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1600&auto=format&fit=crop" alt="Eco-friendly gift wrap" className="h-64 w-full object-cover" loading="lazy" />
          <div className="p-5">
            <h3 className="font-semibold text-stone-900">Eco-friendly details</h3>
            <p className="mt-2 text-sm text-stone-600">We use recycled paper, soy-based inks, and compostable fill for a planet-first unboxing.</p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop" alt="Candle and card on a desk" className="h-64 w-full object-cover" loading="lazy" />
          <div className="p-5">
            <h3 className="font-semibold text-stone-900">Send directly</h3>
            <p className="mt-2 text-sm text-stone-600">Ship to your recipient with prices hidden and a personalized card tucked inside.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
