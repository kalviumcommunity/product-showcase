type Props = {
  amount: number;
};

export default function PriceTag({ amount }: Props) {
  return (
    <div>
      <span>${amount}</span>
    </div>
  );
}