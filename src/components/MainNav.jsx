import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home Page</NavLink>
        </li>
        <li>
          <NavLink to='/chi siamo'>About Page</NavLink>
        </li>
        <li>
          <NavLink to='/posts'>Posts Page</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav