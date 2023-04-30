import styled from "styled-components";
import realImg from "../images/realTime2.png";


const ChatWrapper = styled.div`
	background-color: #fff;
	width: 100vw;
	height: 100vh;
	max-width: 1200px;
	margin: 0 auto;
	padding-top: 50px;

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	.real {
		width: 300px;
		height: 500px;
	}
`;

const TextBox = styled.div`
	margin-left: 150px;

	h2 {
		font-size : 36px;
		font-weight : 700;
		color: #000;
		margin-top: 50px;
	}
	h4 {
		font-size: 20px;
		font-weight: 300;
		color: #000;
		opacity: 0.5;
		margin-top: 30px;
	}

	.realTimeBtn {	
		display: inline-block;
		color: #fff;
		font-weight: bold;
		padding: 12px 30px;
		border-radius: 10px;
		background-color: #359381;
		margin-top: 50px;
	}
	.realTimeBtn:hover {
		color: #359381;
		background-color: #fff;
	}
`;

function RealTime() {
	return (  
		<ChatWrapper>
			<div className="wrapper">
				<div>
					<img src={realImg} className="real" />
				</div>
				<TextBox>
					<h2>실시간 시세 간편 확인</h2>
					<h4>앱을 실행하지 않아도 락스크린에서 <br /> 실시간 시세를 간편하게 확인해보세요.</h4>
					<button className="realTimeBtn">실시간 시세 확인하기</button>
				</TextBox>
			</div>
		</ChatWrapper>
	);
}

export default RealTime;