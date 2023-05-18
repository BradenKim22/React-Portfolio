import React, { useState, ChangeEvent } from "react";

function Nav() {
  const linkStyle = { border: "1px black", padding: "5px" };

  // const [selectedLink, setSelectedLink] = useState("about-me");

  // const isSelected = (value: string): boolean => selectedLink === value;

  // const handleLinkClick = (e: ChangeEvent<HTMLAElement>): void =>
  //   setSelectedLink(e.current.value);

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: "flex",
          fontFamily: "helvetica",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div style={linkStyle}>
          <a
            href="#"
            value="about-me"
            // checked={isSelected("about-me")}
            // onChange={handleLinkClick}
          >
            About Me
          </a>
        </div>
        <div style={linkStyle}>
          <a href="#">Portfolio</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact Me</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Resume</a>
        </div>
      </section>
    </nav>
  );
};


export default Nav;