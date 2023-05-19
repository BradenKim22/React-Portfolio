import React from "react";

function Footer() {
    const styles = {
        footer: {
            color: "black"
        }
    };
    
  return (
    <footer>
        {/* One or the other */}
      <div className="footer" style={styles.footer}>
        <a href="https://github.com/BradenKim22">Icon of GitHub</a>
        <a href="https://www.linkedin.com/in/braden-kim/">Icon of LinkedIn</a>
        <a href="link">Icon of Third Platform</a>
      </div>
    </footer>
  );
}

export default Footer;
