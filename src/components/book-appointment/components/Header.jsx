import React from 'react';
import '../styles/header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="left-items">
        <Link to="/" className="hero-button">
          9anounGPT | Booking System
        </Link>
      </div>
      <div className="right-items hover:underline hover:text-zinc-500 cursor-pointer">
        <Link to="/" />
        Home
      </div>
    </header>
  );
}

export default Header;
