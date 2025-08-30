import { Star } from 'lucide-react';

const products = [
  {
    id: 'yosemite',
    name: 'Yosemite Grove',
    price: 28,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1600&auto=format&fit=crop',
    notes: ['Giant sequoia', 'Cedarwood', 'Moss'],
    blurb: 'Cathedral groves and cool granite mist.'
  },
  {
    id: 'zion',
    name: 'Zion Canyons',
    price: 28,
    image: 'https://images.unsplash.com/photo-1455155074700-42f2a4f10d1a?q=80&w=1600&auto=format&fit=crop',
    notes: ['Desert sage', 'Juniper', 'Red sandstone'],
    blurb: 'Sun-warmed cliffs after desert rain.'
  },
  {
    id: 'yellowstone',
    name: 'Yellowstone Basin',
    price: 28,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    notes: ['Lodgepole pine', 'Mineral springs', 'Wild herbs'],
    blurb: 'Evergreen trails and mineral air.'
  },
  {
    id: 'glacier',
    name: 'Glacier Alpine',
    price: 28,
    image: 'https://images.unsplash.com/photo-1508264165352-258a6c5fea0b?q=80&w=1600&auto=format&fit=crop',
    notes: ['Fir needle', 'Frosted air', 'White amber'],
    blurb: 'Crisp summits and luminous snowfields.'
  },
  {
    id: 'acadia',
    name: 'Acadia Shore',
    price: 28,
    image: 'https://images.unsplash.com/photo-1501687040765-65b51d55f0c3?q=80&w=1600&auto=format&fit=crop',
    notes: ['Sea salt', 'Lichen', 'Blue spruce'],
    blurb: 'Rocky tidepools and ocean spray.'
  },
  {
    id: 'grand-canyon',
    name: 'Grand Canyon Dusk',
    price: 28,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
    notes: ['Cedar smoke', 'Vetiver', 'Desert bloom'],
    blurb: 'Amber light over ancient stone.'
  },
];

function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-stone-900">{product.name}</h3>
            <p className="text-sm text-stone-600">{product.blurb}</p>
          </div>
          <div className="text-stone-900 font-medium">${product.price}</div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.notes.map((n) => (
            <span key={n} className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 px-2.5 py-1 text-xs">
              <Star className="h-3 w-3 fill-emerald-500 text-emerald-500" />
              {n}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2">
          <button className="flex-1 rounded-full bg-stone-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-stone-800">Add to cart</button>
          <button className="rounded-full border border-stone-300 px-4 py-2.5 text-sm hover:bg-stone-100">Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <div>
      <div className="max-w-2xl mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Signature Park Collection</h2>
        <p className="mt-2 text-stone-600">Explore nature-forward scent stories, crafted with coconut-soy wax and cotton wicks for a clean, even burn.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />)
        )}
      </div>
    </div>
  );
}
