// TODO 1: Declare a props type with:
//           title: string; price: number; inStock: boolean;
// TODO 2: Give this component a typed, destructured parameter:
//           ({ title, price, inStock }: Props)
// TODO 3: Render the props inside the JSX with curly braces.
//         Tip: reuse your <PriceTag /> for the price, and show
//         "In stock" / "Sold out" based on inStock.
type prop={title: string; price: number; inStock: boolean;}
export default function ProductCard({ title, price, inStock }: props) {
  return (
    <div className="card">
      <h3 className="todo">TODO: product {title}</h3>
      <p className="todo">show {price} + {inStock ? "In stock":"Sold out"}</p>
    </div>
  );
}
