import React from "react";
import "./chooseus.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ReactComponent as Gift } from "../../asset/gift.svg";

const Chooseus = () => {
  const success = [
    "98% Success Rate",
    "100% Success Rate",
    "100% Success Rate",
  ];
  const content =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.";
  return (
    <div className="choose-container">
      <div className="reason-to-choose">
        <h1>Why Choose us ?</h1>
      </div>
      <div className="choose-cards">
        {success.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 300,
              backgroundColor: "var(--primary-color)",
              color: "var(--white-color)",
              textAlign: "left",
            }}
          >
            <CardActionArea>
              <Gift style={{ marginTop: "1.5rem", marginLeft: "1rem" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item}
                </Typography>
                <Typography variant="body2" color="var(--white-color)">
                  {content}
                </Typography>
                <button className="read-more-button">Read More</button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Chooseus;
