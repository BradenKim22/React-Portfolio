import React from "react";
import Nav from "./Nav";
import profileImage from "./assets/profile-image.png";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "11vh",
    margin: "3.5% 0 3.5% 0",
    backgroundColor: "orange",
  },
  profile: {
    height: "200%",
    borderRadius: 50,
  },
  name: {
    fontSize: "300%",
    color: "black",
  },
};

function Header() {
  return (
    <header style={styles.header}>
      <img style={styles.profile} src={profileImage} />
      <h1 style={styles.name}>Braden Kim</h1>
      <Nav />
    </header>
  );
}

export default Header;
