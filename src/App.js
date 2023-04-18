import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/LandingPage/LandingPage';
import SelectType from './components/Signup/SelectType';
import HomePage from './components/User/User';


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
        <Route path="/SelectType" element={<SelectType/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
