import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Page() {
  return (
    <main className="store">
      <h1>My Product Store</h1>

       <Greeting name ="hello and welcome" />
       <ProductCard title = "Keyboard" price = {25} inStock = {true} />
       <ProductCard title = "Mouse" price = {20} inStock = {true} />
       
    </main>
  );
}
