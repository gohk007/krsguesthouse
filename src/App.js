import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Location from "./components/Location";
import AttractionsList from "./components/attraction";
import Details from "./components/Details";
import FloatingButtons from "./components/FloatingButtons";
import ContactBar from "./components/ContactBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ContactBar />
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/attraction" element={<AttractionsList />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
      <FloatingButtons />
    </div>
  );
}

export default App;
