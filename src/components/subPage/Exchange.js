import React from 'react';
import styled from "styled-components";
import Aside from './Aside';
import OrderArea from './OrderArea';
import CandlestickChart from '../chat/CandlestickChart';

const Wrapper = styled.div`
	max-width: 1500px;
	margin: 0 auto;
`;

const ExchangeWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	padding: 140px 0;
`;

const ChatWrapper = styled.div`
	width: 100%;
`;


function Exchange(props) {

	return (
		<Wrapper>
			<ExchangeWrapper>
				<Aside />
				<ChatWrapper>
					<OrderArea />	
					<CandlestickChart />
				</ChatWrapper>
			</ExchangeWrapper>
		</Wrapper>
	);
}

export default Exchange;