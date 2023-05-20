import React from 'react';
import styled from 'styled-components';

const OrderAreaWrapper = styled.div`
  margin-bottom: 50px;
`;

const ChatTittle = styled.div`
  position: relative;
  height: 28px;
  line-height: 28px;
  border-bottom: 0;
  margin-bottom: 4px;
  padding: 4px 0 5px;
  
  h2 {
    height: 28px;
    line-height: 28px;
    margin-bottom: 0;
    font-size: 28px;
    font-weight: 500;
  }
  span {
    color: #a4a4a4;
    font-size: 16px;
    margin-left: 5px;
    font-weight: 400;
  }
`;


function OrderArea(props) {
  return (
    <OrderAreaWrapper>
      <ChatTittle>
        <h2>비트코인</h2>
        <span>BTC /KRW</span>
      </ChatTittle>
      {/* article */}
    </OrderAreaWrapper>
  );
}

export default OrderArea;