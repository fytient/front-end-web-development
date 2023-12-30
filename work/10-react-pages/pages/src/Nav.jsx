import { useState } from 'react';

const menuItems = [
    {
      name: "Home",
      path: "#/",
    },
    {
      name: "About",
      path: "#/about",
    }, {
      name: "Foxes",
      path: "#/foxes",
    },
  ];


function Nav({ className, onMenu }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuButtonClick = () => setIsMenuOpen(!isMenuOpen);

  const listItems = menuItems.map(({ name, path }) => (
    <li className="nav__item" key={name}>
      <a className="nav__link" href={path} onClick={onMenu}>
        {name}
      </a>
    </li>
  ));

  const listClassName = `nav__list ${isMenuOpen ? 'nav__list--open' : ''}`;

  return (
    <nav className={`nav ${className}`}>
      <button
        className="nav__button"
        onClick={handleMenuButtonClick}
        aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
      >
        <i className="gg-menu" />
      </button>
      <ul className={listClassName}>{listItems}</ul>
    </nav>
  );
}

export default Nav;
