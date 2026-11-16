// TODO 1: Declare a props type with:
//           title: string; price: number; inStock: boolean;
// TODO 2: Give this component a typed, destructured parameter:
//           ({ title, price, inStock }: Props)
// TODO 3: Render the props inside the JSX with curly braces.
//         Tip: reuse your <PriceTag /> for the price, and show
//         "In stock" / "Sold out" based on inStock.

import PriceTag from "./PriceTag";

type Props = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({ title, price, inStock }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <PriceTag amount={price} />
      </div>
      <div className="mt-4">
        {inStock ? (
          <span className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded">
            In Stock
          </span>
        ) : (
          <span className="text-sm font-medium text-red-700 bg-red-100 px-2 py-1 rounded">
            Out of Stock
          </span>
        )}
      </div>
    </div>
  );
}
