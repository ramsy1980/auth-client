import React from 'react';
import { createGlobalStyle } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Login, Register, Profile } from './pages';
import { AxiosHttpClient } from '../core/data';
import { AuthenticationService } from '../core/infrastructure';
import { ThemeProvider } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    margin: 0;
  }
`

function App() {

  const client = new AxiosHttpClient("http://localhost:3000");
  const service = new AuthenticationService(client);

  return (
    <ThemeProvider>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Login service={service} />
          </Route>
          <Route exact path="/login">
            <Login service={service} />
          </Route>
          <Route exact path="/register">
            <Register service={service} />
          </Route>
          <Route exact path="/profile">
            <Profile service={service} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
