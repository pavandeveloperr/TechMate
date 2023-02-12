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
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/NotFound/NotFound';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/request' element={<Request />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/forgetpassword' element={<ForgetPassword />}/>

        <Route path='/resetpassword/:token' element={<ResetPassword />}/>
        <Route path='/subscribe' element={<Subscribe />}/>
        <Route path='/*' element={<NotFound />}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess />}/>
        <Route path='/paymentfail' element={<PaymentFail />}/>
      </Routes>
        <Footer />
    </Router>
    

  )
}

export default App;
