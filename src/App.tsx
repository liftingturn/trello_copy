import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import BoardContainer from './components/BoardContainer';
import BoardInnerView from './components/BoardInnerView';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          alt="mark"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        ></img>
      </header>
      <Router>
        <div className="appBody">
          <Switch>
            <Route exact path="/" component={BoardContainer} />
            <Route exact path="/board/:name" component={BoardInnerView} />
          </Switch>
        </div>
      </Router>
      <footer>this is footer</footer>
    </div>
  );
};

export default App;
