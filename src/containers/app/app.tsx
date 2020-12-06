import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Login } from '../login';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    margin: 0;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Login />
    </div>
  );
}

export default App;
