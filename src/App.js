import React from 'react';
import './App.css';
import UserAge from './components/UserAge';
import ChoosePet from './components/ChoosePet';

function App() {
  return (
    <div className="App">
      <h1>Questionnaire</h1>
      <UserAge />
      <ChoosePet />
    </div>
  );
}

export default App;
