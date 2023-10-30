import React from "react";
import { ReactComponent as Icon } from "../../asset/icon.svg";
import "./Navigation.css";

const Navigation = () => {
  const center_navbar = ["Home", "Attorneys", "Practice Areas", "About Us"];
  return (
    <div className="Nav-Bar">
      <div className="part-1">
        <div className="part-2-1">
          <Icon />
          <h3 style={{ color: "var(--white-color)" }}>Igstudio</h3>
        </div>
        <div className="part-2-2">
          <div className="part-2-2-1">
            {center_navbar.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  style={{
                    color: "var(--white-color)",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </div>
        </div>
        <div className="part-2-3">
          <button>Contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
