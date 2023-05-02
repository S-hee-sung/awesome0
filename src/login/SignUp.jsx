import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import { useEffect, useRef, useState } from "react";
import { MdCheckBoxOutlineBlank as CheckBoxBlank, MdCheckBox as CheckedBox } from "react-icons/md";
import { IoMdEye as Eye, IoMdEyeOff as EyeOff } from "react-icons/io";
import  CenterModal  from "../../components/CenterModal";


import userData from "../../data.json";
import { useSelector } from "react-redux";
import { selectColor } from "../../features/color/colorSlice";
// 서버에서 받아온 데이터 가정(import로 자동 파싱)
// console.log(userData);


const Wrapper = styled.div`
  @media ${({ theme }) => theme.device.tablet} {
    width : 400px;
  }
  width: 500px;
  margin: 0 auto;
  align-items: center;

  div.input-check {
    position: relative;
    svg { 
      position: absolute;
      right:.625rem;
      top: 0;
      bottom: 0;
      margin: auto;
      font-size: 30px;
      color: ${props => props.myColorHex.mainColor};
    }
  }
  
  h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    padding: 1rem 2rem 1.5rem;
    cursor: default;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 100;
    padding-bottom: .625rem;
    margin-top: .875rem;
    position: relative;

    span {
      font-size: 1rem;
      line-height: 1rem;
    }

    button {
      position: absolute;
      right: .625rem;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 1.875rem;
      height: 1.875rem;
      background: inherit ; 
      border:none; 
      box-shadow:none; 
      padding: 0; 
      overflow:visible; 
      &:focus {
        border: none;
      }
      cursor:pointer;
      svg {
        font-size: 1.25rem;
        color: ${props => props.theme.gray800};
      }
    }
  }

  h2.essential::after {
    content: "(필수)";
    font-size: 1rem;
    padding-left: .1125rem;
    color: #e75d5d;
  }

  .user-name {  
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    input {
      margin: 0;
    }
    input.last-name {
      margin-right: 1rem;
      width: 70%;
    }
    
  }
  
  .zip-wrapper {
    display: flex;
  }

  .zip-code{
    margin-right: 1rem;
    width: 70%;
  }
`;

const StyledInput = styled.input`
@media ${({ theme }) => theme.device.tablet} {
  font-size: 12px;
  ::placeholder {
    letter-spacing: -0.055rem;
  }
}
  
  display: block;
  padding-left: .7rem;
  width: 100%;
  height: 55px;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #333;
  outline: none;
  &:focus {
    border: 2px solid ${props => props.myColorHex.mainColor};
  }
  &:disabled {
    border: 1px solid ${props => props.theme.gray800};
    background-color: ${props => props.theme.gray200};
  }
  `;

const StyledButton = styled.button`
  width: 100%;
  height: 55px;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  
  &.btn-zip {
    color: #fff;
    background-color: #4a4c4e;
    font-weight: bold;
    :hover {
      background-color: ${ props => props.myColorHex.mainLight };
    }
  }
  &.btn-submit {
    color: #fff;
    background-color: ${ props => props.myColorHex.mainColor };
    font-weight:bold;
    :hover {
      background-color: ${ props => props.myColorHex.mainLight };
    }
  }
`;

const Error = styled.div`
  color: red;
  font-size: .6875rem;
  margin-bottom: 1rem;
`;

