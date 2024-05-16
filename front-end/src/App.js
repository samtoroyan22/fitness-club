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
import UserForm from './components/Forms/UserForm';
import AdminForm from './components/Forms/AdminForm';

const App = () => {
  Aos.init({
    duration: 2500,
    delay: 400,
  });

  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  const isAdmin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && user.uniq_id === "9f8aadbb-1aa3-4f43-9331-f197b46ad4eb";
  };

  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/" />;
  };

  const AdminRoute = ({ children }) => {
    return isAuthenticated() && isAdmin() ? children : <Navigate to="/" />;
  };

  const PublicRoute = ({ children }) => {
    return isAuthenticated() ? <Navigate to={isAdmin() ? "/admin" : "/user"} /> : children;
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
            <AdminRoute>
              <AdminForm />
            </AdminRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
