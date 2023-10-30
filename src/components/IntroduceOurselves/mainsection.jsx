import React from "react";
import { ReactComponent as Partition } from "../../asset/partition.svg";
import "./main.css";

const Mainsection = () => {
  const leftHeading = "Let's Introduce";
  const leftHeading2 = "Ourselves";
  const rightContent =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.";
  return (
    <div className="intro-container">
      <div className="introduce">
        <span>{leftHeading}</span>
        <span>{leftHeading2}</span>
      </div>
      <div className="partition">
        <Partition />
      </div>
      <div className="lawyer">
        <h3 style={{ color: "var(--white-color)" }}>Criminal Lawyer</h3>
        <p style={{ marginTop: "2rem", opacity: "0.3" }}>{rightContent}</p>
      </div>
    </div>
  );
};

export default Mainsection;
