import './css/Header.css'
import HeaderLogo from './images/head-logo.jpg'
import Nav from './Nav';

function Header({onMenu}) {
  return (
    <header className="header">
     
      <h1 className="header__title">
        Everything about fox
      </h1>
      <Nav onMenu={onMenu} className="header__nav" />
    </header>
  );
}
export default Header;