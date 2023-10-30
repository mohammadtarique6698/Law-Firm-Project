import React from "react";
import "./myfooter.css"

const footer = ({year= 2023, name= "Mohammad Tarique"}) => {
    return(
        <div className="footer">
            <h4>Copyright © {year}. All rights reserved.</h4>
            <h3>Developed by {name}.</h3>
        </div>
    )
}

export default footer;