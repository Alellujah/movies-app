import styled from 'styled-components';

export const Modal = styled.div`
    background: #363636;
    color: white;
    width: 70%;
    padding: 24px;
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
  padding: 24px;
`;

export const ModalLeft = styled.div`
  margin-right: 16px;
  & > img {
    max-width: 100%;
  }
`;

export const ModalRight = styled.div`
  display:flex;
  flex-flow:column;
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
