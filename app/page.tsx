
import Greeting from "./components/Greeting";
import PriceTag from "./components/PriceTag";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <Greeting name="GB" />

      <h2>Our Products</h2>

      <ProductCard
        title="Keyboard"
        price={49}
        inStock={true}
      />

      <ProductCard
        title="Mouse"
        price={29}
        inStock={false}
      />

      <PriceTag amount={99} />
    </main>
  );
}
