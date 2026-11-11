import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Page() {
  return (
    <main>
      <Greeting name="Ada" />

      <ProductCard title="Keyboard" price={49} inStock={true} />
      <ProductCard title="Mouse" price={25} inStock={false} />
    </main>
  );
}