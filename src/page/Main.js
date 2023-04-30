import React from 'react';
import styled from "styled-components";
import Video from '../videos/Video';
import RealTime from './RealTime';
import Wallet from './Wallet';

const Sec1 = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: blue;
  font-size: 36px;
  background: #fff;
`;
const Sec2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: blue;
  font-size: 36px;
  background: #dcdcdc;
`;
const Sec3 = styled.div`
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
      <Sec1 id='2'>
        <RealTime />
      </Sec1>
      <Sec2 id='3'>
        <Wallet />
      </Sec2>
      <Sec3 id='4'></Sec3>
    </>
  );
}

export default Main;