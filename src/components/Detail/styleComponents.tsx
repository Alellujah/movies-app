import styled from 'styled-components';

export const Modal = styled.div`
    background: #363636;
    color: white;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    max-height: 60%;
    overflow-y: auto;
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
    min-width: 15rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  };
  `;

export const ModalRight = styled.div`
  position:relative;
  display:flex;
  padding: 24px;
  flex-flow:column;  
  & > h1 {
    margin-top:0;
    max-width: 90%;
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

export const CloseModalBtn = styled.button`
border:0;
background-color: #ffdd00;
position:absolute;
top: 24px;
right: 24px;
cursor: pointer;
border-radius:24px;
font-weight: bold;
font-size:.8rem;
transition: all ease .2s;
outline:0;
width: 32px;
height: 32px;
&:focus{
  outline:0;
}
&:hover{
  background-color: #fff29e;
  box-shadow: 1px 1px 8px #000000;
}
  `;