import React, {Component} from "react"
import ClickShow from "./dropdown.js"
import logo2 from "./logo2.svg";
import profile_pic from "./profile_pic.svg";
import notification from "./notification.svg"
 

class Nav extends Component {

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
    <div>
        <nav className="navbar navbar-dark bg-dark">
  <img className="logo2" src={logo2}/>
  <form  className="form-inline">
  <a onClick={this._show}>John Doe</a>
    
  <div onClick={this._show} style={{cursor:"pointer"}} className="pic">
      <img onClick={this._show} src={profile_pic} />
      </div>
      <img style={{cursor:"pointer"}} className="bell" src={notification} />
  </form>
  
</nav>
{this.state.component && <ClickShow/>}
</div>
)
    }   
}


export default Nav;