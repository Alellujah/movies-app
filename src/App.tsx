import React from 'react';
import { SearchContainer } from './containers/SearchPage/SearchContainer';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';

const AppWrapper = styled.section`
  background: #333333;
  min-height: 100vh;
  margin:0; 
  padding:0;
  display:flex; 
  justify-content:center;
  align-items: center;
  flex-flow:column;
  font-family: 'Rubik' ;
`;

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <SearchContainer />
      </AppWrapper>
    </Provider>
  );
}

export default App;
