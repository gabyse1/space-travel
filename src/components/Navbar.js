import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => {
  const [modalMenuIcon, setModalMenuIcon] = useState('');
  const [modalMenuList, setModalMenuList] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const links = [
    { id: 1, path: '/', text: 'ROCKETS' },
    { id: 2, path: '/missions', text: 'MISSIONS' },
    { id: 3, path: '/dragons', text: 'DRAGONS' },
    { id: 4, path: '/profile', text: 'PROFILE' },
  ];

  const menuToggle = () => {
    if (!modalOpen) {
      setModalMenuIcon('navbar__menu-button-modal');
      setModalMenuList('navbar__menu-nav-modal');
    } else {
      setModalMenuIcon('');
      setModalMenuList('');
    }

    setModalOpen(!modalOpen);
  };

  const closeModalWindow = () => {
    if (modalOpen) {
      setModalMenuIcon('');
      setModalMenuList('');
      setModalOpen(!modalOpen);
    }
  };

  return (
    <nav className="navbar__box">
      <NavLink className="navbar__brand nav-link" to="/">
        <img src={logo} alt="Logo" data-testid="spaceTravelLogo" />
        <span>Space Travelers&apos; Hub</span>
      </NavLink>
      <button className={'navbar__menu-button '.concat(modalMenuIcon)} type="button" aria-label="Toggle navigation" onClick={menuToggle}>
        <span className="navbar__menu-bar" />
      </button>
      <ul className={'navbar__menu-list '.concat(modalMenuList)}>
        {
          links.map((link) => <li key={link.id} className="navbar__menu-item"><NavLink to={link.path} className="nav-link" data-testid={`link${link.text}`} onClick={closeModalWindow}>{link.text}</NavLink></li>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;
