import React from "react";
import profileImage from "./assets/images/profile-image.png";

export default function Header({handleLinkClick, selectedLink}) {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      height: "11vh",
      margin: "3.5% 0 3.5% 0",
      backgroundColor: "orange",
      boxShadow: "0px 2px rgba(20, 40, 65, 0.5)",
    },
    profile: {
      height: "200%",
      borderRadius: 50,
      boxShadow: "2px 2px rgba(20, 40, 65, 0.5)"
    },
    name: {
      fontSize: "34pt",
      fontFamily: "sans-serif",
      color: "black",
    },
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
      color: "black",
    },
    activeLink: {
      textDecoration: "none",
      fontSize: "16pt",
      fontFamily: "sans-serif",
      padding: "1%",
      cursor: "pointer",
      color: "orange",
      backgroundColor: "black",
      borderRadius: "8px",
    },
  };

  // const [selectedLink, setSelectedLink] = useState("about-me");

  // const handleLinkClick = (e) => {
  //   const { name } = e.target;
  //   setSelectedLink(name);
  // };

  return (
    <header style={styles.header}>
      <img style={styles.profile} src={profileImage} />
      <h1 style={styles.name}>Braden Kim</h1>
      <nav style={styles.nav}>
        <a
          // href="#about-me"
          name="about-me"
          onClick={handleLinkClick}
          style={selectedLink === "about-me" ? styles.activeLink : styles.link}
        >
          About Me
        </a>
        <a
          // href="#portfolio"
          name="portfolio"
          onClick={handleLinkClick}
          style={selectedLink === "portfolio" ? styles.activeLink : styles.link}
        >
          Portfolio
        </a>
        <a
          // href="#contact"
          name="contact"
          onClick={handleLinkClick}
          style={selectedLink === "contact" ? styles.activeLink : styles.link}
        >
          Contact Me
        </a>
        <a
          // href="#resume"
          name="resume"
          onClick={handleLinkClick}
          style={selectedLink === "resume" ? styles.activeLink : styles.link}
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
