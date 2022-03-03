import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ThemeContext } from './context/ThemeContext';
import './App.css';

import { LandingPage } from './pages'
import { Profile, Login, SignUp } from './components'
// import PrivateRoute from "./utils/PrivateRoute"
import ScrollToTop from "./utils/ScrollToTop"

function App() {

  const { theme } = useContext(ThemeContext)

  return (
    <div className="app" data-theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile" element={<Profile />} />
            
            {/* <Route path="profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            /> */}


            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
