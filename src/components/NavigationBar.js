import React from 'react';
import './NavigationBar.css';

class NavigationBar extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                serviceBackground:{
                    backgroundColor :"transparent",
                    color:"white",
                },appsBackground:{
                    backgroundColor :"transparent",
                    color:"white",
                },webBackground:{
                    backgroundColor :"transparent",
                    color:"white",
                },
                meBackground:{
                    backgroundColor :"transparent",
                    color:"white",
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
                <h1 onClick={() => this.props.scrollfromParent("welcome")}>Lukas</h1>
                <p onMouseEnter={() => this.setBackground("service")} onMouseLeave={() => this.setState(this.baseState)} style = {{...this.state.serviceBackground,...this.props.section.service}} onClick={() => this.props.scrollfromParent("service")}>SERVICE JOBS</p>
                <p onMouseEnter={() => this.setBackground("apps")} onMouseLeave={() => this.setState(this.baseState)} style = {{...this.state.appsBackground,...this.props.section.apps}} onClick={() => this.props.scrollfromParent("apps")}>MOBILE APPS</p>
                <p onMouseEnter={() => this.setBackground("web")} onMouseLeave={() => this.setState(this.baseState)} style = {{...this.state.webBackground,...this.props.section.web}} onClick={() => this.props.scrollfromParent("web")}>WEB & ROBOTS</p>
                <p onMouseEnter={() => this.setBackground("me")} onMouseLeave={() => this.setState(this.baseState)} style = {{...this.state.meBackground,...this.props.section.me}} onClick={() => this.props.scrollfromParent("me")}>ABOUT ME</p>
            </div>
        );
    }
}

export default NavigationBar;
