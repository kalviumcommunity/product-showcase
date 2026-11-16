import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <Greeting name="Ada" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductCard
          title="Mechanical Keyboard"
          price={99}
          inStock={true}
        />
        <ProductCard
          title="Wireless Mouse"
          price={49}
          inStock={false}
        />
      </div>
    </main>
  );
}