import styled from 'styled-components';

export const Modal = styled.div`
    background: #363636;
    color: white;
    max-width: 60%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: 70%;
    overflow-y: scroll;
    & > img{
        max-height: 30%;
    }
  `;

export const ModalContent = styled.div`
  display:flex;
  flex-direction: row;
`;

export const ModalLeft = styled.div`
  margin-right: 16px;
  & > img {
    max-width: 100%;
  }
`;

export const ModalRight = styled.div`
  position:relative;
  display:flex;
  padding: 24px;
  flex-flow:column;  
  & > h1 {
    margin-top:0;
  }
  & > button {
    position: absolute;
    bottom:0;
    right:0;
    width: auto;
    background: #ffdd00;
    color: #333333;
    padding:8px 16px;
  }
`;

export const Lines = styled.div`
display:flex;
margin-bottom:16px;
margin-right: 16px;
flex-flow:column;
line-length: 1.2; 
& > span{
  font-size:.6rem;
  color:#9a9a9a;
}
`;

export const Row = styled.div`
  display:inline-flex;
`;
export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    background: rgba(0,0,0,0.4);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  `;
