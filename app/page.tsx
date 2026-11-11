import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>My Product Store</h1>
      
      <Greeting name="Alex" />

      <div style={{ marginTop: "20px" }}>
        <ProductCard title="Wireless Mouse" price={29.99} inStock={true} />
        <ProductCard title="Mechanical Keyboard" price={89.99} inStock={false} />
      </div>
    </main>
  );
}