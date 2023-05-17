import styled from "styled-components";
import realImg from "../images/realTime2.png";
import { Fade, Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const ChatWrapper = styled.div`
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
	const navigate = useNavigate();
	return (  
		<ChatWrapper>
			<div className="wrapper">
				<Fade direction={"left"}>
					<div>
						<img src={realImg} className="real" />
					</div>
				</Fade>

				<TextBox>
					<Slide direction="right">
						<h2>빠르고 간편한 <br/> 실시간 시세 간편 확인</h2>
					</Slide>
					<Fade delay={500} cascade damping={0.1}>
						<h4>실시간 시세 확인부터 <br />주문까지 빠른 디지털 자산 거래소를 만나보세요.</h4>
					</Fade>
					<button className="realTimeBtn" onClick={() => navigate("/exChange")}>실시간 시세 확인하기</button>
				</TextBox>
			</div>
		</ChatWrapper>
	);
}

export default RealTime;