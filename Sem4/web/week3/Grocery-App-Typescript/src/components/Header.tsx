type Props = {
  title: string;
  totalItems: number;
};
const Header = ({ title, totalItems }: Props) => {
  return (
    <header>
      <h1>{title}</h1>
      <span>Items: {totalItems}</span>
    </header>
  );
};

export default Header;
