// TODO 1: Declare a props type with an `amount: number` field.
type PriceTagProps = {
  amount: number;
};

// TODO 2: Give this component a typed, destructured paramater: ({ amount }: Props)
export default function PriceTag({ amount }: PriceTagProps) {
  // TODO 3: Render the amount inside the JSX with curly braces
  return <span className="todo">${amount}</span>;
}