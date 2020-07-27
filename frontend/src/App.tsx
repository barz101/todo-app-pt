import React from 'react';
import './styles/global.scss';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import TodoPage from "./components/TodoPage";
import Header from './components/Header';
const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" component={TodoPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;