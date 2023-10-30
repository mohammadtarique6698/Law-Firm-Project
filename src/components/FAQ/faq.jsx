import React from "react";
import "./faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CircleIcon from "../../components/circleicon.jsx"

const faq = () => {
  const content1 =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.";
  const content2 =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.";

  return (
    <div className="faq-container">
      <div className="faq-heading-content">
        <h1>FAQ</h1>
        <p style={{ opacity: "0.6" }}>{content1}</p>
      </div>
      <div className="faq-accordion">
        <h4 style={{ fontWeight: "600" }}>
          Do I need a personal injury report?
        </h4>
        <p
          style={{
            opacity: "0.6",
            paddingTop: "2rem",
            width: "80%",
            paddingBottom: "3rem",
          }}
        >
          {content2}
        </p>
        <hr
          style={{
            width: "100%",
            opacity: "0.6",
            borderTop: "2px solid rgba(255, 255, 255, 1)",
          }}
        />
        <Accordion sx={{ width: "80%", backgroundColor: "transparent", color: "var(--white-color)", paddingTop: "1rem", marginBottom: "2rem", boxShadow: "none", border: "0" }}>
          <AccordionSummary
            expandIcon={<CircleIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>How much is my case worth?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: "80%", backgroundColor: "transparent", color: "var(--white-color)", paddingTop: "1rem", marginBottom: "2rem", boxShadow: "none", border: "0" }}>
          <AccordionSummary
            expandIcon={<CircleIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>What should I do right after car accidect</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: "80%", backgroundColor: "transparent", color: "var(--white-color)", paddingTop: "1rem", marginBottom: "2rem", boxShadow: "none", border: "0" }}>
          <AccordionSummary
            expandIcon={<CircleIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>What should I do right after car accidect</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default faq;
