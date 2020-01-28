import React from "react"
import "./home.scss"
import Logo from "../../../images/Logo.svg"

const HomeDescription = (props) => {
  return (
    <div style={{ backgroundColor: "rebeccapurple", color: "white" }}>
      <div className="homeDescriptionWrapper">
        <div className="descriptionText">
          <h3>
            {props.title}
            <span className="durationDescription">
              {props.durationDescription}
            </span>
          
          </h3>
           {props.content}  
        </div>

          <center>
        <div className="imageText">
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
            <img src={Logo} alt="Pair Programming" width="450" />
        </div>
          </center>
      </div>
      <div id="wave">
        <div id="wave-dots"></div>
        <div id="wave-dot-2"></div>
        <div id="wave-dot-3">
          <div id="internal-wave-dot"></div>
        </div>
        <div id="wave-dot-4"></div>
        <div id="wave-dot-5"></div>
      </div>
    </div>
  )
}

export default HomeDescription
