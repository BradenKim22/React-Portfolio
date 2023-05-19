import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/sections/about-me";
import Portfolio from "./components/sections/portfolio";
import Contact from "./components/sections/contact";
import Resume from "./components/sections/resume";
import Footer from "./components/Footer";

function App() {
  const [selectedLink, setSelectedLink] = useState("about-me");

  const handleLinkClick = (e) => {
    const { name } = e.target;
    setSelectedLink(name);
  };

  const section = () => {
    if (selectedLink === "about-me") {
      return <About />;
    } else if (selectedLink === "portfolio") {
      return <Portfolio />;
    } else if (selectedLink === "contact") {
      return <Contact />;
    } else {
      return <Resume />;
    }
  };

  return (
    <div>
      <Header handleLinkClick={handleLinkClick} selectedLink={selectedLink} />
      {section()}
      <Footer />
    </div>
  );
}

export default App;
