import React from 'react';

import './App.css';
import CreateBoardForm from './components/CreateBoardForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img alt = 'mark' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'></img>
      </header>
      <body>
        <CreateBoardForm></CreateBoardForm>
      </body>
    </div>
  );
}

export default App;
