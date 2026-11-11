type Props = {
  name: string;
};

export default function Greeting({ name }: Props) {
  return <h2 className="todo">Hello, {name}!</h2>;
}