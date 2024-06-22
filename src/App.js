import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/pages/Work" element={<Work />} />
        <Route path="/pages/Contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