function SignUp(props) {
  
  const [openPostcode, setOpenPostcode] = useState(false);
  const [inputType, setInputType] = useState('password');
  const [passwordCheckResult, setPasswordCheckResult] = useState(false);

  const [showModal, setShowModal] = useState(false); // 모달

  const navigate = useNavigate();

  // useState 객체 묶기
  const [signUpInputValues, setSignUpInputValues] = useState({
    userEmail: '',
    userId: '',
    userPassword: '',
    userPasswordCheck: '',
    userLastName: '',
    userFirstName: '',
    zonecode: '',
    address: '',
    detailAddress: '',
    userNickname: '',
    recomenderId: '',
  });

  // 회원가입 충족 조건
  const signUpCheck = useRef([
    { title: "email", check: false },
    { title: "id", check: false },
    { title: "password", check: false },
    { title: "password2", check: false },
    { title: "postcode", check: false },
    { title: "detailaddress", check: true},
    { title: "lastname", check: false },
    { title: "firstname", check: false },
    { title: "nickname", check: false },
    { title: "recomender", check: true}
  ]);

  useEffect(() => {
    // 비밀번호 재확인
    if (!signUpInputValues.userPasswordCheck) {
      return;
    }

    if((signUpInputValues.userPasswordCheck === signUpInputValues.userPassword) && signUpInputValues.userPasswordCheck) {
      setPasswordCheckResult(true)
    } else {
      setPasswordCheckResult(false)
    }
  }, [signUpInputValues.userPasswordCheck, signUpInputValues.userPassword]);
  

  // 우편번호 검색 후 유효성 검사
  useEffect(() => {
    if(signUpInputValues.zonecode && signUpInputValues.address) {
      signUpCheck.current.find( data => data.title === 'postcode').check = true;
    }
  },[signUpInputValues.zonecode, signUpInputValues.address]);


  // 우편번호 검색
  const handleClickZipBtn = () => {
      setOpenPostcode(openPostcode => !openPostcode);
    };

  const handleSelectAddress = (data) => {
    setSignUpInputValues({
      ...signUpInputValues,
      zonecode: data.zonecode,
      address: data.address
    });
    setOpenPostcode(!openPostcode);
  };

  // input onChange 함수 하나로 묶기
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputValue = value;
    setSignUpInputValues(signUpInputValues => ({
      ...signUpInputValues,
      [name]: inputValue
    }));
  };

  // 이메일 정규식 검사
  const emailCheck = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  // 아이디 정규식 검사
  const idCheck = /^[a-z0-9]{6,10}/; // 영어 소문자와 숫자 6~10자리

  // 비밀번호 정규식 검사
  const passwordCheck =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ ; //최소 8 자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자 정규식

  // 이름 정규식 검사
  const nameCheck = /^[가-힣]+$/;

  // 상세주소 정규식 검사
  const detailAddressCheck = /.*[ㄱ-ㅎ|ㅏ-ㅣ]+.*/ ; // 온전하지 않은 한글만 아니면 다 가능 (ex. ㅋㅋ, ㅎ하 금지)

  // 닉네임 정규식 검사
  const nicknameCheck = /^([a-zA-Z0-9가-힣]){2,10}$/ ; // 최소 2자~10자이하의 영문 대소문자 숫자 한글 가능
  

  // 유저데이터
  const { userInfo } = userData;

  // email 중복검사
  const emailDuplicationCheck = userInfo.find((user) => {
    return user.email === signUpInputValues.userEmail ; 
  });

  // id 중복검사
  const idDuplicationCheck = userInfo.find((user) => {
    return user.id === signUpInputValues.userId ;
  });
  
  // 추천회원 검사
  const recoenderIdCheck = userInfo.find((user) => {
    return user.id === signUpInputValues.recomenderId;
  });

  const myColor = useSelector(selectColor);
  
  
  return (
    <section style={{ padding: '150px 0' }}>
      <Wrapper myColorHex={myColor}>
        <h1>Sign Up</h1>
        <h2 className="essential">E-MAIL</h2>
        {/* 
          이메일 유효성검사
          1. 이메일 양식에 유효한 input 데이터인지 확인 [O]
          2. 이미 가입한 이메일인지 확인 [O]
          ----------------------
          3. 유효한 이메일인지 확인 [추후확인]
        */}
        
        <div className="input-check">
          <label htmlFor="signUpEmail"/>
          <StyledInput name="userEmail" myColorHex={myColor} type="email" id="signUpEmail" placeholder="abc123@email.com" value={signUpInputValues.userEmail} autoComplete="off" spellCheck="false"
          onChange={handleInputChange}
          onBlur={() => {
            if(emailCheck.test(signUpInputValues.userEmail) && !emailDuplicationCheck) {
            signUpCheck.current.find( data => data.title === 'email').check = true;
            } else {
          }}}
          />
          { 
            emailCheck.test(signUpInputValues.userEmail) && !emailDuplicationCheck
            ? <CheckedBox />
            : <CheckBoxBlank />
          }
        </div>
        {
          !emailCheck.test(signUpInputValues.userEmail) && signUpInputValues.userEmail &&
          <Error>이메일 양식을 확인해 주세요.</Error>
        }
        {
          emailDuplicationCheck &&
          <Error>이미 가입한 이메일 입니다.</Error>
        }
        <h2 className="essential">ID</h2>
        <div className="input-check">
          <label htmlFor="signUnId"/>
          <StyledInput name="userId" myColorHex={myColor} type='text' id="signUpId" placeholder="영문 소문자 및 숫자 6~10자리를 입력해 주세요" value={signUpInputValues.userId} autoComplete="off" spellCheck="false"
            onChange={handleInputChange}
            onBlur={() => {
              if(idCheck.test(signUpInputValues.userId) && !idDuplicationCheck) {
              signUpCheck.current.find(data => data.title === 'id').check = true;
            }}}
          />
          { idCheck.test(signUpInputValues.userId) && !idDuplicationCheck
            ? <CheckedBox />
            : <CheckBoxBlank />
          }
        </div>
        {
          !idCheck.test(signUpInputValues.userId) && signUpInputValues.userId &&
          <Error>영문 대소문자와 숫자를 이용하여 6~10자리의 아이디를 만들어 주세요.</Error>
        }
        { 
          idDuplicationCheck &&
            <Error>아이디가 중복되었습니다.</Error>
        }
        <h2 className="essential">PASSWORD
          <button
                type="button"
                onClick={() => {
                  if(inputType !== 'text') {
                    setInputType('text');
                  } else {
                    setInputType('password')
                  }
                }}
              >
                {
                  inputType !== 'text' 
                    ? <EyeOff />
                    : <Eye />
                }
          </button>
        </h2>
        <div className="input-check">
          <label htmlFor="signUpPw"/>
          <StyledInput name="userPassword" myColorHex={myColor} type={inputType} id="signUpPw" placeholder="반드시 영문, 숫자, 특수문자(@$!%*#?&) 포함 8자 이상을 입력해 주세요."  value={signUpInputValues.userPassword} autoComplete="off"
            onChange={handleInputChange}
            onBlur={() => {
              if(passwordCheck.test(signUpInputValues.userPassword)) {
              signUpCheck.current.find(data => data.title === 'password').check = true;
            }}}
            />
            { passwordCheck.test(signUpInputValues.userPassword) 
              ? <CheckedBox />
              : <CheckBoxBlank />
            }
        </div>
        {
          !passwordCheck.test(signUpInputValues.userPassword) && signUpInputValues.userPassword &&
          <Error>반드시 영문, 숫자, 특수문자(@$!%*#?&) 포함 8자 이상을 입력해 주세요.</Error>
        }    
        <div className="input-check">
          <label htmlFor="signUpPwCheck"/>
          <StyledInput name="userPasswordCheck" myColorHex={myColor} type={inputType} id="signUpPwCheck" placeholder="비밀번호를 다시 입력해 주세요" value={signUpInputValues.userPasswordCheck} autoComplete="off"
            onChange = {handleInputChange}

            onBlur= {() => {
              if(passwordCheckResult && passwordCheck.test(signUpInputValues.userPassword)) {
                signUpCheck.current.find(data => data.title === 'password2').check = true;
              }
            }}
          />
          { passwordCheckResult && passwordCheck.test(signUpInputValues.userPassword)
              ? <CheckedBox />
              : <CheckBoxBlank />
          }
        </div>
        {
          !passwordCheckResult && signUpInputValues.userPasswordCheck && 
            <Error>비밀번호를 다시 확인해 주세요!</Error> 
        }
        <h2 className="essential">NAME</h2>
        <div className="input-check" style={{ marginBottom: '1rem' }}>
          <div className="user-name" >
            <label htmlFor="userLastName" style={{display:'none'}} />
            <StyledInput name="userLastName" myColorHex={myColor} className="last-name" type='text' id="userLastName" placeholder="성을 입력해 주세요" value={signUpInputValues.userLastName} autoComplete="off"  
              onChange={handleInputChange}
              onBlur={() => {
              if( nameCheck.test(signUpInputValues.userLastName) ) {
                  signUpCheck.current.find(data => data.title === 'lastname').check = true;
                }
              }}
            />
            <label htmlFor="userFirstName" style={{display:'none'}}/>
            <StyledInput name="userFirstName" myColorHex={myColor} className="first-name" type='text' id="userFirstName" placeholder="이름을 입력해 주세요" value={signUpInputValues.userFirstName} autoComplete="off"
              onChange={handleInputChange}
              onBlur={() => {
              if (nameCheck.test(signUpInputValues.userFirstName)) {
                  signUpCheck.current.find(data => data.title === 'firstname').check = true;
                }
              }}
            />
          { nameCheck.test(signUpInputValues.userLastName) && nameCheck.test(signUpInputValues.userFirstName)
                ? <CheckedBox />
                : <CheckBoxBlank />
          }
          </div>
        </div>
        {
          !nameCheck.test(signUpInputValues.userLastName) && signUpInputValues.userLastName &&
          <Error>성을 한글로 정확히 입력해 주세요</Error> 
        }
        {
          !nameCheck.test(signUpInputValues.userFirstName) && signUpInputValues.userFirstName &&
          <Error>이름을 한글로 정확히 입력해 주세요</Error> 
        }
        <h2 className="essential">ADDRESS</h2>
        <div className="zip-wrapper">
          <label htmlFor="searchAddress"/>
          <StyledInput myColorHex={myColor} className="zip-code" type='text' id="searchAddress" placeholder="우편번호" disabled={true} value={signUpInputValues.zonecode}
          />
          <StyledButton myColorHex={myColor} className="btn-zip" onClick={handleClickZipBtn}>우편번호 검색</StyledButton>
          <br />
        </div>
        {
          openPostcode&&
            <DaumPostcode
              onComplete={handleSelectAddress} 
              autoClose={false}
              defaultQuery=''
            />
        }
        <label htmlFor="userAddress"/>
        <StyledInput myColorHex={myColor} id="userAddress" placeholder="도로명 주소" disabled={true} value={signUpInputValues.address} 
        />
        <label htmlFor="detailAddress"/>
        <StyledInput name="detailAddress" myColorHex={myColor} id="detailAddress" placeholder="상세 주소" autoComplete="off" value={signUpInputValues.detailAddress}
          onChange={handleInputChange}
          onBlur={() =>
            { if(detailAddressCheck.test(signUpInputValues.detailAddress) && signUpInputValues.detailAddress) { 
              signUpCheck.current.find(data => data.title === 'detailaddress').check = false;
            } else if(!detailAddressCheck.test(signUpInputValues.detailAddress) && signUpInputValues.detailAddress) {
              signUpCheck.current.find(data => data.title === 'detailaddress').check = true;
            } else {
              signUpCheck.current.find(data => data.title === 'detailaddress').check = true;
            }}
          } 
        />

        <h2 className="essential">NICKNAME</h2>
        <div className="input-check">
          <label htmlFor="userNickname"/>
          <StyledInput name="userNickname" myColorHex={myColor} id="userNickname" placeholder="2-10자리, 한글, 영문, 숫자만 입력해 주세요" autoComplete="off" spellCheck="false" value={signUpInputValues.userNickname}
            onChange={handleInputChange}
            onBlur={() => {
              if(nicknameCheck.test(signUpInputValues.userNickname) && signUpInputValues.userNickname) {
                signUpCheck.current.find(data => data.title === 'nickname').check = true
              } 
            }}
          />
          { nicknameCheck.test(signUpInputValues.userNickname)
            ? <CheckedBox />
            : <CheckBoxBlank />
          }
        </div>
        {
          !nicknameCheck.test(signUpInputValues.userNickname) && signUpInputValues.userNickname &&
          <Error>닉네임은 한글, 영문, 숫자만 가능하며 2-10자리 입니다.</Error>
        }
        
        <h2>REFERRAL CODE</h2>
        <label htmlFor="recomenderId"></label>
        <StyledInput name="recomenderId" myColorHex={myColor} id="recomenderId" placeholder="추천인 아이디를 입력해 주세요 / 입력시, 추천인 가입인 모두 1000p증정" autoComplete="off" spellCheck="false" value={signUpInputValues.recomenderId}
          onChange={handleInputChange}
          onBlur={() => {
            if(!recoenderIdCheck && signUpInputValues.recomenderId){
              signUpCheck.current.find(data => data.title ==='recomender').check = false;
              console.log('추천인 아이디를 확인해 주세요');
            } else if (recoenderIdCheck && signUpInputValues.recomenderId ) {
              signUpCheck.current.find(data => data.title ==='recomender').check = true;
              console.log(signUpInputValues.userId+'님'+signUpInputValues.recomenderId+'님'+'각각 1000점 추가 예정');
            } else {
              signUpCheck.current.find(data => data.title ==='recomender').check = true;
              console.log('추천인 id 추가 안하고 회원가입');
            }
            console.log(signUpCheck.current.find(data => data.title ==='recomender'));
          }}
        />
        {
          !recoenderIdCheck && signUpInputValues.recomenderId &&
          <Error>없는 ID 입니다</Error>
        }
        
        <StyledButton
          myColorHex={myColor}
          className="btn-submit"
          onClick={()=>{

            if (signUpCheck.current.find(data => data.check === false)) {
              alert(`필수 입력값을 확인해 주세요`);
            } else {
              console.log('성공');
              setShowModal(true);
            }
          }}
        >가입하기</StyledButton>

        <CenterModal
        title="회원가입 알림"
        size="small"
        cancelText="확인" // 메인페이지로 이동
        confirmText="로그인 하기" // 로그인페이지로 이동
        onCancel={() => {
          navigate('/');
        }}
        onConfirm={() => {
          navigate('/signin');
        }}
        visible={showModal}
      >
        {signUpInputValues.userLastName + signUpInputValues.userFirstName}님 회원가입을 축하드립니다!
      </CenterModal>
      </Wrapper>
    </section>

  );
}

export default SignUp;

// 회원가입 버튼 누르면

// 1. 필수항목 체크확인 
// yes : 
// 1)회원가입 성공알림창 모달로 띄우기, [O]
//   -환영의메시지와 로그인하러가기 버튼 눌러서 로그인화면으로 옮겨주기[O]
//   -x 버튼 누르면 메인화면
//   -확인 누르면 메인화면
// 2)데이터 전송하기[회원가입데이터, 추천회원, 포인트 관리 필요][X]
// (회원가입데이터필수적으로 보내기(post방식으로), 선택적으로 포인트 증정)
