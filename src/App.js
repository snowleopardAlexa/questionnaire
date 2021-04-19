import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Events,
  Contact,
  Whoops,
  Services,
  Location,
  CompanyHistory
} from './components/pages/Pages';

function App() {
  return (
    <div>
    <h2>Questionnaire</h2>
    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About />}>
       <Route path="services" element={<Services />} />
       <Route path="services" element={<CompanyHistory />} />
       <Route path="services" element={<Location />} />
     </Route>
     <Route path="/events" element={<Events />}/>
     <Route path="/contact" element={<Contact />}/>
     <Route path="*" element={<Whoops />}/>
    </Routes>
    </div>
  );
}

export default App;
