import React from "react";
import Avatar from "@mui/material/Avatar";
import "./onebar.css";

const OneBar = ({ avatar, name, lawCase, select, onClick }) => {
  return (
    <div className={`a-bar ${select ? "selected" : ""}`} onClick={onClick}>
      <div className="lawyer-avatar">
        <Avatar
          alt={`Avatar of ${name}`}
          sx={{ width: 70, height: 70 }} // Adjust the size as needed
        >
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            style={{ objectFit: "cover" }}
          />
        </Avatar>
      </div>
      <div className="lawyer-details">
        <h4>{name}</h4>
        <p style={{ color: "var(--white-color)", opacity: 0.4 }}>{lawCase}</p>
      </div>
    </div>
  );
};

export default OneBar;
