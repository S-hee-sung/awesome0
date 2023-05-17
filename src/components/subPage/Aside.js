import React from 'react';
import styled from "styled-components";

const AsideWrap = styled.div`
	max-height: none;
	position: sticky;
	top: 116px;
	margin: 0 40px 0 0;
	width: 360px;
	padding: 0;
	overflow: hidden;
	border: 1px solid #eee;
	border-radius: 4px;
	background-color: #fff;
	box-sizing: border-box;
`;

const InSearch = styled.div`
	display: flex;
	min-height: 46px;
	padding: 0;
	border: 0 none;
	border-bottom: 1px solid #eee;

	.seacrchCoin {
		height: 46px;
    border-radius: 0;
    font-size: 14px;
    background-color: transparent;
		padding-left: 39px;
		border: 0 none;
		outline: 0;
    color: #777;
		line-height: 21px;
    font-weight: 400;
    letter-spacing: 0;
		padding: 0 12px;
		display: block;
    width: 100%;
	}
`;

const FnTab = styled.div`
	margin-bottom: 0;

	a {
		flex: 1;
    max-width: 100%;
    padding: 11px 0 9px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    box-sizing: border-box;
    color: #777;

		&:first-child {
			margin-left: 0;
		}
		&.on {
			color: #1b1b1b;
			font-weight: 700 !important;
		}
	}
`;

const ListTap = styled.div`

	.coin-list {
		width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #eee;
	}
	.coin-list li {
		display: table-cell;
    padding: 8px 0 6px;
    font-size: 12px;
    line-height: 18px;
    font-weight: normal;
    box-sizing: border-box;
    vertical-align: middle;
	}
`;

const ScrollList = styled.div`
	height: 100%;
	overflow: hidden auto;
	padding-right: 23px;
	width: 100%;
	box-sizing: content-box;
`;


function Aside(props) {

  return (
    <AsideWrap>
				<InSearch>
					<input className='seacrchCoin' type='text' placeholder='검색' />
				</InSearch>
				<FnTab>
					<a>원화마켓</a>
					<a>BTC마켓</a>
					<a>보유자산</a>
					<a>즐겨찾기</a>
				</FnTab>
				<ListTap>
					<ul className='coin-list'>
						<li>자산</li>
						<li>현재가</li>
						<li>변동률(당일)</li>
						<li>거래금액(24H)</li>
					</ul>
				</ListTap>
				<ScrollList>

				</ScrollList>
			</AsideWrap>
  );
}

export default Aside;