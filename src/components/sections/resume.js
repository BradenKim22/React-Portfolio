import React from "react";
import { Document, Page } from "react-pdf";
import ResumePDF from "../assets/braden-kim-resume.pdf";

// My Resume and List of Proficiencies
export default function Resume() {
  return (
    <div>
      <Document file={ResumePDF}></Document>
      <a href={ResumePDF} download >Download Resume</a>
    </div>
  );
}
