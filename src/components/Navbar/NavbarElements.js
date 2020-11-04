import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-around;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 2rem;
  margin-right: 20px;
  margin-left: 20px;
  height: 100%;
  width: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const NavLinkTitle = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start
  float: left;
  text-decoration: none;
  height: 100%;
  width: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
    left: 0;
  }
  margin-left: 20px;
  font-size: 27px;
  padding-left: 30px;
`;

export const NavLinkBurger = styled(Link)`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  width: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
  margin: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  width: 100%;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  width: 100%;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  width: 100%;
`;