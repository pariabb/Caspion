import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Logo from '../assets/pic/Caspion-logo.png';
import '../assets/css/header.css';

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${isSticky ? 'fixed-top shadow-sm bg-white' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
         
          <a className="navbar-brand fw-bold" href="#">
            <img className="logo" src={Logo} alt="Logo" style={{ height: '70px' }} />
          </a>

          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

        
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <NavLink className="nav-link custom-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom-link" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom-link" to="/products">Our Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom-link" to="/projects">Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom-link" to="/partners">Partners</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom-link" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>

        
          <div className=" d-lg-block d-md-block d-sm-block">
            <a href="#" className="btn btn-primary fw-bold rounded-pill px-4 py-2">AZ</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
