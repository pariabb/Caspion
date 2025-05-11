import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Logo from '../assets/pic/Caspion-logo.png';
import '../assets/css/header.css';

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`main-header ${isSticky ? 'shrink fixed-top' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex align-items-center justify-content-between">

          <NavLink className="navbar-brand fw-bold" to="/">
            <img className="logo" src={Logo} alt="Logo" />
          </NavLink>

          <div className="lang-button d-lg-none d-md-block d-sm-block mx-auto">
            <a href="#" className="btn btn-primary fw-bold rounded-pill px-4 py-2">AZ</a>
          </div>

          <button
            className="custom-toggler d-lg-none"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? 'X' : '☰'}
          </button>

          <div className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav gap-4">
              {['/', '/about', '/products', '/references', '/partners', '/contact'].map((path, i) => (
                <li className="nav-item" key={i}>
                  <NavLink to={path} className={({ isActive }) => "nav-link custom-link" + (isActive ? " active" : "")}>
                    {['Home', 'About Us', 'Our Products', 'References', 'Partners', 'Contact Us'][i]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-none d-lg-block">
            <a href="#" className="btn btn-primary fw-bold rounded-pill px-4 py-2">AZ</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
