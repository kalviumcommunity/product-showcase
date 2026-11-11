import PriceTag from "./PriceTag";

type Props = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({ title, price, inStock }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", margin: "10px 0" }}>
      <h3>{title}</h3>
      <p>Price: <PriceTag amount={price} /></p>
      <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}
