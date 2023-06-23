import React from "react";
import placeholder from "../assets/profile-image.png"

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
      marginBottom: "5%"
    },
    title: {
      display: "flex",
      justifyContent: "center",
      fontFamily: "sans-serif",
      fontSize: "22pt"
    },
    text: {
      display: "flex",
      justifyContent: "center",
      width: "50vw",
      fontFamily: "sans-serif",
      fontSize: "16pt"
    },
    image: {
      height: "400px",
      borderRadius: "5px"
    }
};

const meSections = [
  {
    title: "Bio",
    description: 
      `My name is Braden. I have lived in five different states and two other countries than the United States.
      I am currently living in St. George, Utah. Since I have started in the tech industry recently, I've really
      enjoyed working on Full-Stack web developement projects. MERN stack projects are where I spend more of my time now.
      I always love learning new code and discovering different perspectives in coding. I've been able to learn how to
      code for a mobile app using react native in my freetime for a side project.`,
    image: placeholder
  },
  {
    title: "Travel",
    description: ``,
    image: placeholder
  },
  {
    title: "Hobbies",
    description: ``,
    image: placeholder
  },
  {
    title: "Entertainment",
    description: ``,
    image: placeholder
  }
];

// About Me _______________________________________________REFACTOR TO MAKE IT MAP OUT AN ARRAY OF OBJECTS_______________________________________________
export default function About() {
  const aboutMeData = meSections.map((section, index) => {
    // IF the meSection index is 0 or even number then do this..
    return (index %2 == 0) ?
    <section style={styles.sections}>
      <div>
        <h2 style={styles.title}>{section.title}</h2>
        <p style={styles.text}>
          {section.description}
        </p>
      </div>
      <img src={section.image} style={styles.image}></img>
    </section>
    :
    <section style={styles.sections}>
      <img src={section.image} style={styles.image}></img>
      <div>
        <h2 style={styles.title}>{section.title}</h2>
        <p style={styles.text}>
          {section.description}
        </p>
      </div>
    </section>
  });

  return (
    <main style={styles.aboutme}>
      {aboutMeData}
    </main>
  );
}
