import React from 'react';
import './NavigationBar.css';

class NavigationBar extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                serviceBackground:{
                    backgroundColor :"transparent",
                    color:"white"
                },appsBackground:{
                    backgroundColor :"transparent",
                    color:"white"
                },webBackground:{
                    backgroundColor :"transparent",
                    color:"white"
                },
                meBackground:{
                    backgroundColor :"transparent",
                    color:"white"
                }
            }
            this.baseState = this.state
    }
    setBackground(section) {
        switch(section) {
          case "me":
          this.setState({
              meBackground:{
                  backgroundColor :"white",
                  color:"black"
              }
          });
            break;
          case "web":
          this.setState({
              webBackground:{
                  backgroundColor :"white",
                  color:"black"
              }
          });
            break;
          case "apps":
          this.setState({
              appsBackground:{
                  backgroundColor :"white",
                  color:"black"
              }
          });
            break;
          case "service":
          this.setState({
              serviceBackground:{
                  backgroundColor :"white",
                  color:"black"
              }
          });
            break;
        }
    }
    render() {
        return (
            <div className="bar">
                <h1 onClick={() => this.props.scrollfromParent("welcome")}>LP</h1>
                <p onMouseEnter={() => this.setBackground("service")} onMouseLeave={() => this.setState(this.baseState)} style = {this.state.serviceBackground} onClick={() => this.props.scrollfromParent("service")}>SERVICE</p>
                <p onMouseEnter={() => this.setBackground("apps")} onMouseLeave={() => this.setState(this.baseState)} style = {this.state.appsBackground} onClick={() => this.props.scrollfromParent("apps")}>APPS</p>
                <p onMouseEnter={() => this.setBackground("web")} onMouseLeave={() => this.setState(this.baseState)} style = {this.state.webBackground} onClick={() => this.props.scrollfromParent("web")}>WEB</p>
                <p onMouseEnter={() => this.setBackground("me")} onMouseLeave={() => this.setState(this.baseState)} style = {this.state.meBackground} onClick={() => this.props.scrollfromParent("me")}>ME</p>

            </div>
        );
    }
}

export default NavigationBar;
