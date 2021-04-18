import React from 'react';
import './App.css';
import UserAge from './components/UserAge';
import CurrentEmotion from './components/CurrentEmotion';

function App() {
  return (
    <div className="App">
      <h1>Questionnaire</h1>
      <UserAge />
      <CurrentEmotion />
    </div>
  );
}

export default App;
