// TODO 1: Declare a props type with a `name: string` field.
//         type Props = { name: string };
// TODO 2: Give this component a typed, destructured parameter: ({ name }: Props)
// TODO 3: Render {name} inside the JSX (replace the placeholder below).
type Props = {
  name: string;
};

export default function Greeting({ name }: Props) {
  return <h1>Welcome to my store, {name}!</h1>;
}