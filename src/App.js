import React from 'react';
import './App.css';
import UserAge from './components/UserAge';
import ChoosePet from './components/ChoosePet';
import Food from './components/Food';
import RatePhoto from './components/photo/RatePhoto';

function App() {
  return (
    <div className="App">
      <h1>Questionnaire</h1>
      <UserAge />
      <ChoosePet />
      <Food />
      <RatePhoto totalStars ={5} />
    </div>
  );
}

export default App;
