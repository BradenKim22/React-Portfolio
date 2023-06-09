import React, { useState, useRef } from "react";
import { Helpers } from "../../utils/helper";
import emailjs from "@emailjs/browser";
import Radium, { StyleRoot } from "radium";

// Exported Contact Component
export default function Contact() {
  // EmailJS
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_v9iomjy",
        "template_h8b4bcl",
        form.current,
        "dJaxNd8rkbAirHzfW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(`Hello ${firstName}, your message has been sent!`);
          setSent2(
            `I will contact you at your email ${email}. Thank you for reaching out.`
          );
          setSent3(
            "Look for my response within 5 business days, from Bradenkim22@gmail.com."
          );

          setFirstName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setSent("");
            setSent2("");
            setSent3("");
          }, 15000);
        },
        (error) => {
          console.log(error.text);
          alert("Message was unable to send, please try again later.");
        }
      );
  };
  // Make the useState collect each variable (name, email, and message);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // write each function to set the useState variables that are above conditional handle input change. target.. name value
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  // useState that will contain error message variables
  const [invalidName, setInvalidName] = useState("");
  const [invalidEmail, setInvalidEmail] = useState("");
  const [invalidMessage, setInvalidMessage] = useState("");

  //   Use useEffect that call the test to validate
  const handleOffClick = (e) => {
    e.preventDefault();
    const { name } = e.target;

    if (name === "firstName") {
      if (Helpers.testName(firstName) === false) {
        setInvalidName("Hmm.. Check your name");
      } else {
        setInvalidName("");
      }
    } else if (name === "email") {
      if (Helpers.validateEmail(email) === false) {
        setInvalidEmail("Email doesn't look right..");
      } else {
        setInvalidEmail("");
      }
    } else {
      if (Helpers.testMessage(message) === false) {
        setInvalidMessage("Please don't send a blank message!");
      } else {
        setInvalidMessage("");
      }
    }
  };

  const [sent, setSent] = useState("");
  const [sent2, setSent2] = useState("");
  const [sent3, setSent3] = useState("");

  //   Handle the form submit button! This is where we will add the sending stuff to email or whatever too.
  const handleFormSubmit = (e) => {
    // Preventing default behaviour aka refresh the page)
    e.preventDefault();

    // Check input's and send the message if it's valid
    if (
      firstName == "" ||
      Helpers.validateEmail(email) == false ||
      message == ""
    ) {
      alert("Message did not send, please fill in each box.");
    } else {
      sendEmail();
    }
  };

  return (
    <StyleRoot>
      <section style={styles.pageSection}>
        <div style={styles.container}>
          <h3 style={styles.h3}>Contact Me</h3>
          <form ref={form} style={styles.form}>
            <p style={styles.text}>Name:</p>
            <input
              style={styles.input}
              name="firstName"
              onChange={handleInputChange}
              onBlur={handleOffClick}
              // The value is to clear the name at the end after hitting send.
              value={firstName}
              type="text"
              placeholder="Ex. Bill Gates"
            />
            <p style={styles.error}>{invalidName}</p>
            <p style={styles.text}>Email:</p>
            <input
              style={styles.input}
              name="email"
              onChange={handleInputChange}
              onBlur={handleOffClick}
              value={email}
              type="email"
              placeholder="Ex. billgates@aol.com"
            />
            <p style={styles.error}>{invalidEmail}</p>
            <p style={styles.text}>Message:</p>
            <textarea
              style={styles.messageArea}
              name="message"
              onChange={handleInputChange}
              onBlur={handleOffClick}
              value={message}
              type="text"
              placeholder="Hello Braden, I would like to contact you about your work. Please call or message me at (808)781-5233"
            />
            <p style={styles.error}>{invalidMessage}</p>
            <button
              style={styles.button}
              type="button"
              onClick={handleFormSubmit}
              value="Send"
            >
              Send
            </button>
            <p style={styles.sent}>
              {sent}
              <br></br>
              {sent2}
              <br></br>
              {sent3}
            </p>
          </form>
        </div>
      </section>
    </StyleRoot>
  );
}

// Styling for the contact component
const styles = {
  pageSection: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3%",
    marginTop: "5%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "5px",
    backgroundColor: "orange",
    boxShadow: "4px 2px rgba(20, 40, 65, 0.5)",
    padding: "50px",
    "@media (max-width: 500px)": {
      marginTop: "5%",
      padding: "20px",
    },
  },
  h3: {
    fontFamily: "sans-serif",
    fontSize: "22pt",
    "@media (max-width: 500px)": {
      margin: "0",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontFamily: "sans-serif",
    fontSize: "16pt",
    marginBottom: "5px",
    marginTop: "0",
  },
  input: {
    fontFamily: "sans-serif",
    fontSize: "14pt",
  },
  messageArea: {
    fontFamily: "sans-serif",
    fontSize: "14pt",
    height: "150px",
    width: "650px",
    "@media (max-width: 500px)": {
      width: "80vw",
    },
  },
  button: {
    alignSelf: "center",
    marginTop: "25px",
    fontFamily: "sans-serif",
    fontSize: "16pt",
    width: "100px",
    borderRadius: "5px",
    color: "orange",
    backgroundColor: "black",
    border: "1px solid black",
    cursor: "pointer",
    "@media (max-width: 500px)": {
      margin: "0",
    },
  },
  error: {
    fontFamily: "sans-serif",
    fontSize: "10pt",
    color: "purple",
    textAlign: "right",
  },
  sent: {
    fontFamily: "sans-serif",
    fontSize: "12pt",
    color: "black",
    textAlign: "center",
  },
};
