
import React, {Component} from "react"
import logo2 from './logo2.svg';
import './pages.css';
import 'bootstrap/dist/css/bootstrap.css';
import profile_pic from "./profile_pic.svg";
import './custom.scss'
import notification from "./notification.svg";
import Nav from "./navigation.js"
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
import ClickShow from "./dropdown.js";
//import ClickShow2 from "./sidebar.js";


class Dashboard extends Component {


 
render() {
  return (
    <div className="dashboard" id="wrapper">
     
      <Nav/>
      <main onClick={ClickShow._hide} className="overflow-auto">
      <h1 onClick={ClickShow._hide} className="page-title">Dashboard</h1>
      <div className="container">
        <div className="sidebar">
        <ul>
        <div style={{paddingTop: "5%"}}><a style={{paddingLeft: "1%"}}><img src={side1} className="sideSVG"/>  Dashboard</a></div>
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
        <div className="container-{breakpoint}" style={{width:"100%"}}>
        <div onClick={this._hide}  className="div1"></div>
      <div onClick={this._hide} className="div2"></div>
      <div onClick={this._hide} className="wideDiv"></div>
      </div>
      </div>
    {/*
      <div onClick={this._hide}  className="div1"></div>
      <div onClick={this._hide} className="div2"></div>
      <div onClick={this._hide} className="wideDiv"></div>
      {this.state.component && <ClickShow />}*/}
      </main>
      </div>
    
   ) 
   }
  }

export default Dashboard;