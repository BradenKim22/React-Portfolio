import React from "react";
// import GonFit from "../assets/gonfit.png";
import Musinion from "../assets/musinion.png";
import TechBlog from "../assets/techblog.png";
import SkyJam from "../assets/skyjam.png";
import WeatherDash from "../assets/weatherdash.png";
import CodeQuiz from "../assets/codequiz.png";
import NoteKeeper from "../assets/notekeeper.png";
import Business from "../assets/businessmanager.png";
import ReadmeGen from "../assets/readmegen.png";
import ComingSoon from "../assets/comingsoon.png";

// Data for the Portfolio section
const projects = [
  {
    title: "Musinion",
    description: "Social media platform to read and post reviews about albums",
    image: Musinion,
    deployed: "https://musinion.herokuapp.com/",
    github: "https://github.com/Teaom/Musinion",
  },
  {
    title: "TechBlog",
    description: "Platform for tech bloggers and readers",
    image: TechBlog,
    deployed: "https://fathomless-eyrie-09842.herokuapp.com/",
    github: "https://github.com/BradenKim22/mvc-blog",
  },
  {
    title: "SkyJam",
    description: "Music generator based on the weather",
    image: SkyJam,
    deployed: "https://j3rkstore.github.io/weatheringo/",
    github: "https://github.com/J3rkStore/weatheringo",
  },
  {
    title: "WeatherDash",
    description: "Weather dashboard using OpenWeatherAPI",
    image: WeatherDash,
    deployed: "https://bradenkim22.github.io/on-the-go-weather/",
    github: "https://github.com/BradenKim22/on-the-go-weather",
  },
  {
    title: "CodeQuiz",
    description: "Simple quiz testing Full-Stack bootcamp classmates",
    image: CodeQuiz,
    deployed: "https://bradenkim22.github.io/multiple-guess/",
    github: "https://github.com/BradenKim22/multiple-guess",
  },
  {
    title: "NoteKeeper",
    description: "Notebook application using CRUD operations",
    image: NoteKeeper,
    deployed: "https://hidden-meadow-67344.herokuapp.com/",
    github: "https://github.com/BradenKim22/backpack-note",
  },
  {
    title: "BusinessManager",
    description:
      "Backend navigator using CRUD operations for business management",
    image: Business,
    deployed:
      "https://app.screencastify.com/manage/videos/4H9EO4hoZs6Nu2pawCBx",
    github: "https://github.com/BradenKim22/business-management",
  },
  {
    title: "ReadmeGen",
    description: "Generate a README.md file using Node.js",
    image: ReadmeGen,
    deployed:
      "https://app.screencastify.com/manage/videos/6a32j7MUZwEHPaj6BMtB",
    github: "https://github.com/BradenKim22/node-more-please",
  },
  {
    title: "GoN'Fit",
    description: "Coming Soon",
    image: ComingSoon,
    deployed: "comingsoon",
    github: "comingsoon",
  },
  // {
  //   title: "KidsCookie Co.",
  //   description: "Coming Soon",
  //   image: ComingSoon,
  //   deployed: "comingsoon",
  //   github: "comingsoon"
  // },
];

// Exported Portfolio Component
export default function Portfolio() {
  const projectData = projects.map((project) => (
    <div style={styles.projectCard}>
      <a href={project.deployed} target="_blank" style={styles.deployedBox}>
        <img src={project.image} style={styles.projectImage}></img>
        <div style={styles.descriptionBox}>
          <h3 style={styles.projectTitle}>{project.title}</h3>
          {/* <p style={styles.projectText}>{project.description}</p> */}
        </div>
      </a>
      <a href={project.github} target="_blank" style={styles.githubBox}>
        <h4 style={styles.projectTitle}>GitHub</h4>
      </a>
    </div>
  ));

  return (
    <main style={styles.portfolioMain}>
      <h2 style={styles.mywork}>My Work</h2>
      <section style={styles.projectContainer}>{projectData}</section>
    </main>
  );
}

// Styles for the Portfolio
const styles = {
  mywork: {
    fontFamily: "sans-serif",
    fontSize: "22pt",
  },
  portfolioMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "Center",
  },
  projectContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "75vw",
    marginTop: "3%",
  },
  projectCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "3%",
  },
  deployedBox: {
    position: "relative",
    textAlign: "center",
  },
  githubBox: {
    border: "2px solid orange",
    borderRadius: "5px",
    textAlign: "center",
    textDecoration: "none",
    backgroundColor: "orange",
    boxShadow: "4px 2px rgba(20, 40, 65, 0.5)",
  },
  descriptionBox: {
    position: "absolute",
    top: "5%",
    left: "5%",
    right: "5%",
    borderRadius: "5px",
    backgroundColor: "orange",
    opacity: "70%",
    padding: "3px",
  },
  projectTitle: {
    fontFamily: "sans-serif",
    color: "black",
  },
  projectText: {
    fontFamily: "sans-serif",
    color: "black",
  },
  projectImage: {
    height: "250px",
    width: "380px",
    border: "2px solid orange",
    borderRadius: "5px",
    boxShadow: "4px 2px rgba(20, 40, 65, 0.5)",
  },
};