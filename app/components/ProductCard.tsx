import PriceTag from "./PriceTag";

type Props = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({ title, price, inStock }: Props) {
  return (
    <div className="border p-4 rounded-md my-2">
      <h3>{title}</h3>
      <PriceTag amount={price} />
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}