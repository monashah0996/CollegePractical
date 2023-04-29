type Props = {
    title: string;
    totalItems: number;
  };
const Header = ({ title, totalItems }: Props) => {
    return (
      <header>
        <h2>{title}</h2>
        <h2>Total Number Of Task: {totalItems}</h2>
      </header>
    );
  };

  export default Header;