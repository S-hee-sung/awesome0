import { createGlobalStyle } from "styled-components";
import { Outlet, Route, Routes } from 'react-router-dom';
import reset from "styled-reset";

import Header from './page/Header';
import Login from "./sign/Login";
import Main from "./page/Main";
import SignUp from "./sign/SignUp";
import FindId from "./sign/FindId";
import FindPw from "./sign/FindPw";

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  ${reset}

  /* Global Style */
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    cursor: default;
  }

  * {
    box-sizing: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/findId" element={<FindId />} />
          <Route path="/findPw" element={<FindPw />} />
        </Route>
      </Routes>
      
      
      <Header />
    </>
  );
}

export default App;
