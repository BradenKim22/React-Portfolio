import React from "react";
import Github from "./assets/images/github.png";
import Linkedin from "./assets/images/linkedin.png";
import Facebook from "./assets/images/facebook.png"

export default function Footer() {
  const styles = {
    footer: {
      margin: "2%",
      display: "flex",
      justifyContent: "center",
    },
    footerDiv: {
      width: "60vw",
      display: "flex",
      justifyContent: "space-around"
    },
    imageLink: {
      height: "60px",
      width: "60px"
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerDiv}>
        <a href="https://github.com/BradenKim22" target="_blank">
          <img style={styles.imageLink} src={Github}></img>
        </a>
        <a href="https://www.linkedin.com/in/braden-kim/" target="_blank">
          <img style={styles.imageLink} src={Linkedin}></img>
        </a>
        <a href="https://www.facebook.com/braden.kim.1" target="_blank">
          <img style={styles.imageLink} src={Facebook}></img>
        </a>
      </div>
    </footer>
  );
};
