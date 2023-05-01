import React from 'react';
import styled from "styled-components";
import intro1Video from "./coin1.mp4";
import { useNavigate } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
// import intro2Video from "./video/coin2.mp4";

const VideoWrapper = styled.div`
	background-color: #000;
	height: 100vh;
	width: 100%;

	.video-wrap {
		position: relative;
		width: calc( 100% - 520px );
	}
	.video-wrap video {
		position: absolute;
		left: 50%;
		transform: translate(-50%);
		height: 100vh;
	}
	.text-wrap {
		width: 520px;
		height: 100vh;
		padding: 200px 60px;
		position: absolute;
		top: 0;
		right: 0;
		background-color: #000;
		z-index:1;
	}
	.text-wrap h2 {
		color: #004fff;
		font-size: 64px;
		line-height: 80px;
		font-weight: lighter;
		margin-bottom: 40px;
	}
	.text-wrap h3 {
		color: #fff;
		font-size: 24px;
		line-height: 30px;
		margin-bottom: 40px;
	}
	.text-wrap p {
		color: #fff;
		font-size: 16px;
		line-height: 1.8;
		margin-bottom: 30px;
	} 

	.btn {
		display: inline-block;
		color: #fff;
		font-weight: bold;
		padding: 12px 20px;
		border-radius: 24px;
		background-color: #004fff;
	}
	.ghost-btn {
		background-color: transparent;
		border: 1px solid #004fff;
		margin-left: 20px;
	}
	.btn:hover {
		color: #004fff;
		background-color: #fff;
	}
`;


function Video(props) {
	const navigate = useNavigate();

	return (
    <VideoWrapper>
			<div className='video-wrap'>
				<video autoPlay loop muted src={intro1Video} />
			</div>
			<div className='text-wrap'>
				<Slide>
					<h2>We move life</h2>
				</Slide>
				<Fade delay={1000} cascade damping={0.1}>
					<h3>신뢰받는 글로벌 디지털 거래소 </h3>
				</Fade>
				<Fade delay={2000} cascade damping={0.1}>
					<p>안전하고 투명한 시스템으로 바르고 편리한 거래 환경을 제공합니다.</p>
				</Fade>	
				<div className='btn-wrap'>
					<a className='btn' href="#" >거래 확인하기</a>
					<a className='btn ghost-btn' href="#" onClick={() => navigate("/signUp")}>가입하기</a>
				</div>
			</div>
		</VideoWrapper>
	);
}

export default Video;