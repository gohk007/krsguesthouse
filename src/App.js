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
  React.useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/krsguesthouse.matomo.cloud/container_P9mRBXJT.js'; s.parentNode.insertBefore(g,s);
   }, [])
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
