import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Events,
  Contact
} from './components/pages/Pages';

function App() {
  return (
    <div>
    <h2>Questionnaire</h2>
    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/events" element={<Events />}/>
     <Route path="/contact" element={<Contact />}/>
    </Routes>


function App() {
  return (
    <div className="App">
      <h1>Questionnaire</h1>
      <UserAge />
      <ChoosePet />
      <Food />
      <RatePhoto totalStars ={10} />
      <Form />
    </div>
  );
}

export default App;
