import React from "react";
import Radium, { StyleRoot } from "radium";
import profileImage from "./assets/images/profile-image.png";

export default function Header({ handleLinkClick, selectedLink }) {
  return (
    <StyleRoot>
      <header style={styles.header}>
        <img style={styles.profile} src={profileImage} />
        <h1 style={styles.name}>Braden Kim</h1>
        <nav style={styles.nav}>
          <a
            // href="#about-me"
            name="about-me"
            onClick={handleLinkClick}
            style={
              selectedLink === "about-me" ? styles.activeLink : styles.link
            }
          >
            About Me
          </a>
          <a
            // href="#portfolio"
            name="portfolio"
            onClick={handleLinkClick}
            style={
              selectedLink === "portfolio" ? styles.activeLink : styles.link
            }
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
    </StyleRoot>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "11vh",
    margin: "3.5% 0 3.5% 0",
    backgroundColor: "orange",
    boxShadow: "0px 2px rgba(20, 40, 65, 0.5)",
    "@media (max-width: 1280px)": {
      height: "8vh",
      margin: "8% 0 8% 0",
    },
    "@media (max-width: 500px)": {
      height: "11vh",
      margin: "13% 0 20% 0",
    },
  },
  profile: {
    height: "200%",
    borderRadius: 50,
    boxShadow: "2px 2px rgba(20, 40, 65, 0.5)",
    "@media (max-width: 1280px)": {
      height: "200%",
    },
    "@media (max-width: 500px)": {
      height: "150%",
    },
  },
  name: {
    fontSize: "34pt",
    fontFamily: "sans-serif",
    color: "black",
    "@media (max-width: 1280px)": {
      fontSize: "28pt",
    },
    "@media (max-width: 500px)": {
      fontSize: "25pt",
    },
  },
  nav: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "30%",
    "@media (max-width: 1280px)": {
      display: "block",
      position: "absolute",
      top: "15%",
      left: "20%",
      textAlign: "center",
      width: "75%",
    },
    "@media (max-width: 500px)": {
      top: "23%",
      left: "0",
      width: "100%",
    },
  },
  link: {
    textDecoration: "none",
    fontSize: "16pt",
    fontFamily: "sans-serif",
    padding: "1%",
    cursor: "pointer",
    color: "black",
    "@media (max-width: 1280px)": {
      margin: "0 .7% 0 .7%",
      padding: ".5%",
      fontSize: "14pt",
      borderRadius: "5px",
      boxShadow: "2px 2px rgba(20, 40, 65, 0.5)",
      backgroundColor: "orange",
      border: "1px solid black",
    },
  },
  activeLink: {
    textDecoration: "none",
    fontSize: "16pt",
    fontFamily: "sans-serif",
    padding: "1%",
    cursor: "pointer",
    color: "orange",
    backgroundColor: "black",
    borderRadius: "5px",
    "@media (max-width: 1280px)": {
      margin: "0 .7% 0 .7%",
      padding: ".5%",
      fontSize: "14pt",
      boxShadow: "2px 2px rgba(20, 40, 65, 0.5)",
      border: "1px solid black",
    },
  },
};
