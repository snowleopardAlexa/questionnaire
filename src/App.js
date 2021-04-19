import React from 'react';
import './App.css';
import UserAge from './components/UserAge';
import Checkbox from './components/Checkbox';
import FetchData from './components/FetchData';

function App() {
  return (
    <div className="App">
      <h1>Questionnaire</h1>
      <UserAge />
      <Checkbox />
      <FetchData />
    </div>
  );
}

export default App;
