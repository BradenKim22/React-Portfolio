import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "title 1",
    description: "description 1",
    image: "image 1",
    deployed: "deployed 1",
    github: "github 1"
  },
  {
    title: "title 2",
    description: "description 2",
    image: "image 2",
    deployed: "deployed 2",
    github: "github 2"
  },
  {
    title: "title 3",
    description: "description 3",
    image: "image 3",
    deployed: "deployed 3",
    github: "github 3"
  }
]

// Basic uploading pictures and viewing them on the front end.
export default function Portfolio() {
  const projectData = projects.map((project) => 
  <>
  <div>
    <h3>{project.title}</h3>
    <h4>{project.description}</h4>
    <h5>{project.image}</h5>
    <h6>{project.deployed}</h6>
  </div>
  <div>
    <h3>{project.github}</h3>
  </div>
  </>
  );

  return (
    <main>
      <h2>My Work</h2>
      <section>
        {projectData}
      </section>
    </main>
  );
}
