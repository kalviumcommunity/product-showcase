// TODO: product title show price + stock status
type ProductCardProps = {
  title: string;
  price: number;
  inStock?: boolean;
};

export default function ProductCard({ title, price, inStock = true }: ProductCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h3>{title}</h3>
      <p>{price.toFixed(2)}</p>
      <p>{inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
    </div>
  );
}