type Props = {
  name: string;
};

export default function Greeting({ name }: Props) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
    </div>
  );
}