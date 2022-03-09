import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => {
  const links = [
    { id: 1, path: '/', text: 'ROCKETS' },
    { id: 2, path: '/missions', text: 'MISSIONS' },
    { id: 3, path: '/dragons', text: 'DRAGONS' },
    { id: 4, path: '/profile', text: 'PROFILE' },
  ];

  return (
    <nav className="navbar__box">
      <NavLink className="navbar__brand nav-link" to="/">
        <img src={logo} alt="Logo" />
        <span>Space Travelers&apos; Hub</span>
      </NavLink>
      <button type="button" className="navbar__menu-button">
        <span className="navbar__menu-bar" />
      </button>
      <ul className="navbar__menu-list">
        {
          links.map((link) => <li key={link.id} className="navbar-menu-item"><NavLink to={link.path} className="nav-link">{link.text}</NavLink></li>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;
