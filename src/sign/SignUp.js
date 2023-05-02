import React, { useState } from 'react';
import styled from "styled-components";

import LoginBack from "../images/sign.jpg";

const SignUpWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px;
  background-image: url(${LoginBack});
  background-repeat: no-repeat;
  background-size: cover;

	.inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
  }
	.titleWrap {
    font-size: 26px;
    font-weight: 700;
    color: #000;
    cursor: pointer;
  }
  .nameWrap {
    font-weight: 500;
    color: #000;
  }
  .contentWrap {
    padding-top: 50px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
  .inputWrap {
    display: flex;
    padding: 8px;
    margin-top: 8px;
    background-color: #fff;
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
    background-color: #fff;

    &::placeholder{
      color: #dadada;
    }
  }
  .bottomButton {
    width: 100%;
    margin: 0 auto;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: #359381;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    margin-top: 50px;
  }
  .bottomButton:disabled {
    background-color: #dadada;
    color: white;
  }
  .errorMessageWrap{
    margin:10px 0;
    color: #ef0000;
    font-size: 12px;
  }
`;

const NameCenter = styled.div`
  display: flex;
  width: 100%;

  .ReInputWrap {
    display: flex;
    width: 100%;
    padding: 8px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #e2e0c0;
  }

  .gender {
    display: flex;
    padding: 8px;
    border-radius: 4px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #e2e0c0;
    margin-left: 10px;
  }
`;

const BrithCenter = styled.div`
  display: flex;
  width: 100%;

  .birth-year {
    display: flex;
    width:100%;
    padding: 10px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #e2e0c0;
  }
  .birth-month {
    display: flex;
    padding: 10px;
    border-radius: 4px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #e2e0c0;
    margin-left: 10px;
  }
  .birth-day {
    display: flex;
    padding: 10px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #e2e0c0;
    margin-left: 10px;
  }
`;

const PhoneGroup = styled.div`
  border: none;
  text-decoration: none;

  .input-group + .input-group {
      margin-top: 40px;
  }
  .input-group-row {
    position: relative;
  }
  .input-group-row + .input-group-row {
    margin-top: 10px;
  }
  input, select {
    width: 100%;
    height: 51px;
    border: solid 1px #dadada;
    padding: 10px 14px 10px 14px;
    cursor: pointer;
  }
  input:focus, select:focus {
    border: 1px solid #03c75a;
  }
  .btn-verify {
    position: absolute;
    top: 0;
    right: 0;
    width: 115px;
    height: 51px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    background-color: #359381;
  }
  .authNo {
    opacity: 0.5;

    &::placeholder {
      color: #000;
    }
  }
`;

function SignUp(props) {
	const [id, setId] = useState('');
  const [pw, setPw] = useState('');
	const [reName, setReName] = useState('');

	const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
	const [pwReconfirm, setPwReconfirm] = useState('');
	
	const handleId = (e) => {
    setId(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

	const handlePwReconfirm = (e) => {
    setPwReconfirm(e.target.value);
  };

	const handleReplaceName = (e) => {
    setReName(e.target.value);
    const regex =
      /^[가-힣]+$/
    if (regex.test(e.target.value)) {

    }
  }

	return (
		<SignUpWrapper>
			<div className='inner'>
				<div className='titleWrap'>
					회원가입
				</div>


        <div className='contentWrap'>
          <div className='nameWrap'>
            이메일
          </div>
          <div className='inputWrap'>
            <input
              type='text'
              className='input'
              placeholder='이메일'
              value={id}
              onChange={handleId}
            />
          </div>
          <div className='errorMessageWrap'>
            {
              !idValid && id.length > 0 && (
                <div>올바른 이메일을 입력해주세요.</div>
              )
            }
          </div>

          <div className='nameWrap'>
            비밀번호
          </div>
          <div className='inputWrap'>
            <input
              type='password'
              className='input'
              placeholder='비밀번호'
              value={pw}
              onChange={handlePw}
            />
          </div>
          <div className='errorMessageWrap'>
            {
              !pwValid && pw.length > 0 && (
                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
              )
            }
          </div>

          <div className='nameWrap'>
            비밀번호 재확인
          </div>
          <div className='inputWrap' style={{ marginBottom: '12px' }}>
            <input
              type='password'
              className='input'
              placeholder='비밀번호 재확인'
              value={pwReconfirm}
              onChange={handlePwReconfirm}
            />
          </div>
          <div className='errorMessageWrap'>
            {
              pw !== pwReconfirm && (
                <div>동일하지 않은 비민번호 입니다.</div>
              )
            }
          </div>
          <div className='nameWrap' style={{ marginTop: 50 }}>
            이름
          </div>
          <NameCenter> 
            <div className='ReInputWrap'>
              <input
                type='text'
                className='input'
                placeholder='이름 입력'
                value={reName}
                onChange={handleReplaceName}
              />
            </div>
            <select className='gender'>
              <option value="" selected>성별</option>
              <option value="M">남자</option>
              <option value="F">여자</option>
            </select>
          </NameCenter>

          <div className='nameWrap' style={{ marginTop: '12px' }}>
            생년월일
          </div>
          <BrithCenter> 
            <input className='birth-year' type="text" placeholder="년(4자)" maxlength="4" />
            <select className="birth-month" >
              <option value="" selected>월</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <input className='birth-day' type="text" id="dd" name="dd" placeholder="일"  />
          </BrithCenter>
          
          <PhoneGroup>
            <div className='nameWrap' style={{ marginTop: '12px' }}>
              휴대전화
            </div>
            <div className="input-group-row" style={{ marginTop: '12px' }}>
              <select>
                <option value="233">가나 +233</option>
                <option value="241">가봉 +241</option>
                <option value="82" selected>대한민국 +82</option>
                <option value="852">홍콩 +852</option>
              </select>
            </div>
            <div className="input-group-row">
              <input type="tel" id="phoneNo" className='tel' placeholder="전화번호 입력" />
              <button type="button" className="btn-verify">인증번호 받기</button>
            </div>
            <div className="input-group-row">
              <input type="text" id="authNo" className="authNo" placeholder="인증번호(4자)를 입력하세요" maxlength="4"/>
            </div>
          </PhoneGroup>

          <div>
            <button className='bottomButton'>
              회원가입
            </button>
          </div>
        </div>
      </div>
		</SignUpWrapper>
);
}

export default SignUp;