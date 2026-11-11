type Props = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({ title, price, inStock }: Props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>Status: {inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
}
