import React from 'react';
import styled from "styled-components";
import WalletImg from "../images/walletImg.png";

const WalletWrapper = styled.div`
	background-color: #dcdcdc;
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
	.wallet-img {
		width: 500px;
		height: 500px;
	}
`;

const TextBox = styled.div`
	margin-right: 150px;

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

function Wallet(props) {
	return (
		<WalletWrapper>
			<div className="wrapper">
				<TextBox>
					<h2>손쉬운 계좌 개설, 간편한 주문 <br /> 지갑연동 시스템</h2>
					<h4>인증서, OTP 없이 계좌 개설이 간편합니다.<br />여러 건의 주문도 몇 번의 터치로 손쉽게 할 수 있습니다.</h4>
					<button className="realTimeBtn">지갑 연동하기</button>
				</TextBox>
				<div>
					<img src={WalletImg} className="wallet-img" />
				</div>
			</div>
		</WalletWrapper>
	);
}

export default Wallet;