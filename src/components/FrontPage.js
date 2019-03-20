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
                NavigationBarBackground:{
                    backgroundColor :"transparent",
                },
                menuColor:"var(--white)"
            }
            this.refResume = React.createRef()
            this.refMe = React.createRef()
            this.refEducation = React.createRef()
            this.refDigitalEdge = React.createRef()
            this.refEricsson = React.createRef()
            this.refApps = React.createRef()
            this.refService = React.createRef()
            this.refOther = React.createRef()
            this.refContact = React.createRef()

            this.handleScroll = this.handleScroll.bind(this);
        }

        componentDidMount(){
             window.addEventListener('scroll', this.scrollWindow)
        }

        componentWillUnmount() {
          window.removeEventListener('scroll', this.scrollWindow)
        }
        scrollWindow = () =>{
            this.setState({
              menuColor: window.pageYOffset > 450? "var(--sky)" : "var(--white)",
            })
        }

    handleScroll(data) {
        switch(data) {
            case "top":
                window.scrollTo(0, 0);
                break;
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
            case "contact":
                window.scrollTo(0, this.refContact.current.offsetTop);
                break;
            default:
        }
    }
    render() {
        return (

                <div className="body">
                        <div className="navigationMenu">
                            <NavigationBar scrollfromParent={this.handleScroll} menuColor={this.state.menuColor}/>
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
                        <div className="experiancesSections" ref={this.refContact}>
                            <ContactSection/>
                        </div>
                </div>
        );
    }
}

export default FrontPage;
