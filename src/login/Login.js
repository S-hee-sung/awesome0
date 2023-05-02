import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router';
import { IoEyeOff, IoEye } from "react-icons/io5";

import LoginBack from "../images/login-back.jpg";

const User = {
  email: 'test@example.com',
  pw: 'test2323@@@'
}

const LoginWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;

  width: 100%;
  padding: 140px 0;
  background-image: url(${LoginBack});
  background-repeat: no-repeat;
  background-size: cover;

  .inner {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
  }

  .titleWrap {
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
  }
  .contentWrap {
    padding-top: 50px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
  .inputTitle {
    font-size: 12px;
    font-weight: 600;
    color: #fff;
  }
  .inputWrap {
    display: flex;
    border-radius: 8px;
    padding: 16px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #e2e0c0;
  }

  .inputWrap:focus-within {
    border: 1px solid #9e30f4;
  }
  .input {
    width: 100%;
    outline: none;
    border: none;
    height: 17px;
    font-size: 14px;
    font-weight: 400;
  }
  .input::placeholder {
    color: #dadada;
  }
  .errorMessageWrap {
    margin-top: 8px;
    color: #ef0000;
    font-size: 12px;
  }
  .bottomButton {
    width: 100%;
    margin: 0 auto;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: #9e30f4;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
  .bottomButton:disabled {
    background-color: #359381;
    color: white;
  }
  .joinFindWrap{
    height: 30px;
    margin: 0 auto;

    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      cursor: pointer;
      font-size: 12px;
      color: #fff;
      margin: 10px 0;
      gap: 10px;
      list-style: none;
    }
  }
`;


function Login(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: false
  });

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if(regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }

  const handlePassword = (e) => {
    setPw(e.target.value);
    const regex = 
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if(regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  }

  const handlePasswordType = (e) => {
    setPasswordType(() => {
      if (!setPasswordType.visible) {
        return {type: 'text', visible: true}
      }
      return {type: 'password', visible: false}
    })
  }


  const onClickConfirmButon = () => {
    if (email === User.email && pw === User.pw) {
      alert('로그인에 성공했습니다.')
    } else {
      alert('등록되지 않은 회원입니다.')
    }
  }

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    } 
    setNotAllow(true);
  }, [emailValid, pwValid]);



  return (
    <LoginWrapper>
      <div className='inner'>
        <div className='titleWrap' onClick={() => navigate("/")}>
          AweSome
        </div>

        <div className='contentWrap'>
          
          <div className='inputTitle'>이메일 주소</div>
          <div className='inputWrap'>
            <input 
              className='input'
              type='text'
              placeholder='test@gmail.com'
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className='errorMessageWrap'>
            {
              !emailValid && email.length > 0 && (
                <div>올바른 이메일을 입력해주세요.</div>
              )
            }
          </div>

          <div 
            style={{ marginTop: "26px" }} 
            className='inputTitle'>
            비밀번호
          </div>
          <div className='inputWrap'>
            <input 
              className='input'
              type={passwordType.type}
              placeholder='영문, 숫자, 특수문자 포함 8자 이상'
              value={pw}
              onChange={handlePassword}
              minLength={8}
            />
            <span onClick={handlePasswordType}>
              {passwordType.visible
                ? <IoEye /> 
                : <IoEyeOff />
              }
            </span>
          </div>
          <div className='errorMessageWrap'>
            {
              !pwValid && pw.length > 0 && (
                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
              )
            }
          </div>

          <div style={{ marginTop: "40px" }}>
            <button onClick={onClickConfirmButon} disabled={notAllow} className='bottomButton'>
              로그인
            </button>
          </div>

          <div className='joinFindWrap'>
            <ul>
              <li onClick={() => navigate("/signUp")}>
                회원가입
              </li>
              <li>
                |
              </li>
              <li>
                아이디 찾기
              </li>
              <li>
                |
              </li>
              <li>
                비밀번호 찾기
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
}

export default Login;