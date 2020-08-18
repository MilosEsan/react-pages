import React from 'react';
import side1 from "./side_pics/side1.svg";
import side2 from "./side_pics/side2.svg";
import side3 from "./side_pics/side3.svg";
import side4 from "./side_pics/side4.svg";
import side5 from "./side_pics/side5.svg";
import side6 from "./side_pics/side6.svg";
import side7 from "./side_pics/side7.svg";
import side8 from "./side_pics/side8.svg";
import side9 from "./side_pics/side9.svg";
 

function Sidebar() {
    return (
    
        <nav className="navbar navbar-dark bg-dark">
  <img className="logo2" src={logo2}/>
  <form className="form-inline">
  <a>John Doe</a>
    
  <div style={{cursor:"pointer"}} className="pic">
      <img src={profile_pic} />
      </div>
      <img className="bell" src={notification} />
  </form>
</nav>
)
   
}


export default Sidebar;