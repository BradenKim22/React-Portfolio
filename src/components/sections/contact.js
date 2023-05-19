import React, { useState, useEffect } from "react";

export default function Contact() {
    return (
        <p>This is Contact</p>
    )
};

// function contactForm() {
//   const [firstName, setFirstName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   //   Invalid Inputs..
//   const [invalidName, setInvalidName] = useState("");
//   const [invalidEmail, setInvalidEmail] = useState("");
//   const [invalidMessage, setInvalidMessage] = useState("");

//   // Invalid messages set
// //   inputTest(test) {
// //     if
// //   }

//   useEffect(() => {
//     inputTest(firstName);
//     validateEmail(email);
//     // I might have to do seperate functions
//     inputTest(message);
//   });

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { name, value } = e.target;

//     if (name === "firstName") {
//       setFirstName(value);
//     } else if (name === "email") {
//       setEmail(value);
//     } else {
//       setMessage(value);
//     }

//     //   // Ternary statement that will call either setFirstName or setEmail based on what field the user is typing in
//     //   return name === "firstName" ? setFirstName(value) : setEmail(value);
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // Alert the user their first and last name, clear the inputs
//     alert(`Hello ${firstName} ${email}`);
//     setFirstName("");
//     setEmail("");
//   };

//   return (
//     <div>
//       <p>Contact Me</p>
//       <form className="contact-form">
//         <input
//           value={firstName}
//           name="firstName"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="First Name"
//         />
//         <input
//           value={email}
//           name="email"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Email"
//         />
//         <input
//           value={message}
//           name="message"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Message"
//         />
//         <button type="button" onClick={handleFormSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
