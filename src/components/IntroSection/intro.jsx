import React from "react";
import {ReactComponent as Image} from "../../asset/image.svg"
import MailIcon from '@mui/icons-material/Mail';
import { Input, InputGroup, InputGroupText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./intro.css";

const Intro = () => {
  const intro_1 = "You don’t have to";
  const intro_2 = "Fight them Alone.";
  const content =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.";
  return (
    <div className="intro">
      <div className="intro-part-1">
        <div className="intro-part-1-1">
          <div className="intro-part-1-1-1">
            <h1
              style={{
                fontWeight: "500",
                fontSize: "66px",
                lineHeight: "6rem",
                color: "var(--white-color)",
              }}
            >
              {intro_1}
            </h1>
            <h1
              style={{
                fontSize: "66px",
                lineHeight: "6rem",
                color: "var(--white-color)",
              }}
            >
              {intro_2}
            </h1>
            <h4
              style={{
                paddingTop: "5rem",
                paddingBottom: "5rem",
                fontWeight: "500",
                textAlign: "left",
                maxWidth: "100%%",
                width: "auto",
                color: "var(--white-color)",
                opacity: "0.4",
              }}
            >
              {content}
            </h4>
            <InputGroup style={{minWidth: "65%"}}>
              <InputGroupText style={{borderTopLeftRadius: "2rem", borderBottomLeftRadius: "2rem", padding: "0", margin: "0"}}><MailIcon className="mail-icon"/></InputGroupText>
              <Input placeholder="Enter the Email Address" style={{backgroundColor: "var(--primary-color)", color: "var(--white-color)"}} />
              <InputGroupText style={{borderTopRightRadius: "2rem", borderBottomRightRadius: "2rem", padding: "0", margin: "0", backgroundColor: "var(--yellow-color)"}}><button className="lets-talk-button"><span style={{fontWeight: "bold"}}>Let's Talk</span></button></InputGroupText>
            </InputGroup>
          </div>
        </div>
        <div className="image">
            <Image />
          </div>
      </div>
    </div>
  );
};

export default Intro;
