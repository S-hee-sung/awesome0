import React from 'react';
import styled from "styled-components";
import Aside from './Aside';
import OrderArea from './OrderArea';

const ExchangeWrapper = styled.div`
	display: flex;
	padding: 140px 0;
`;


function Exchange(props) {

	return (
		<ExchangeWrapper>
			<Aside />
			<OrderArea />	
		</ExchangeWrapper>
	);
}

export default Exchange;