// TODO: greet someone by name
type GreetingProps = {
  name: string;
};

export default function Greeting({ name }: GreetingProps) {
  return <h1>Hello, {name}! Welcome to my store.</h1>;
}