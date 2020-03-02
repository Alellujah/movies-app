import styled from 'styled-components';

export const MoviesList = styled.div`
transation: all ease .2s;
    min-width: 89%;
    min-height: 70vh;
  color:white;
  margin: 148px 64px 64px 64px;
  box-shadow: 1px 1px 8px #282828;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  & > span{
    height:100%;
    display:flex;
    align-items: center;
    justify-content:center;
    font-size:2rem;
    font-style: italic;
    color: #747474;
  }
`;

export const MoviesCard = styled.div`
  padding: 16px;
  justify-content: space-evenly;
  width:100%;
  border-bottom: 1px solid #202020;
  `;

export const MoviesTD = styled.div`
  margin-right:8px;
  display:flex;
  flex-flow:column;
  line-length: 1.2; 
  & > span{
    font-size:.6rem;
    color:#9a9a9a;
  }
`;

export const MoviesRow = styled.div`
  display:flex;
  padding: 16px;
  font-size:.9rem;
  justify-content: space-between;
`;

export const Button = styled.button`
    border: 0;
    color: #232323;
    background: #ffdd00;
    text-align: center;
    cursor: pointer;
    padding: 16px 32px;
    border-radius: 48px;
    outline: 0;
    margin-bottom: 64px;
  `;

export const ButtonList = styled.button`
  border:0;
  color:#ffdd00;
  background:none;
  width: 100%;
  text-align:right;
  cursor:pointer;
  outline:0;
  `;
