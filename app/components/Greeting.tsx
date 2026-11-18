
type Props = {
  name: string;
};

export default function Greeting({ name }: Props) {
  return (
    <h2 className="todo">
      Hello, {name}! Welcome to our store.
    </h2>
  );
}
