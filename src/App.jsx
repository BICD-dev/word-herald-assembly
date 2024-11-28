// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SalvationPrayer from "./pages/SalvationPrayer";
import Give from "./pages/Give";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Articles from "./pages/ArticlesList";
import SignUp from "./pages/SignUp";
import Create from "./components/Create";
function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prayer" element={<SalvationPrayer />} />
        <Route path="/give" element={<Give />} />
        <Route path="/signin" element= {<SignIn />} />  
        <Route path="/signup" element = {<SignUp/>} />
        <Route path="/articles" element= {<Articles />} />  
        <Route path="/create" element = {<Create />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
