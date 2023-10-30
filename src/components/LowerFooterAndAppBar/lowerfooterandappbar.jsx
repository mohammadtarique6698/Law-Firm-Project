import React from "react";
import { ReactComponent as Icon } from "../../asset/icon.svg";
import "./lowerfooterandappbar.css";
import {ReactComponent as Instagram} from "../../asset/iconforfooter/instagram.svg"
import {ReactComponent as Facebook} from "../../asset/iconforfooter/facebook.svg"
import {ReactComponent as Twitter} from "../../asset/iconforfooter/twitter.svg"
import {ReactComponent as Pinterest} from "../../asset/iconforfooter/pinterest.svg"

const Navigation = () => {
  const center_navbar = ["Home", "Attorneys", "Practice Areas", "About Us"];
  return (
    <div className="footer-Bar">
      <div className="footer-part-1">
        <div className="footer-part-2-1">
          <Icon />
          <h3 style={{ color: "var(--white-color)" }}>Igstudio</h3>
        </div>
        <div className="footer-part-2-2">
          <div className="footer-part-2-2-1">
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
        <div className="footer-part-2-3">
            <Instagram />
            <Facebook />
            <Twitter />
            <Pinterest />
        </div>
      </div>
    </div>
  );
};

export default Navigation;