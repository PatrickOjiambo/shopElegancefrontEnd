import React from "react";
import Header from "./Reusables/Header";
import Footer from "./Reusables/Footer";
import NavBar from "./Reusables/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Views/About/About";
import Home from "./Views/Home/Home";
import Contact from "./Views/Contact/Contact";
import Profile from "./Views/Profile/Profile";
import Cart from "./Views/Cart/Cart";
import Signup from "./Views/Auth/Signup";

function App() {
  return (
    <div className="font-Poppins">
        <Header/>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/signup" element={<Signup />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/profile" element={<Profile />} exact />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
