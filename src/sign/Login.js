import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router';
import { IoEyeOff, IoEye } from "react-icons/io5";

import LoginBack from "../images/login-back.jpg";
import axios from "axios";


// const LoginWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   overflow: hidden;
//
//   width: 100%;
//   padding: 140px 0;
//   background-image: url(${LoginBack});
//   background-repeat: no-repeat;
//   background-size: cover;
//
//   .inner {
//     max-width: 800px;
//     margin: 0 auto;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 50px 0;
//   }
//
//   .titleWrap {
//     font-size: 26px;
//     font-weight: 700;
//     color: #fff;
//     cursor: pointer;
//   }
//   .contentWrap {
//     padding-top: 50px;
//     width: 100%;
//     max-width: 500px;
//     margin: 0 auto;
//   }
//   .inputTitle {
//     font-size: 12px;
//     font-weight: 600;
//     color: #fff;
//   }
//   .inputWrap {
//     display: flex;
//     border-radius: 8px;
//     padding: 16px;
//     margin-top: 8px;
//     background-color: white;
//     border: 1px solid #e2e0c0;
//   }
//
//   .inputWrap:focus-within {
//     border: 1px solid #9e30f4;
//   }
//   .input {
//     width: 100%;
//     outline: none;
//     border: none;
//     height: 17px;
//     font-size: 14px;
//     font-weight: 400;
//   }
//   .input::placeholder {
//     color: #dadada;
//   }
//   .errorMessageWrap {
//     margin-top: 8px;
//     color: #ef0000;
//     font-size: 12px;
//   }
//   .bottomButton {
//     width: 100%;
//     margin: 0 auto;
//     height: 48px;
//     border: none;
//     font-weight: 700;
//     background-color: #9e30f4;
//     border-radius: 4px;
//     color: white;
//     cursor: pointer;
//   }
//   .bottomButton:disabled {
//     background-color: #359381;
//     color: white;
//   }
//   .joinFindWrap{
//     height: 30px;
//     margin: 0 auto;
//
//     ul{
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       height: 100%;
//       cursor: pointer;
//       font-size: 12px;
//       color: #fff;
//       margin: 10px 0;
//       gap: 10px;
//       list-style: none;
//     }
//   }
// `;
//
// const TitleWrap = styled.div`
//   font-size: 26px;
//   font-weight: 700;
//   color: #fff;
//   cursor: pointer;
// `;
//
// const FindWrap = styled.div`
//   height: 30px;
//   margin: 0 auto;
//
//   ul{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100%;
//     cursor: pointer;
//     font-size: 12px;
//     color: #fff;
//     margin: 10px 0;
//     gap: 10px;
//     list-style: none;
//   }
// `;

// login ex =========
const [inputId, setInputId] = useState("");
const [inputPw, setInputPw] = useState("");
const handleInputId = (e) => {
  setInputId(e.target.value);
};

const handleInputPw = (e) => {
  setInputPw(e.target.value);
};
// 수정 inputID -> email / inputPw -> pw
const onClickLogin = () => {
  console.log("click login");
  console.log("ID : ", inputId);
  console.log("PW : ", inputPw);
  axios
      .post("http://localhost:8080/api/login", {
        ac_id: inputId,
        ac_pw: inputPw,
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
        } else if (res.data.ac_id === inputId) {
          // id, pw 모두 일치 userId = userId1, msg = undefined
          console.log("======================", "로그인 성공");
          sessionStorage.setItem("user_id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
          sessionStorage.setItem("name", res.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
        }
        // 작업 완료 되면 페이지 이동(새로고침)
        document.location.href = "/";
      })
      .catch();
};

// ===========

function Login(props) {
  return (
    <LoginWrapper>
      <div className='inner'>
        <TitleWrap onClick={() => navigate("/")}>
          AweSome
        </TitleWrap>

        <div className='contentWrap'>
          
          <div className='inputTitle'>이메일 주소</div>
          <div className='inputWrap'>
            <input 
              className='input'
              type='text'
              placeholder='test@gmail.com'
              value={inputId}
              id={inputId}
              name={inputId}
              onChange={handleInputId}
            />
          </div>
          <div className='errorMessageWrap'>
            {
              !emailValid && inputId.length > 0 && (
                <div>올바른 이메일을 입력해주세요.</div>
              )
            }
          </div>

          <div style={{ marginTop: "26px" }} className='inputTitle'>
            비밀번호
          </div>
          <div className='inputWrap'>
            <input 
              className='input'
              type={passwordType.type}
              placeholder='영문, 숫자, 특수문자 포함 8자 이상'
              value={inputPw}
              id={inputPw}
              name={inputPw}
              onChange={handleInputPw}
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
              !pwValid && inputPw.length > 0 && (
                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
              )
            }
          </div>
          {/* 수정 onclick*/}
          <div style={{ marginTop: "40px" }}>
            <button onClick={onClickLogin} disabled={notAllow} className='bottomButton'>
              로그인
            </button>
          </div>

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
