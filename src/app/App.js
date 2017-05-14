import React from 'react';
import Store from '../data/Store';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import "./App.css";
import Hero from "./Hero";

const App = () => (
  <Provider store={Store}>
    <Router>
      <Route path="/" component={(route) => (<Hero isFullHeight={route.match.isExact} />)}/>
    </Router>
  </Provider>
);

export default App;