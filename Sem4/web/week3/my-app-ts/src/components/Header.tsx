interface Props {
  title: string
  quantity: number
}

const Header = (props: Props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span>Items:{props.quantity}</span>
    </header>
  );
};

export default Header;
