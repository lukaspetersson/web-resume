import React from 'react';
import './FrontPage.css';
import Resume from './Resume.js'
import WelcomeSection from './WelcomeSection.js'
import MeSection from './MeSection.js'
import WebSection from './WebSection.js'
import AppsSection from './AppsSection.js'
import ServiceSection from './ServiceSection.js'
import NavigationBar from './NavigationBar.js'
import ContactSection from './ContactSection.js'

class FrontPage extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                resumeBackground:{
                    backgroundColor : "#EAE5E2",
                },
                NavigationBarBackground:{
                    backgroundColor :"transparent",
                },
                navShowSection:{
                  me:{
                    borderBottom: "0px"
                  },
                  web:{
                    borderBottom: "0px"
                  },
                  apps:{
                    borderBottom: "0px"
                  },
                  service:{
                    borderBottom: "0px"
                  }

                },
            }
            this.handleData = this.handleData.bind(this);
            this.handleScroll = this.handleScroll.bind(this);
            this.changeNav = this.changeNav.bind(this);
            this.bodyRef = React.createRef();
        }
    changeNav() {
        const body = this.bodyRef.current;
            this.setState({
                NavigationBarBackground:{
                    backgroundColor: body.scrollTop > 1800 ? "black":"transparent"
                },
                navShowSection:{
                  me:{
                    borderBottom: (body.scrollTop >= 1200 && body.scrollTop < 1700) ? "7px solid white" : "0px"
                  },
                  web:{
                    borderBottom: (body.scrollTop >= 1700 && body.scrollTop < 2200) ? "7px solid white" : "0px"
                  },
                  apps:{
                    borderBottom: (body.scrollTop >= 2200 && body.scrollTop < 2700) ? "7px solid white" : "0px"
                  },
                  service:{
                    borderBottom: (body.scrollTop >= 2700 && body.scrollTop < 3300) ? "7px solid white" : "0px"
                  }

                },
            });
    }
    handleData(data) {
        this.setState({
            resumeBackground:{
                backgroundColor : data,
            },
        });
    }
    handleScroll(data) {
        const body = this.bodyRef.current;
        switch(data) {
          case "welcome":
            body.scrollTo(0, 0);
            break;
          case "resume":
            body.scrollTo(0, 500);
            break;
          case "me":
            body.scrollTo(0, 1300);
            break;
          case "web":
            body.scrollTo(0, 1800);
            break;
          case "apps":
            body.scrollTo(0, 2300);
            break;
          case "service":
            body.scrollTo(0, 2800);
            break;
        }
    }
    render() {
        return (
            <div className="FrontPage">
                {/*<div className="NavigationBar" style = {this.state.NavigationBarBackground}>
                    <NavigationBar scrollfromParent={this.handleScroll} section={this.state.navShowSection}/>
                </div>*/}
                <div className="body" ref={this.bodyRef} onScroll={this.changeNav}>
                    <div className="WelcomeSection">
                        <div >
                            <WelcomeSection scrollfromParent={this.handleScroll}/>
                        </div>
                    </div>
                    <div style = {this.state.resumeBackground} className="Resume">
                        <div className="paper">
                            <Resume handlerFromParent={this.handleData} scrollfromParent={this.handleScroll}/>
                        </div>
                    </div>
                        <div className="experiancesSections">
                            <MeSection/>
                        </div>
                        <div className="experiancesSections">
                                <WebSection/>
                        </div>
                        <div className="experiancesSections">
                            <AppsSection/>
                        </div>
                        <div className="experiancesSections">
                            <ServiceSection/>
                            </div>
                        <div className="experiancesSections">
                            <ContactSection/>
                        </div>
                </div>
            </div>
        );
    }
}

export default FrontPage;
