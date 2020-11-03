import React from 'react';
import {
  Nav,
  NavLink,
  NavLinkTitle,
  NavMenu,
} from './NavbarElements';


import Burger from './Burger'

const Navbar = () => {

  return (
    <>
      <Nav>
        <NavLinkTitle to='/'>
        <h1>Flix +</h1>
        </NavLinkTitle>
        <Burger />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Home
          </NavLink>
          <NavLink to='/services' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Movies
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;