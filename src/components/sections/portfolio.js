import React, { useState, useEffect } from "react";
import placeholder from "../assets/profile-image.png";

const styles = {
  portfolioMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "Center"
  },
  projectContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "75vw",
    marginTop: "3%"
  },
  projectCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "3%"
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
    backgroundColor: "orange"
  },
  descriptionBox: {
    position: "absolute",
    top: "5%",
    left: "5%",
    right: "5%",
    borderRadius: "5px",
    backgroundColor: "orange",
    opacity: "80%",
    padding: "3px"
  },
  projectTitle: {
    color: "black"
  },
  projectText: {
    color: "black"
  },
  projectImage: {
    height: "250px",
    width: "380px",
    border: "2px solid orange",
    borderRadius: "5px"
  },
}

const projects = [
  {
    title: "GoN'Fit",
    description: "Coming Soon",
    image: placeholder,
    deployed: "comingsoon",
    github: "comingsoon"
  },
  {
    title: "Musinion",
    description: "Social media platform to read and post reviews about albums",
    image: "image 2",
    deployed: "deployed 2",
    github: "github 2"
  },
  {
    title: "TechBlog",
    description: "description 3",
    image: "image 3",
    deployed: "deployed 3",
    github: "github 3"
  },
  {
    title: "SkyJam",
    description: "description 3",
    image: "image 3",
    deployed: "deployed 3",
    github: "github 3"
  },
  {
    title: "WeatherDash",
    description: "description 3",
    image: "image 3",
    deployed: "deployed 3",
    github: "github 3"
  },
  {
    title: "CodeQuiz",
    description: "description 3",
    image: "image 3",
    deployed: "deployed 3",
    github: "github 3"
  },
  {
    title: "NoteKeeper",
    description: "description 3",
    image: "image 3",
    deployed: "deployed 3",
    github: "github 3"
  },
  {
    title: "BusinessManager",
    description: "description 3",
    image: "image 3",
    deployed: "deployed 3",
    github: "github 3"
  },
  {
    title: "ReadmeGen",
    description: "description 3",
    image: "image 3",
    deployed: "deployed 3",
    github: "github 3"
  },
]

// Basic uploading pictures and viewing them on the front end.
export default function Portfolio() {
  const projectData = projects.map((project) => 
  <div style={styles.projectCard}>
    <a href={project.deployed} style={styles.deployedBox}>
      <img src={project.image} style={styles.projectImage}></img>
      <div style={styles.descriptionBox}>
        <h3 style={styles.projectTitle}>{project.title}</h3>
        <p style={styles.projectText}>{project.description}</p>
      </div>
    </a>
    <a href={project.github} style={styles.githubBox}>
      <h4 style={styles.projectTitle}>GitHub</h4>
    </a>
  </div>
  );

  return (
    <main style={styles.portfolioMain}>
      <h2>My Work</h2>
      <section style={styles.projectContainer}>
        {projectData}
      </section>
    </main>
  );
}
