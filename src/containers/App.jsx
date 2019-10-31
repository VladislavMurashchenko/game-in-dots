import 'normalize.css';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import GamePage from './GamePage';
import LeaderBoardPage from './LeaderBoardPage';

import { AppHeader } from '../components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    font-family: sans-serif;
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

const App = () => (
  <Router>
    <GlobalStyle />
    <AppHeader />
    <Switch>
      <Route path="/game">
        <GamePage />
      </Route>
      <Route path="/leader-board">
        <LeaderBoardPage />
      </Route>
      <Redirect to="/game" />
    </Switch>
  </Router>
);

export default App;
