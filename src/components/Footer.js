import React from "react";

function Footer() {
  return (
    <footer>
        {/* One or the other */}
      <div className="footer" style={styles.footer}>
        <a href="link">Icon of GitHub</a>
        <a href="link">Icon of LinkedIn</a>
        <a href="link">Icon of Third Platform</a>
      </div>
    </footer>
  );
}

export default Footer;
