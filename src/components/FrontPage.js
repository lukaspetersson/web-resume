import React from 'react';
import './FrontPage.css';
import Resume from './Resume.js'
import WelcomeSection from './WelcomeSection.js'
import MeSection from './MeSection.js'
import AppsSection from './AppsSection.js'
import ServiceSection from './ServiceSection.js'
import NavigationBar from './NavigationBar.js'
import ContactSection from './ContactSection.js'
import DigitalEdgeSection from './DigitalEdgeSection.js'
import EricssonSection from './EricssonSection.js'
import OtherSection from './OtherSection.js'
import EducationSection from './EducationSection.js'

class FrontPage extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                resumeBackground:{
                    backgroundColor : "#98878f",
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
            this.refResume = React.createRef()
            this.refMe = React.createRef()
            this.refEducation = React.createRef()
            this.refDigitalEdge = React.createRef()
            this.refEricsson = React.createRef()
            this.refApps = React.createRef()
            this.refService = React.createRef()
            this.refOther = React.createRef()

            this.handleData = this.handleData.bind(this);
            this.handleScroll = this.handleScroll.bind(this);
            //this.changeNav = this.changeNav.bind(this);

        }
    // changeNav() {
    //     const body = this.bodyRef.current;
    //         this.setState({
    //             NavigationBarBackground:{
    //                 backgroundColor: body.scrollTop > 1800 ? "black":"transparent"
    //             },
    //             navShowSection:{
    //               me:{
    //                 borderBottom: (body.scrollTop >= 1200 && body.scrollTop < 1700) ? "7px solid white" : "0px"
    //               },
    //               web:{
    //                 borderBottom: (body.scrollTop >= 1700 && body.scrollTop < 2200) ? "7px solid white" : "0px"
    //               },
    //               apps:{
    //                 borderBottom: (body.scrollTop >= 2200 && body.scrollTop < 2700) ? "7px solid white" : "0px"
    //               },
    //               service:{
    //                 borderBottom: (body.scrollTop >= 2700 && body.scrollTop < 3300) ? "7px solid white" : "0px"
    //               }
    //
    //             },
    //         });
    // }
    handleData(data) {
        this.setState({
            resumeBackground:{
                backgroundColor : data,
            },
        });
    }
    handleScroll(data) {
        switch(data) {
            case "me":
                window.scrollTo(0, this.refMe.current.offsetTop);
                break;
            case "education":
                window.scrollTo(0, this.refEducation.current.offsetTop);
                break;
            case "digitalEdge":
                window.scrollTo(0, this.refDigitalEdge.current.offsetTop);
                break;
            case "ericsson":
                window.scrollTo(0, this.refEricsson.current.offsetTop);
                break;
            case "apps":
                window.scrollTo(0, this.refApps.current.offsetTop);
                break;
            case "service":
                window.scrollTo(0, this.refService.current.offsetTop);
                break;
            case "other":
                window.scrollTo(0, this.refOther.current.offsetTop);
                break;
        }
    }
    render() {
        return (

                <div className="body">
                        <div className="navigationMenu">
                            <NavigationBar scrollfromParent={this.handleScroll}/>
                        </div>
                        <div className="WelcomeSection">
                            <WelcomeSection scrollfromParent={this.handleScroll}/>
                        </div>
                        <div className="experiancesSections" ref={this.refMe}>
                            <MeSection/>
                        </div>
                        <div className="experiancesSections" ref={this.refResume}>
                            <Resume scrollfromParent={this.handleScroll} />
                        </div>
                        <div className="experiancesSections" ref={this.refEducation}>
                            <EducationSection/>
                        </div>
                        <div className="experiancesSections" ref={this.refDigitalEdge}>
                            <DigitalEdgeSection/>
                        </div>
                        <div className="experiancesSections" ref={this.refEricsson}>
                            <EricssonSection/>
                        </div>
                        <div className="experiancesSections" ref={this.refApps}>
                            <AppsSection/>
                        </div>
                        <div className="experiancesSections" ref={this.refService}>
                            <ServiceSection/>
                        </div>
                        <div className="experiancesSections" ref={this.refOther}>
                            <OtherSection/>
                        </div>
                        <div className="experiancesSections">
                            <ContactSection/>
                        </div>
                </div>
        );
    }
}

export default FrontPage;
