import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/news'>News</NavLink>
        </li>
        <li>
          <NavLink to='/grocery'>Grocery</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>

        <li>
          <NavLink to='/grocery'>Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
