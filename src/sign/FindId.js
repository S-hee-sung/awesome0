// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IdBackImg from "../images/sign.jpg";

const BoxWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 140px 0;
  background-image: url(${IdBackImg});
  background-repeat: no-repeat;
  background-size: cover;
`;


const IdWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 30px;
    font-weight: 700;
    padding: 20px 30px;
    cursor: default;
  }

  p {
    font-size: 14px;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  padding: 30px 40px;

  h2 {
    padding-bottom: 8px;
  }
`;

const InputWrapper = styled.input`
  display: block;
  padding-left: .7rem;
  width: 100%;
  height: 45px;
  margin-bottom: 1rem;
  border: 1px solid #333;
  border-radius: 8px;
  outline: none;

  :focus {
    border: 2px solid #359381;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 45px;
  margin-bottom: 1rem;
  color: #fff;
  background-color: #359381;;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight:bold;
  letter-spacing: -1px;

  &.signUp {
    background-color: #fff;
  }
`;

const TagStyle = styled.ul`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  margin: 10px 0;
  gap: 10px;
  list-style: none;
`;


function FindId () {
  const [value, setValue] = useState('');

  const navigate = useNavigate();


  // const handleFind = async () => {
  //   try {
  //     const response = await axios.get('');
  //     if (response.status === 200) {
  //       const target = response.data.find(user => user.email === value);
  //       if (target) {
  //         alert(`고객님의 아이디는 ${target.id}입니다.`);
  //         navigate('/login');
  //       } else {
  //         alert('일치하는 정보가 없습니다.');
  //         setValue('');
  //       }
  //     }
  //     else throw new Error(`api error: ${response.status} ${response.statusText}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <BoxWrapper>
      <IdWrapper>
        <h1>이메일 찾기</h1>
        <hr style={{ width: '100%'}}/>
        <TextWrapper>
          <h2>아이디를 잊으셨나요?</h2>
          <h2>가입 할 때 사용한 이름을 입력해주세요.</h2>
        </TextWrapper>
        <label htmlFor="findID" />
        <InputWrapper type='text' id="findID" value={value} onChange={e => setValue(e.target.value)}
          // onKeyUp={e => { if(e.key === 'Enter' && value) handleFind(); }}
          onKeyUp={e => { if(e.key === 'Enter' && value);}}
          placeholder="이름"
          autoComplete="off"
          spellCheck="false"
        ></InputWrapper>
        {/* <StyledButton onClick={handleFind}>찾기</StyledButton> */}
        <StyledButton >찾기</StyledButton>
        <TagStyle>
          <li onClick={() => { navigate('/login'); }}>돌아가기</li>
          <li>|</li>
          <li onClick={() => { navigate('/findPw'); }}>비밀번호 찾기</li>
        </TagStyle>
      </IdWrapper>
    </BoxWrapper>
  );
}

export default FindId;