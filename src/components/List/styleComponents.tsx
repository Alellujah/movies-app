import styled from 'styled-components';

export const MoviesList = styled.div`
  color:white;
  margin-top: 132px;
  margin-bottom: 32px;  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  margin-bottom:16px;
  margin: 16px;
  width: 30%;
  justify-content: space-evenly;
  box-shadow:1px 1px 8px #292929;
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
`;

export const Button = styled.button`
  text-transform: uppercase;
  border:0;
  color:#ffdd00;
  background:none;
  `;
