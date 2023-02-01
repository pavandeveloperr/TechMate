import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Courses from './components/Courses/Courses';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/forgetpassword' element={<ForgetPassword />}/>

        <Route path='/resetpassword/:token' element={<ResetPassword />}/>
      </Routes>
        <Footer />
    </Router>
    

  )
}

export default App;
