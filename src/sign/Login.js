import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router';
import { IoEyeOff, IoEye } from "react-icons/io5";
import axios from "axios";
import LoginBack from "../images/login-back.jpg";

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

const TitleWrap = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;

const FindWrap = styled.div`
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
    setPasswordType((prevState) => {
      if (!prevState.visible) {
        return { ...prevState, type: 'text', visible: true };
      }
      return { ...prevState, type: 'password', visible: false };
    })
  }

  const onClickLogin = () => {
    console.log("click login");
    console.log("ID : ", email);
    console.log("PW : ", pw);
    axios
      .post("http://localhost:8080/api/login", {
        ac_id: email,
        ac_pw: pw,
      })
      .then((res) => {
        console.log(res);
        console.log("res.data.userId :: ", res.data.userId);
        console.log("res.data.msg :: ", res.data.msg);
        if (res.data.ac_id === undefined) {
          // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
          console.log("======================", res.data.msg);
          alert("입력하신 id 가 일치하지 않습니다.");
        } else if (res.data.ac_id === null) {
          // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
          console.log(
            "======================",
            "입력하신 비밀번호 가 일치하지 않습니다."
          );
          alert("입력하신 비밀번호 가 일치하지 않습니다.");
        } else if (res.data.ac_id === email) {
          // id, pw 모두 일치 userId = userId1, msg = undefined
          console.log("======================", "로그인 성공");
          sessionStorage.setItem("user_id", email); // sessionStorage에 id를 user_id라는 key 값으로 저장
          sessionStorage.setItem("name", res.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
        }
          // 작업 완료 되면 페이지 이동(새로고침)
          document.location.href = "/";
      })
      .catch();
};


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
        {/* 제목 */}
        <TitleWrap onClick={() => navigate("/")}>
          AweSome
        </TitleWrap>

        <div className='contentWrap'>
          {/* 이메일 입력 */}
          <div className='inputTitle'>이메일 주소</div>
          <div className='inputWrap'>
            <input 
              className='input'
              type='text'
              placeholder='test@gmail.com'
              value={email}
              id={email}
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
          {/* 비밀번호 입력 */}
          <div style={{ marginTop: "26px" }} className='inputTitle'>
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
          {/* 로그인 버튼 */}
          <div style={{ marginTop: "40px" }}>
            <button onClick={onClickLogin} disabled={notAllow} className='bottomButton'>
              로그인
            </button>
          </div>
          {/* 회원가입 창, 이메일, 비밀번호 찾기 사이트 이동 */}
          <FindWrap>
            <ul>
              <li onClick={() => navigate("/signUp")}>
                회원가입
              </li>
              <li>
                |
              </li>
              <li onClick={() => navigate("/findId")}>
                이메일 찾기
              </li>
              <li>
                |
              </li>
              <li onClick={() => { navigate('/findPw'); }}>
                비밀번호 찾기
              </li>
            </ul>
          </FindWrap>
        </div>
      </div>
    </LoginWrapper>
  );
}

export default Login;