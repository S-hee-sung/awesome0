import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Logo from "../images/awesomeLogo.png";

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 20px;
  z-index: 99;
  position: fixed;
  background-color: transparent;
  cursor: pointer;
  width: 100%;

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
    /* color: #fff; */
    background: #359381;
    border: 1px solid #359381;
    padding: 6px 15px;
    border-radius: 20px;
    margin-left: 100px;
    font-weight: 600;
    font-size: 1rem;
  }
  .nav-item:hover {
    background: #fff;
    color: #359381;
  }
`;



function Header(props) {
  const navigate = useNavigate();
  
  return (
    <>
    <NavWrapper>
      <div>
        <img className='logo-item' onClick={() => navigate("/")} src={Logo} />
      </div>
      <ul className='nav'>
        <li className='active' onClick={() => navigate("/")}>HOME</li>
        <li >거래소</li>
        <li >Wallet</li>
        <li >Notice</li>
        <li className='nav-item' onClick={() => navigate("/login")}>Sign In</li>
      </ul>
    </NavWrapper>
    <Outlet />
    
    </>
  );
}

export default Header;