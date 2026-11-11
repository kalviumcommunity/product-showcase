import Greeting from './components/Greeting';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main style={{ padding: '24px' }}>
      <Greeting name="Alex" />
      <ProductCard title="Wireless Keyboard" price={49} inStock={true} />
      <ProductCard title="Gaming Mouse" price={29} inStock={false} />
    </main>
  );
}
