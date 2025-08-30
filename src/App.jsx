import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import GiftOptions from './components/GiftOptions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="candles" className="container mx-auto px-4 py-16 sm:py-24">
          <ProductGrid />
        </section>
        <section id="gifting" className="bg-white/60 border-t border-stone-200">
          <div className="container mx-auto px-4 py-16 sm:py-24">
            <GiftOptions />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
