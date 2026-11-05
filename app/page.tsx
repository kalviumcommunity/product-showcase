import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <Greeting name="Alex" />

      <ProductCard title="Wireless Headphones" price={99} inStock={true} />
      <ProductCard title="Mechanical Keyboard" price={149} inStock={false} />
    </main>
  );
}
