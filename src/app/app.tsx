import React from 'react';
import { createGlobalStyle } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Login } from './pages/login';
import { Register } from './pages/register';
import { AxiosHttpClient } from '../core/data';
import { AuthenticationService } from '../core/infrastructure';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    margin: 0;
  }
`

function App() {

  const client = new AxiosHttpClient("http://localhost:3000");
  const service = new AuthenticationService(client)

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Login service={service} />
        </Route>
        <Route path="/login">
          <Login service={service} />
        </Route>
        <Route path="/register">
          <Register service={service} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
