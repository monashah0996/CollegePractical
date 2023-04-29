import { useContext } from 'react';
import ColorContext from '../context/ColorContext';
import LanguageContext from '../context/LanguageContext';
type Props = {
  title: string;
  totalItems: number;
};

const Header = (props: Props) => {
  const lang = useContext(LanguageContext);
  const col = useContext(ColorContext);

  return (
    <header>
      <h1>{props.title}</h1>
      <span>Items: {props.totalItems}</span>
      <span>
        {' '}
        context {col}
        {lang}
      </span>
    </header>
  );
};

export default Header;
