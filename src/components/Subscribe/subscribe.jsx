import React from 'react'
import "./subscribe.css"

const subscribe = () => {
  return (
    <div className="outer-container">
        <div className="subscribe-container">
            <h1>Subscribe Our Newsletter</h1>
            <div className="input-div">
            <input type="text" placeholder="Name" style={{padding: "0.5rem", width: "18rem", borderTopLeftRadius: "0.5rem", borderBottomLeftRadius: "0.5rem"}}></input>
            <input type="text" placeholder="Enter your Email" style={{padding: "0.5rem"}}></input>
            <button style={{backgroundColor: "var(--yellow-color)", borderTopRightRadius: "0.5rem", borderBottomRightRadius: "0.5rem", padding: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem"}}>Send</button>
            </div>
        </div>
    </div>
  )
}

export default subscribe