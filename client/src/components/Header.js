import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const isLoggedIn = !!localStorage.getItem('token');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const userName = localStorage.getItem('username'); // Assuming 'username' is stored in localStorage
  const userEmail = localStorage.getItem('email'); // Assuming 'email' is stored

  return (
    <header>
      <nav>
        <ul className="left-nav">
          <li>
            <Link to="/">Genix Auctions</Link>
          </li>
        </ul>
        <ul className="right-nav">
        <li>
            <Link to="/auctions">Auctions</Link>
          </li>
          {isLoggedIn ? (
            <li className="user-dropdown">
              <button onClick={toggleDropdown}>
                {userName || 'User'}
              </button>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>{userEmail}</li>
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/settings">Settings</Link></li>
                  <li><Link to="/my-bids">My Bids</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
              )}
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
