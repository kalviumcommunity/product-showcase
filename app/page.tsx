
import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>My Product Store</h1>

      <Greeting name="Dattathreya" />

      <h2>Our Products</h2>

      <ProductCard
        title="Keyboard"
        price={999}
        inStock={true}
      />

      <ProductCard
        title="Wireless Mouse"
        price={499}
        inStock={false}
      />
    </main>
  );
}
