import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import Home from './pages/calc_t1'
import About from './pages/string_t2'
import View from './pages/number_t3'
import Help from './pages/obj_t4'
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/task_2" element={<About />}/>
      <Route path="/task_3" element={<View />}/>
      <Route path="/task_4" element={<Help />}/>
    </Routes>
  </Router>
  );
  
}

export default App;
