import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
