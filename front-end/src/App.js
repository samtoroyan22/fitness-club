import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Workouts from './components/Workouts';
import Pricing from './components/Pricing';
import Community from './components/Community';
import Join from './components/Join';
import Footer from './components/Footer';
import Timetable from './components/TimeTable';
import Contact from './components/Contact';
import UserForm from './components/UserForm';

const App = () => {
  Aos.init({
    duration: 2500,
    delay: 400,
});

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

const PublicRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/user" /> : children;
};

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};


  return (
    <Router>
      <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
        <Routes>
          <Route path="/" element={
            <PublicRoute>
              <>
                <Header />
                <Banner />
                <About />
                <Workouts />
                <Timetable />
                <Community />
                <Pricing />
                <Join />
                <Contact />
                <Footer />
              </>
            </PublicRoute>
          } />
          <Route path="/user" element={
            <PrivateRoute>
              <UserForm />
            </PrivateRoute>
          } />
          <Route path="/admin" element={
            <PrivateRoute>
              <UserForm />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
