import React from "react";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";

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
          <img style={styles.imageLink} src={github}></img>
        </a>
        <a href="https://www.linkedin.com/in/braden-kim/" target="_blank">
          <img style={styles.imageLink} src={linkedin}></img>
        </a>
        <a href="link" target="_blank">
          <img style={styles.imageLink} src={'logoimage'}></img>
        </a>
      </div>
    </footer>
  );
};
