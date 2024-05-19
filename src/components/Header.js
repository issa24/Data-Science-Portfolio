import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #282c34;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: #61dafb;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const IconLink = styled.a`
  color: #61dafb;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #21a1f1;
  }
`;

const Header = () => (
  <NavBar>
    <NavLinks>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </NavLinks>
    <NavLinks>
      <IconLink href="https://www.linkedin.com/in/issa-abdulkadir-9658b543/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </IconLink>
      <IconLink href="https://github.com/issa24" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </IconLink>
    </NavLinks>
  </NavBar>
);

export default Header;
