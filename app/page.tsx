
import Greeting from "./components/Greeting";
import PriceTag from "./components/PriceTag";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>My Product Store</h1>

      <Greeting name="Reka" />

      <PriceTag amount={49} />

      <ProductCard
        title="Keyboard"
        price={49}
        inStock={true}
      />

      <ProductCard
        title="Wireless Mouse"
        price={29}
        inStock={false}
      />
    </main>
  );
}
