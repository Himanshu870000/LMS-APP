import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/LandingPage/LandingPage';
import HomePage from './components/User/User';
import SelectTypeLogin from './components/Login/SelectType';
import SelectTypeSignup from './components/Signup/SelectType';
import Dashboard from './components/User/Dashboard/Dashboard';
import MyCourses from './components/User/MyCourses/myCourses';
import Revenue from './components/User/Revenue/Revenue';
import Announcement from './components/User/Announcement/Announcement';
import Engagement from './components/User/Engagement/Engagement';
import UserActivity from './components/User/UserActivity/UserActivity';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/SelectTypeLogin" element={<SelectTypeLogin />} />
        <Route path="/SelectTypeSignup" element={<SelectTypeSignup />} />
        <Route path="/HomePage" element={<HomePage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='MyCourses' element={<MyCourses />} />
          <Route path='Revenue' element={<Revenue />} />
          <Route path='Announcement' element={<Announcement />} />
          <Route path='Engagement' element={<Engagement />} />
          <Route path='Messages' element={<postMessage />} />
          <Route path='UserActivity' element={<UserActivity />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
