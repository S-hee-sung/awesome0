import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { Link } from 'react-scroll';

import Logo from "../images/awesomeLogo.png";


const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 20px;
  z-index: 99;
  position: fixed;
  background-color: transparent;
  width: 100%;
  cursor: pointer;
  max-width: 2000px;
  margin: 0 auto;

  .logo-item {
    width: 150px;
    height: 70px;
    margin-left: 20px;
  }
  
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin-right: 18px;
  }
  .nav li {
    text-decoration: none;
    color: #359381;
    padding: 6px 15px;
    border-radius: 20px;
    margin: 0 10px;
    font-weight: 600;
    font-size: 1rem;
  }
  .nav li:hover,
  .nav li.active {
    background: #359381;
    color: #fff;
  }
  .nav-item {
    text-decoration: none;
    color: #359381;
    background: #fff;
    border: 1px solid #359381;
    padding: 6px 15px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 1rem;
  }
  .nav-item:hover {
    background: #359381;
    color: #fff;
    padding: 12px 15px;
  }
`;



function Header(props) {
  const navigate = useNavigate();
  
  return (
    <>
    <NavWrapper>
      <Link to="1" spy={true} smooth={true}>
        <div>
          <img className='logo-item' onClick={() => navigate("/")} src={Logo} />
        </div>
      </Link>
      <ul className='nav'>
        <Link to="1" spy={true} smooth={true}>
          <li className='active' onClick={() => navigate("/")} >HOME</li>
        </Link>
        <Link to="2" spy={true} smooth={true}>
          <li >거래소</li>
        </Link>
        <Link to="3" spy={true} smooth={true}>
          <li >Wallet</li>
        </Link>
        <Link to="4" spy={true} smooth={true}>
          <li >Notice</li>
        </Link>
        <a className='nav-item' onClick={() => navigate("/login")}>Sign In</a>
      </ul>
    </NavWrapper>
    <Outlet />
    
    </>
  );
}

export default Header;