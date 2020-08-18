import React from "react";
import drop1 from "./side_pics/drop1.svg";
import drop2 from "./side_pics/drop2.svg";
import drop3 from "./side_pics/drop3.svg";
import drop4 from "./side_pics/drop4.svg";
import './pages.css';

function ClickShow() {
    return (
        <div>

<div className="drop-1">
        <ul style={{paddingTop: "2%"}} >
        <div><a><img src={drop1} className="sideSVG"/>Profile</a></div>
        <div><a><img src={drop2} className="sideSVG"/>Feedback</a></div>
        <div><a><img src={drop3} className="sideSVG"/>About</a></div>
        <div><a><img src={drop4} className="sideSVG"/>Signout</a></div>
        </ul>
      </div>
      <div className="drop-2"></div>

        </div>
    )
}

export default ClickShow