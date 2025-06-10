import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Logo from '../assets/pic/Caspion-logo.png';
import '../assets/css/header.css';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';


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


  const changeLang = (lang) => {
    i18next.changeLanguage(lang)
    localStorage.setItem('i18nextLng', lang);
  }

  const { t } = useTranslation();

  const menuLabels = [
    t('header.menu1'),
    t('header.menu2'),
    t('header.menu3'),
    t('header.menu4'),
    t('header.menu5'),
    t('header.menu6')
  ];

  return (
    <header className={`main-header ${isSticky ? 'shrink fixed-top' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex align-items-center justify-content-between " >

          <NavLink className="navbar-brand fw-bold d-flex" to="/">
            <img className="logo" src={Logo} alt="Logo" />
            <p className='ms-2 mt-1 text-center d-lg-block d-md-block d-sm-none'> <span>Caspion</span> <br /> Construction & Procurement</p>
          </NavLink>

          <div className="lang-button d-lg-none d-md-block d-sm-block mx-auto">
            <div className=" dropdown position-relative">
              <button
                className="btn btn-primary fw-bold rounded-pill px-4 py-2 dropdown-toggle"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => {
                  if (isMenuOpen) setMenuOpen(false);
                }}
              >
                {i18next.language.toUpperCase()}
              </button>


              <ul
                className="dropdown-menu mt-2 dropdown-menu-end"
                aria-labelledby="languageDropdown"
                style={{ minWidth: '120px' }}
              >
                <button className="dropdown-item" onClick={() => { changeLang('az'); setMenuOpen(false); }}>
                  AZ
                </button>
                <button className="dropdown-item" onClick={() => { changeLang('en'); setMenuOpen(false); }}>
                  EN
                </button>
                <button className="dropdown-item" onClick={() => { changeLang('ru'); setMenuOpen(false); }}>
                  RU
                </button>

              </ul>
            </div>
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
              {['/', '/about', '/products', '/clients', '/partners', '/contact'].map((path, i) => (
                <li className="nav-item" key={i}>
                  <NavLink to={path} className={({ isActive }) => "nav-link custom-link" + (isActive ? " active" : "")}>
                    {menuLabels[i]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lang-button2 dropdown position-relative d-md-none d-sm-none d-lg-block">
            <button
              className="btn btn-primary fw-bold rounded-pill px-4 py-2 dropdown-toggle"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {i18next.language.toUpperCase()}
            </button>

            <ul
              className="dropdown-menu mt-2 dropdown-menu-end"
              aria-labelledby="languageDropdown"
              style={{ minWidth: '120px' }}
            >
              <button className="dropdown-item" onClick={() => { changeLang('az'); setMenuOpen(false); }}>
                AZ
              </button>
              <button className="dropdown-item" onClick={() => { changeLang('en'); setMenuOpen(false); }}>
                EN
              </button>
              <button className="dropdown-item" onClick={() => { changeLang('ru'); setMenuOpen(false); }}>
                RU
              </button>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
