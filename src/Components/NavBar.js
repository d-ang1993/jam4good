import React, { useState } from "react";
import styled from "styled-components";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo href="/">Logo</Logo>

      <MenuIcon onClick={toggleMenu}>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
      </MenuIcon>
        
      {isOpen && (
        <Menu isOpen={isOpen}>
          <MenuItem href="/">Home</MenuItem>
          <Seperator />
          <MenuItem href="/about">About</MenuItem>
          <Seperator />
          <MenuItem href="/services">Services</MenuItem>
          <Seperator />
          <MenuItem href="/contact">Contact</MenuItem>
          <Seperator />
        </Menu>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  background: #500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 50px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Seperator = styled.hr`
  width: 100%;
  padding: 0px;
  margin: 0px;
`;

const Logo = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background: #fff;
    margin: 3px;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 32px;
    left: 0;
    background: black;
    width: 100%;
    padding: 10px;
    transition: all 0.3s ease;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    overflow: hidden;
  }
`;

const MenuItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 15px;
  transition: all 0.3s ease;

  &:hover {
    background: #555;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export default NavBar;
