import React from "react";
import Image1 from "../../asset/images/image1.jpg";
import Image2 from "../../asset/images/image2.jpeg";
import Image3 from "../../asset/images/image3.jpeg";
import Image4 from "../../asset/images/image4.png";
import Image5 from "../../asset/images/image5.jpg";
import Image6 from "../../asset/images/image6.png";
import "./practice.css";

const Practice = () => {
  const heading = "Area of Practices";
  return (
    <div className="practice-container">
      <div className="heading">
        <h1>{heading}</h1>
      </div>
      <div className="images">
        <div className="style1">
          <div className="style1-part1">
            <img
              src={Image1}
              alt="business-law"
              className="image1"
              style={{
                height: "21.375rem",
                width: "100%",
                borderRadius: "0.5rem",
              }}
            />
            <p className="profession-business">Business Law</p>
          </div>
          <div className="style1-part2">
            <img
              src={Image2}
              alt="profession-LAW"
              className="image2"
              style={{
                height: "21.375rem",
                width: "100%",
                borderRadius: "0.5rem",
              }}
            />
            <p className="profession-partnership">Partnership LAW</p>
          </div>
        </div>
        <div className="style2">
          <div className="style2-part1">
            <img
              src={Image3}
              alt="Real-Estate law"
              className="image3"
              style={{
                height: "21.375rem",
                width: "100%",
                borderRadius: "0.5rem",
              }}
            />
            <p className="real-estate">Real Estate Law</p>
          </div>
          <div className="style2-part2">
            <img
              src={Image4}
              alt="business-law"
              className="image4"
              style={{
                height: "21.375rem",
                width: "100%",
                objectFit: "cover",
                borderRadius: "0.5rem",
              }}
            />
            <p className="business-law">Business Law</p>
          </div>
        </div>
        <div className="style3">
          <div className="style3-part1">
            <img
              src={Image5}
              alt="landlord-disputes"
              className="image5"
              style={{
                height: "21.375rem",
                width: "100%",
                borderRadius: "0.5rem",
              }}
            />
            <p className="landlord-disputes">Landlord Disputes</p>
          </div>
          <div className="style3-part2">
            <img
              src={Image6}
              alt="elder-abuse"
              className="image6"
              style={{
                height: "21.375rem",
                width: "100%",
                borderRadius: "0.5rem",
              }}
            />
            <p className="elder-abuse">Elder Abuse</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
