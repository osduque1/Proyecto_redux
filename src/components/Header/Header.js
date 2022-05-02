import React from 'react';
import './Header.scss';
import Logo from '../../assets/icons/logo.svg';
import Search from '../../assets/icons/search.svg';
import Like from '../../assets/icons/like.svg';
import Shopping from '../../assets/icons/shopping-bag.svg';
import Hamburger from '../../assets/icons/hamburger.svg';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse'>
          <a className='navbar-brand' href='/'>
            <img
              src={Logo}
              height='30'
              alt='Logo'
            />
          </a>
        </div>
        <div className='d-flex align-items-center'>
          <a className='navbar-brand' href='/'>
              <img
                src={Search}
                height='50'
                alt='Search'

              />
            </a>
            <a className='navbar-brand' href='/'>
            <img
              src={Like}
              height='50'
              alt='Like'
            />
          </a>
          <a className='navbar-brand' href='/'>
            <img
              src={Shopping}
              height='50'
              alt='Shopping'
            />
          </a>
          <a className='navbar-brand mt-2 mt-lg-0' href='/'>
            <img
              src={Hamburger}
              height='50'
              alt='Hamburger'
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;