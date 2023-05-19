import React, { useState } from "react";

function Nav() {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-evenly",
      width: "30%",
    },
    link: {
      textDecoration: "none",
      fontSize: "16pt",
      fontFamily: "sans-serif",
      padding: "1%",
      cursor: "pointer",
      color: "black"
    },
    activeLink: {
      textDecoration: "none",
      fontSize: "16pt",
      fontFamily: "sans-serif",
      padding: "1%",
      cursor: "pointer",
      color: "orange",
      backgroundColor: "black",
      borderRadius: "8px"
    },
  };

  const [selectedLink, setSelectedLink] = useState("about-me");

  const handleLinkClick = (e) => {
    const { name } = e.target;
    setSelectedLink(name);
  };

  return (
    <nav style={styles.nav}>
      <a
        href="#about-me"
        name="about-me"
        onClick={handleLinkClick}
        style={selectedLink === "about-me" ? styles.activeLink : styles.link}
      >
        About Me
      </a>
      <a
        href="#portfolio"
        name="portfolio"
        onClick={handleLinkClick}
        style={selectedLink === "portfolio" ? styles.activeLink : styles.link}
      >
        Portfolio
      </a>
      <a
        href="#contact"
        name="contact"
        onClick={handleLinkClick}
        style={selectedLink === "contact" ? styles.activeLink : styles.link}
      >
        Contact Me
      </a>
      <a
        href="#resume"
        name="resume"
        onClick={handleLinkClick}
        style={selectedLink === "resume" ? styles.activeLink : styles.link}
      >
        Resume
      </a>
    </nav>
  );
}

export default Nav;