import React, { useState } from "react";
import "./ourteam.css";
import OneBar from "../OurTeam/OneBar/onebar.jsx";
import LW1 from "../../asset/avatarForLawyer/lw1.svg";
import LW2 from "../../asset/avatarForLawyer/lw2.svg";
import LW3 from "../../asset/avatarForLawyer/lw3.svg";
import LW4 from "../../asset/avatarForLawyer/lw4.svg";
import LW5 from "../../asset/avatarForLawyer/lw5.svg";
import LW6 from "../../asset/avatarForLawyer/lw6.svg";

const Ourteam = () => {
  const law_av = [LW1, LW2, LW3, LW4, LW5, LW6];
  const names = [
    "Daniel Dafe",
    "SanFole",
    "Cesforila",
    "Colleen",
    "Haldone",
    "Nik Jeo",
  ];
  const cases = [
    "301 cases",
    "850 cases",
    "470 cases",
    "180 cases",
    "212 cases",
    "350 cases",
  ];

  const [selectedBar, setSelectedBar] = useState(null);

  const handleBarClick = (index) => {
    setSelectedBar(index);
  };

  return (
    <div className="team-container">
      <div className="team-heading">
        <h1>Our Team</h1>
      </div>
      <div className="our-team">
        {/* <OneBar avatar={LW1} name={"Daniel Dafe"} lawCase={"301 cases"} /> */}
        {names.map((name, index) => {
          const selected = selectedBar === index;
          return (
            <OneBar
              avatar={law_av[index]}
              name={name}
              lawCase={cases[index]}
              key={index}
              select={selected}
              onClick={() => handleBarClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Ourteam;
