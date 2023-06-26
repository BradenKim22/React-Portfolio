import React, { useState } from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ResumePDF from "../assets/braden-kim-resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// My Resume and List of Proficiencies
export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

  return (
    <div style={styles.resumeSec}>
      <h2 style={styles.myResume}>My Resume</h2>
      <a href={ResumePDF} download style={styles.download}>
        <p>Download</p>
      </a>
      <nav style={styles.navPDF} >
        <button onClick={goToPrevPage} style={styles.prev} >Prev</button>
        <p style={styles.pageNumPDF}>Page {pageNumber} of {numPages}</p>
        <button onClick={goToNextPage} style={styles.next} >Next</button>
      </nav>
      <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess} >
        <Page pageNumber={pageNumber} renderTextLayer={false} />
      </Document>
    </div>
  );
}

const styles = {
  myResume: {
    fontFamily: "sans-serif",
    fontSize: "22pt",
  },
  resumeSec: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  download: {
    cursor: "pointer",
    textDecoration: "none",
    backgroundColor: "orange",
    padding: "20px",
    fontFamily: "sans-serif",
    fontSize: "22pt",
    color: "black",
    borderRadius: "5px",
    boxShadow: "4px 2px rgba(20, 40, 65, 0.5)",
    margin: "3%",
  },
  navPDF: {
    display: "flex",
    margin: "5px",
    fontFamily: "sans-serif",
    fontSize: "15pt",
  },
  pageNumPDF: {

  },
  prev: {

  },
  next: {

  },
  PDF: {
    margin: "",
    width: "",
    height: ""
  }
};
