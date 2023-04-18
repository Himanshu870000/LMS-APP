import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/LandingPage/LandingPage';
import HomePage from './components/User/User';
import SelectTypeLogin from './components/Login/SelectType';
import SelectTypeSignup from './components/Signup/SelectType';


const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SelectTypeLogin" element={<SelectTypeLogin/>}/>
        <Route path="/SelectTypeSignup" element={<SelectTypeSignup/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
