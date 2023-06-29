import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import ResumePDF from "../assets/pdf/braden-kim-resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../assets/css/resume.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
        <p>Download PDF</p>
      </a>
      <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess} >
        <Page className="react-pdf__Page__canvas" pageNumber={pageNumber} renderTextLayer={false} onLoadError={console.error} />
      </Document>
      <nav style={styles.navPDF} >
        <button onClick={goToPrevPage} style={styles.button} >Prev</button>
        <p>Page {pageNumber} of {numPages}</p>
        <button onClick={goToNextPage} style={styles.button} >Next</button>
      </nav>
    </div>
  );
};

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
    padding: "0 20px 0 20px",
    fontFamily: "sans-serif",
    fontSize: "16pt",
    color: "black",
    borderRadius: "5px",
    boxShadow: "4px 2px rgba(20, 40, 65, 0.5)",
    margin: "3%",
  },
  navPDF: {
    display: "flex",
    width: "250px",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5px",
    fontFamily: "sans-serif",
    fontSize: "15pt",
    color: "orange",
  },
  button: {
    backgroundColor: "orange",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "4px 2px rgba(20, 40, 65, 0.5)"
  },
};
