import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
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
  // Initialize Aos
  Aos.init({
    duration: 2500,
    delay: 400,
  });

  return (
    <Router>
      <div
        className="max-w-[1920px] mx-auto bg-page overflow-hidden relative"
      >
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="user" element={<UserForm/>}></Route>
          <Route path="admin" element={<UserForm/>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;