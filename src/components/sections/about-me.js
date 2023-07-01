import React from "react";
import Horse from "../assets/images/horse.png";
import Tree from "../assets/images/tree.png";
import Cliff from "../assets/images/cliff.png";
import Fish from "../assets/images/fish.png";
import Radium, { StyleRoot } from "radium";

// Data for the AboutMe section
const meSections = [
  {
    title: "Who I Am",
    description: `Welcome to my portfolio, I am Braden Kim, sometimes known as your go-to software developer.
     I've worked my way up in the hospitality and tourism industry, but found my passion in software technology.
     I've never been more excited to learn and work on new, unique projects than now, in this industry.`,
    image: Horse,
  },
  {
    title: "Travel",
    description: `I have had a passport since before I turned 1 year old. I have been to more than 18 countries and 4 continents.
     Of that, I have lived in 5 states and 3 different countries. Traveling helps me to understand how people connect and interact with eachother.
      I enjoy the beauty of diversity in all things, especially culture. A few of my favorite places to visit includes Korea,
       Hong Kong, Hawaii, and Italy. I firmly believe that a work life balance atmosphere can enhance performance.`,
    image: Tree,
  },
  {
    title: "Hobbies",
    description: `On top of school and work, I spend time to develop different hobbies. I love fishing in the Pacific Ocean,
     playing volleyball, picking up new code, and spending time with family and friends. I don't like coding, actually,
      I freakin' love it. At times I may be quite, but I am a proven good team player.`,
    image: Fish,
  },
  {
    title: "Entertainment",
    description: `Other than sports and physical hobbies, I find entertainment playing games, watching anime, and listening to good music.
     I tend to play games with my friends or family. One would include Naraka Bladepoint. Some of my favorite anime are Demon Slayer,
      Attack on Titan, and Fairy Tail.`,
    image: Cliff,
  },
];

// Exported About Me Component
export default function About() {
  const aboutMeData = meSections.map((section, index) => {
    // IF the meSection index is 0 or even number then do this..
    return index % 2 == 0 ? (
      <section style={styles.sections}>
        <div>
          <h2 style={styles.title}>{section.title}</h2>
          <p style={styles.text}>{section.description}</p>
        </div>
        <img src={section.image} style={styles.image}></img>
        <img src={section.image} style={styles.image500}></img>
      </section>
    ) : (
      <section style={styles.sections}>
        <img src={section.image} style={styles.image}></img>
        <div>
          <h2 style={styles.title}>{section.title}</h2>
          <p style={styles.text}>{section.description}</p>
        </div>
        <img src={section.image} style={styles.image500}></img>
      </section>
    );
  });

  return (
    <StyleRoot>
      <main style={styles.aboutme}>{aboutMeData}</main>;
    </StyleRoot>
  );
}

// Styling for About me
const styles = {
  aboutme: {
    display: "flex",
    flexDirection: "column",
  },
  sections: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "12%",
    marginRight: "12%",
    marginBottom: "5%",
    "@media (max-width: 1000px)": {
      width: "80vw"
    },
    "@media (max-width: 500px)": {
      flexDirection: "column",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "sans-serif",
    fontSize: "22pt",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    width: "50vw",
    fontFamily: "sans-serif",
    fontSize: "16pt",
    "@media (max-width: 1000px)": {
      textAlign: "center",
    },
    "@media (max-width: 500px)": {
      width: "90vw",
    },
  },
  image: {
    width: "25%",
    border: "2px solid orange",
    borderRadius: "5px",
    boxShadow: "4px 2px rgba(20, 40, 65, 0.5)",
    "@media (max-width: 1000px)": {
      width: "25vw",
    },
    "@media (max-width: 500px)": {
      display: "none",
    },
  },
  image500: {
    display: "none",
    "@media (max-width: 500px)": {
      display: "inline-flex",
      width: "80vw",
      border: "2px solid orange",
      borderRadius: "5px",
      boxShadow: "4px 2px rgba(20, 40, 65, 0.5)",
    },
  },
};
