import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div >
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
