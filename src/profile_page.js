import React, { Component } from 'react';
import ClickShow from "./dropdown.js";
import Nav from "./navigation.js"
import './pages.css';
import 'bootstrap/dist/css/bootstrap.css';
import profile_pic from "./profile_pic.svg";
import './custom.scss'
import side1 from "./side_pics/side1.svg";
import side2 from "./side_pics/side2.svg";
import side3 from "./side_pics/side3.svg";
import side4 from "./side_pics/side4.svg";
import side5 from "./side_pics/side5.svg";
import side6 from "./side_pics/side6.svg";
import side7 from "./side_pics/side7.svg";
import side8 from "./side_pics/side8.svg";
import side9 from "./side_pics/side9.svg";
import pointer from "./side_pics/pointer.svg";
import pencil from "./side_pics/pencil.svg";
import mark from "./side_pics/mark.svg";
import arrow from "./side_pics/arrow.svg";


class Profile extends Component{

  state = {
    component: false,
  };


_show = () => {
 
  this.setState({
    component: !this.state.component,
  });
}

_hide = () => {
 
  this.setState({
    component: false
  });
}

  
  render() {
  return (
    <div className="profile" id="wrapper">
      
      <Nav/>
      <h1 onClick={this._hide} className="page-title">Profile</h1>
      <div onClick={this._hide} className="sidebar">
        <ul>
        <div><a><img src={side1} className="sideSVG" style={{color: "black"}}/>  Dashboard</a></div>
        <div style={{paddingTop: "5%"}}><a style={{paddingLeft: "1%"}}><img src={side2} className="sideSVG"/>  Service requests</a></div>
        <div style={{paddingTop: "5%"}}><a style={{paddingLeft: "2%"}}><img src={side3} className="sideSVG"/>  Bookings</a></div>
        <div style={{paddingTop: "5%"}}><a style={{paddingLeft: "2%"}}><img src={side4} className="sideSVG"/>  Amenities</a></div>
        <div style={{paddingTop: "5%"}}><a style={{paddingLeft: "2%"}}><img src={side5} className="sideSVG"/>  Users</a></div>
        <div style={{paddingTop: "5%"}}><a style={{paddingLeft: "2%"}}><img src={side6} className="sideSVG"/>  Properties</a></div>
        <div style={{paddingTop: "5%"}}><a style={{paddingLeft: "2%"}}><img src={side7} className="sideSVG"/>  Companies</a></div>
        <div style={{paddingTop: "5%"}}><a style={{paddingLeft: "2%"}}><img src={side8} className="sideSVG"/>  Notification</a></div>
        <div style={{paddingTop: "5%"}}><a style={{paddingLeft: "2%"}}><img src={side9} className="sideSVG"/>  Data lists <img id="pointer" src={pointer} className="sideSVG" style={{marginLeft: "30%"}}/></a></div>
        <div className="props">
          <ul>
           <p>Aspen Properties</p>
           <p style={{color: "#B07E09", fontSize:"12px"}} >Version 2.4.5</p>
          </ul>
        </div>
        </ul>
      </div>
      <div onClick={this._hide} className="div-content">
        <div className="form-inline">
        <div className="head-sec">
        
       
        </div>
        <ul style={{marginTop:"10%", width:"100%", height:"100%", left:"0%"}}>
        <p style={{marginBottom:"1%", marginTop:"8%"}}>BASIC INFORMATION</p>
        <div className="-sec">
        <div className="-sec1"  style={{width:"47.5%", height:"65px", border:"1px solid #C5C5C5",}}>
          <p style={{color:"#C5C5C5", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"12px", padding:"1%"}}>
            First Name
          </p>
          <input style={{color:"#222222", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"15px", border:"none", bottom:"30%"}}
            value= "John"/>
        </div>
        <div className="-sec2"  style={{width:"47.5%", height:"65px", border:"1px solid #C5C5C5", float:"right",
        marginTop:"-7.5%"}}>
          <p style={{color:"#C5C5C5", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"12px", padding:"1%"}}>
            First Name
          </p>
          <p style={{color:"#222222", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"16px", margin:"4%"}}>
            John 
          </p>
        </div>
        </div>
        <div className="-sec" style={{marginTop:"5%"}}>
        <div className="-sec1" style={{width:"47.5%", height:"65px", border:"1px solid #C5C5C5",}}>
        <p style={{color:"#C5C5C5", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"12px", padding:"1%"}}>
            First Name
          </p>
          <p style={{color:"#222222", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"16px", margin:"4%"}}>
            John 
          </p>
        </div>
        <div className="-sec2" style={{width:"47.5%", height:"65px", border:"1px solid #C5C5C5", float:"right",
        marginTop:"-7.5%"}}>
          <p style={{color:"#C5C5C5", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"12px", padding:"1%"}}>
            First Name
          </p>
          <p style={{color:"#222222", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"16px", margin:"4%"}}>
           <p style={{color:"#C5C5C5",fontWeight:"bold", fontSize:"16px"}}>+1 <span style={{color:"#222222"}}>123456</span></p>
          </p>
        </div>
        </div>
        <div className="-sec" style={{marginTop:"5%"}}>
        <div className="-sec1"  style={{width:"47.5%", height:"65px", border:"1px solid #C5C5C5",}}>
        <p style={{color:"#C5C5C5", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"12px", padding:"1%"}}>
            First Name
          </p>
          <p style={{color:"#222222", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"16px", margin:"4%"}}>
            John <img src={arrow} style={{float:"right"}}/>
          </p>
        </div>
        <div className="-sec2" style={{width:"47.5%", height:"65px", border:"1px solid #C5C5C5", float:"right",
        marginTop:"-7.5%"}}>
          <p style={{color:"#C5C5C5", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"12px", padding:"1%"}}>
            First Name
          </p>
          <p style={{color:"#222222", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"16px", margin:"4%"}}>
            John <img src={arrow} style={{float:"right"}}/>
          </p>
        </div>
        </div>
        <div className="-sec" style={{marginTop:"5%"}}>
        <div className="-sec1" style={{width:"47.5%", height:"130px", border:"1px solid #C5C5C5",}}>
        <p style={{color:"#C5C5C5", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"12px", padding:"1%"}}>
            First Name
          </p>
          <p style={{color:"#222222", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"16px", margin:"4%"}}>
            John 
          </p>
          <p style={{color:"#C5C5C5", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"12px", padding:"1%",
          marginBottom:"-1%", float:"right"}}>
            180/500
          </p>
        </div>
        <div className="-sec2" style={{width:"47.5%", height:"65px", border:"1px solid #C5C5C5", float:"right",
        marginTop:"-15.5%"}}>
          <p style={{color:"#C5C5C5", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"12px", padding:"1%"}}>
            First Name
          </p>
          <p style={{color:"#222222", fontFamily:"Roboto Condensed", fontWeight:"bold", fontSize:"16px", margin:"4%"}}>
            John 
          </p>
        </div>
        </div>
        <div className="-sec" style={{marginTop:"5%"}}>
        <input type="checkbox" style={{marginRight:"2%", color:"#C5C5C5"}} />  
        Hide your public contact info (email and number) from other tenants<a><img src={mark} style={{marginBottom:"2%"}}/></a>
        </div>
        <div className="-sec" style={{marginTop:"0.5%"}}>
        <div className="mark-content">Only active tenants in the building that have the Aspen apps can 
see your public contact info (email and number) if you wish to 
show this info. <br></br>

We encourage you to leave this enabled to encourage collaboration 
and contact between all tenants!</div>
        </div>
        
</ul>
        </div>
      </div>
      {this.state.component && <ClickShow />}
      </div>
   )
  }
}
export default Profile;
