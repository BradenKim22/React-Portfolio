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
}

// About Me _______________________________________________REFACTOR TO MAKE IT MAP OUT AN ARRAY OF OBJECTS_______________________________________________
export default function About() {
  return (
    <main style={styles.aboutme}>
      <section style={styles.sections}>
        <div>
          <h2 style={styles.title}>Bio</h2>
          <p style={styles.text}>
            My name is Braden. I have lived in five different states and two other countries than the United States.
            I am currently living in St. George, Utah. Since I have started in the tech industry recently, I've really
            enjoyed working on Full-Stack web developement projects. MERN stack projects are where I spend more of my time now.
            I always love learning new code and discovering different perspectives in coding. I've been able to learn how to
            code for a mobile app using react native in my freetime for a side project.
          </p>
        </div>
        <img src={placeholder} style={styles.image}></img>
      </section>

      <section style={styles.sections}>
        <img src={placeholder} style={styles.image}></img>
        <div>
          <h2 style={styles.title}>Travel</h2>
          <p style={styles.text}>
            My name is Braden. I have lived in five different states and two other countries than the United States. 
            I am currently living in St. George, Utah. Since I have started in the tech industry recently, I've really 
            enjoyed working on Full-Stack web developement projects. MERN stack projects are where I spend more of my time now.
            I always love learning new code and discovering different perspectives in coding. I've been able to learn how to 
            code for a mobile app using react native in my freetime for a side project.
          </p>
        </div>
      </section>

      <section style={styles.sections}>
        <div>
          <h2 style={styles.title}>Hobbies</h2>
          <p style={styles.text}>
            Alot of words go in here.. Alot of words go in here.. <br/>
            Alot of words go in here.. Alot of words go in here.. <br/>
            Alot of words go in here.. Alot of words go in here.. <br/>
            Alot of words go in here.. Alot of words go in here.. <br/>
            Alot of words go in here.. Alot of words go in here..
          </p>
        </div>
        <img src={placeholder} style={styles.image}></img>
      </section>

      <section style={styles.sections}>
        <img src={placeholder} style={styles.image}></img>
        <div>
          <h2 style={styles.title}>Entertainment</h2>
          <p style={styles.text}>
            Alot of words go in here.. Alot of words go in here.. <br/>
            Alot of words go in here.. Alot of words go in here.. <br/>
            Alot of words go in here.. Alot of words go in here.. <br/>
            Alot of words go in here.. Alot of words go in here.. <br/>
            Alot of words go in here.. Alot of words go in here..
          </p>
        </div>
      </section>
    </main>
  );
}
