import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="p-6">
      <Greeting name="Alex" />
      
      <div className="mt-4">
        <ProductCard title="Wireless Mouse" price={29} inStock={true} />
        <ProductCard title="Mechanical Keyboard" price={89} inStock={false} />
      </div>
    </main>
  );
}