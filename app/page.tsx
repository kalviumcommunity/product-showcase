import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="p-8">
      <Greeting name="Pradhyumna" />

      <div className="grid grid-cols-2 gap-4 mt-6">
        <ProductCard title="Wireless Mouse" price={799} />
        <ProductCard title="Mechanical Keyboard" price={2499} inStock={false} />
      </div>
    </main>
  );
}