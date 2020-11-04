import React from 'react';
import styled from 'styled-components';
import {
    NavLinkBurger,
  } from './NavbarElements';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    z-index: 12;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
          <NavLinkBurger to='/' activeStyle>
            <h3>Home</h3>
            
          </NavLinkBurger>
          <NavLinkBurger to='/movies' activeStyle>
            <h3>Movies</h3>
          </NavLinkBurger>
          <NavLinkBurger to='/contact' activeStyle>
            <h3>Contact</h3>
          </NavLinkBurger>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
    </Ul>
  )
}

export default RightNav