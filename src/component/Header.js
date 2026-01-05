import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
  return (
      <header className="header">
        <h1>
          <Link to ='/'>
          <img src={`${process.env.PUBLIC_URL}/images/logo-YTS.svg`} alt="logo" />
          </Link>
          </h1>

      <Navigation />
      </header>
  )
}

export default Header;