import React, { useState } from 'react';
import styled from "styled-components";

import LoginBack from "../images/login-back.jpg";

const SignUpWrapper = styled.div`
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
  .inputWrap {
    display: flex;
    border-radius: 8px;
    padding: 8px;
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
    background-color: #9e30f4;
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
					{/* <div className='nameWrap'>
						이메일
					</div> */}
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

					{/* <div className='nameWrap'>
						비밀번호
					</div> */}
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

					{/* <div className='nameWrap'>
						비밀번호 재확인
					</div> */}
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

					{/* <div className='nameWrap'>
            이름
          </div> */}
          <div className='inputWrap'>
            <input
              type='text'
              className='input'
              placeholder='이름 입력'
              value={reName}
              onChange={handleReplaceName}
            />
          </div>
					
					<div >
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