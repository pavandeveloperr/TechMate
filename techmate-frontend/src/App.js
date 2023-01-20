import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Courses from './components/Courses/Courses';
import Home from './components/Home';
import Header from './components/layout/Header/Header';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/courses' element={<Courses />}/>
      </Routes>
    </Router>
    

  )
}

export default App;
