import React from 'react';
import styled from "styled-components";

import Video from '../videos/Video';
import RealTime from './RealTime';
import Wallet from './Wallet';
import UniverseImg from "../images/universe.png";

const Sec2 = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: blue;
  font-size: 36px;
  background-image: url(${UniverseImg});
	background-repeat: no-repeat;
	background-size: cover;

`;
const Sec3 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: blue;
  font-size: 36px;
  background: #dcdcdc;
`;
const Sec4 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: blue;
  font-size: 36px;
  background: white;
`;



function Main(props) {
  return (
    <>
      <div id='1'>
        <Video />
      </div>
      <Sec2 id='2'>
        <RealTime />
      </Sec2>
      <Sec3 id='3'>
        <Wallet />
      </Sec3>
      <Sec4 id='4'></Sec4>
    </>
  );
}

export default Main;