import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import logout from '/src/assets/logo/logout.svg'
import login from '/src/assets/logo/profile.svg'
import logo from '/src/assets/logo/logo.png'

import './Navbar.css'

export default function Navbar({currentPage, setCurrentPage}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
      // Vérifier la présence d'un jeton dans le localStorage
      const token = localStorage.getItem('access_token');
      if (token) {
          setIsAuthenticated(true);
      }
  }, []);

  const handleLogout = () => {
      // Supprimer les jetons du localStorage
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      setIsAuthenticated(false);
      // Optionnel : rafraîchir la page ou rediriger l'utilisateur
      window.location.reload();
  };

  return (    
    <div className="navbar-background">

      <nav className="navbar navbar-expand-lg sticky-top" >

       <div className="container-fluid">
            <a 
            className="navbar-brand home_link" 
            onClick={() => setCurrentPage('index')}
            href="/">
                <img className="logo" src={logo}></img>
            </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li >
              <a 
              className={`nav-link ${currentPage === 'encyclopedie' ? 'active' : ''}`} 
              onClick={() => setCurrentPage('encyclopedie')}
              href='/encyclopedie'>
                Encyclopédie</a>
            </li>
            <li >
              <a 
              className={`nav-link ${currentPage === 'panoplie' ? 'active' : ''}`} 
              onClick={() => setCurrentPage('panoplie')}
              href='#'>
                Panoplie</a>
            </li>
            <li>
              <a 
              className={`nav-link ${currentPage === 'monture' ? 'active' : ''}`} 
              onClick={() => setCurrentPage('monture')}
              href='#'>
                Monture</a>
            </li>
            <li>
              <a 
              className={`nav-link ${currentPage === 'almanax' ? 'active' : ''}`} 
              onClick={() => setCurrentPage('almanax')}
              href='#'>
                Almanax</a>
            </li>
          </ul>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <input type="navbar-search" className="form-control navbar-search-retracted" id="exampleInputEmail1" placeholder="Search for anything (Item, Pano, Almanax ...) "></input>
          </ul>

          <ul className="navbar-nav mb-lg-0">
            <div className="navbar-collapse">
            {!isAuthenticated ? (
              <li className="log-in-item nav-link">
                <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">
                  <img 
                    name="connection_link" 
                    className="connection_link" 
                    src={login} 
                    alt="login_button"></img>
                </a>
              </li>) :(
              <li className="nav-item nav-link">
                <a href="#" onClick={handleLogout}>
                  <img 
                    name="connection_link" 
                    className="connection_link" 
                    src={logout}
                     alt="logout_button"></img>
                </a>
              </li>)}
            </div>
          </ul>

          </div>
        </div>
      </nav>
      </div>
  )
}

Navbar.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};
