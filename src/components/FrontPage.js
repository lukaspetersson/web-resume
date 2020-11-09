import React from 'react';
import './FrontPage.css';
import Resume from './Resume.js'
import WelcomeSection from './WelcomeSection.js'
import AppsSection from './AppsSection.js'
import ServiceSection from './ServiceSection.js'
import NavigationBar from './NavigationBar.js'
import ContactSection from './ContactSection.js'
import ProgWorkSection from './ProgWorkSection.js'
import EricssonSection from './EricssonSection.js'
import OtherSection from './OtherSection.js'
import SkillsSection from './SkillsSection.js'
import NewEducation from './NewEducation.js'
import up_icon from "./../img/up_icon.svg"

class FrontPage extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                NavigationBarBackground:{
                    backgroundColor :"transparent",
                },
                menuColor:"#ffffff",
                coverHeight: 500,
            }
            this.refResume = React.createRef()
            this.refResume = React.createRef()
            this.refEducation = React.createRef()
            this.refDigitalEdge = React.createRef()
            this.refEricsson = React.createRef()
            this.refApps = React.createRef()
            this.refService = React.createRef()
            this.refOther = React.createRef()
            this.refContact = React.createRef()

            this.handleScroll = this.handleScroll.bind(this);
            this.setCoverHeight = this.setCoverHeight.bind(this);
        }

        componentDidMount(){
             window.addEventListener('scroll', this.scrollWindow)
        }

        componentWillUnmount() {
          window.removeEventListener('scroll', this.scrollWindow)
        }
        scrollWindow = () =>{
            this.setState({
              menuColor: window.pageYOffset > this.state.coverHeight? "#94C3F1" : "#ffffff",
            })
        }

        setCoverHeight(height){
          this.setState({coverHeight: height})
        }

    handleScroll(data) {
        switch(data) {
            case "top":
                window.scrollTo(0, 0);
                break;
            case "resume":
                window.scrollTo(0, this.refResume.current.offsetTop);
                break;
            case "education":
                window.scrollTo(0, this.refEducation.current.offsetTop);
                break;
            case "progWork":
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

        var body = document.body;
        var html = document.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight,
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
        var atBottom = ((window.innerHeight + window.pageYOffset) >= (height - 30));
        try{
          if(window.pageYOffset > this.refEducation.current.offsetTop - window.innerHeight/2){
            var sectionUp = "";
            var sectionDown = "";
            if(window.pageYOffset < this.refDigitalEdge.current.offsetTop - this.refEducation.current.clientHeight/2){
                sectionUp = "resume";
                sectionDown = "digitalEdge";
            }else if(window.pageYOffset < this.refEricsson.current.offsetTop - this.refDigitalEdge.current.clientHeight/2){
                sectionUp = "education";
                sectionDown = "ericsson";
            }else if(window.pageYOffset < this.refApps.current.offsetTop - this.refEricsson.current.clientHeight/2){
              sectionUp = "digitalEdge";
              sectionDown = "apps";
            }else if(window.pageYOffset < this.refService.current.offsetTop - this.refApps.current.clientHeight/2){
              sectionUp = "ericsson";
              sectionDown = "service";
            }else if(window.pageYOffset < this.refOther.current.offsetTop - this.refService.current.clientHeight/2){
              sectionUp = "apps";
              sectionDown = "other";
          }else if(!atBottom){
              sectionUp = "service";
              sectionDown = "contact";
            }else{
                //contact and service is in same page, no need to scroll between
                if(this.refOther.current.clientHeight+this.refContact.current.clientHeight < window.innerHeight){
                    sectionUp = "service";
                }else{
                    sectionUp = "other";
                }
            }
            if(sectionDown){
              var downNav = <img alt="" src={up_icon} id="downNav" style={{transform: "rotate(180deg)"}} onClick={()=> {this.handleScroll(sectionDown)}}/>

            }
            var upNav = <img alt="" src={up_icon} id="upNav" onClick={()=> {this.handleScroll(sectionUp)}}/>
          }
        }catch{}
        return (
                <div className="body">
                        <div className="navigationMenu">
                            <NavigationBar scrollfromParent={this.handleScroll} menuColor={this.state.menuColor}/>
                        </div>
                        <div className="WelcomeSection">
                            <WelcomeSection scrollfromParent={this.handleScroll} setCoverHeight={this.setCoverHeight}/>
                        </div>
                        <div className="experiancesSections" ref={this.refResume}>
                            <Resume scrollfromParent={this.handleScroll} />
                        </div>
						<div className="experiancesSections" ref={this.refOther}>
                            <SkillsSection/>
                        </div>
						<div className="experiancesSections" ref={this.refEducation}>
                            <NewEducation/>
                        </div>
                        <div className="experiancesSections" ref={this.refDigitalEdge}>
                            <ProgWorkSection/>
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
                        <div className="navigationButtons">
                            {downNav}
                            {upNav}
                        </div>

                </div>
        );
    }
}

export default FrontPage;
