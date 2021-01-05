import React from 'react';
import { createGlobalStyle } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Login, Register, Profile } from './pages';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    margin: 0;
  }
`

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
