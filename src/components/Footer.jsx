export default function Footer() {
  return (
    <footer id="about" className="border-t border-stone-200 bg-white">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold text-stone-900">Trail & Ember</div>
          <p className="mt-2 text-stone-600">Hand-poured in small batches using coconut-soy wax and phthalate-free fragrance oils.</p>
        </div>
        <div>
          <div className="font-semibold text-stone-900">Care</div>
          <ul className="mt-2 space-y-1 text-stone-600">
            <li>Trim wick to 1/4" before each burn</li>
            <li>Let melt pool reach edges</li>
            <li>Never burn more than 4 hours</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-stone-900">Contact</div>
          <ul className="mt-2 space-y-1 text-stone-600">
            <li>hello@trailandember.com</li>
            <li>Portland, OR</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-200 py-4 text-center text-xs text-stone-500">© {new Date().getFullYear()} Trail & Ember. Inspired by our National Parks. Not associated with the National Park Service.</div>
    </footer>
  );
}
