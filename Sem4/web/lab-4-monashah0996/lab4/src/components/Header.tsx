import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/tasklist">TaskList</Link>
        </li>

        <li>
          <Link to="/post">Post</Link>
        </li>

        <li>
          <Link to="/todo">Todo</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
