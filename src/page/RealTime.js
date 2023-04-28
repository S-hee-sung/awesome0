import styled from "styled-components";


const ChatWrapper = styled.div`
	background-color: #fff;
	width: 100%;
	height: 100%;

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

function RealTime() {
	return (  
		<ChatWrapper>
			<div className="wrapper">
				RealTime
			</div>
		</ChatWrapper>
	);
}

export default RealTime;