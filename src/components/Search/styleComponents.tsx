import styled from 'styled-components';

export const SearchInput = styled.input`
position:fixed;
top:32px;
padding: 16px;
border: 0;
border-radius: 4px;
box-shadow: 1px 1px 8px #000000;
width: 80%;
height: 24px;
margin-top:32px;
outline: 0;
transition: all ease .2s;
&:focus {
  box-shadow: 0px 0px 0px #000000;
}
`;

export const Button = styled.button`
border:0;
background-color: #ffdd00;
padding: 16px 32px;
cursor: pointer;
border-radius:24px;
font-weight: bold;
font-size:.8rem;
transition: all ease .2s;
outline:0;
&:focus{
  outline:0;
}
&:hover{
  background-color: #fff29e;
  box-shadow: 1px 1px 8px #000000;
}
`;
