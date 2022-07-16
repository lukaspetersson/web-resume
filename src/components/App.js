import React from 'react';
import './App.css';
import Content from './Content.js'
import Intro from './Intro.js'
import OtherJobs from './experiance/OtherJobs.js'
import DownloadMenu from './DownloadMenu.js'
import Contact from './Contact.js'
import EngineeringJobs from './experiance/EngineeringJobs.js'
import Skills from './experiance/Skills.js'
import Involvement from './experiance/Involvement.js'
import Education from './experiance/Education.js'
import Projects from './experiance/Projects.js'
import Writing from './experiance/Writing.js'

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
            this.refContent = React.createRef()
            this.refEducation = React.createRef()
            this.refEngineeringJobs = React.createRef()
            this.refProjects = React.createRef()
            this.refInvolvement = React.createRef()
            this.refSkills = React.createRef()
            this.refContact = React.createRef()
			this.refOtherJobs = React.createRef()
			this.refWriting = React.createRef()

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
            case "content":
                window.scrollTo(0, this.refContent.current.offsetTop);
                break;
            case "education":
                window.scrollTo(0, this.refEducation.current.offsetTop);
                break;
            case "engJobs":
                window.scrollTo(0, this.refEngineeringJobs.current.offsetTop);
                break;
            case "projects":
                window.scrollTo(0, this.refProjects.current.offsetTop);
                break;
            case "involvement":
                window.scrollTo(0, this.refInvolvement.current.offsetTop);
                break;
            case "skills":
                window.scrollTo(0, this.refSkills.current.offsetTop);
                break;
			case "otherJobs":
                window.scrollTo(0, this.refOtherJobs.current.offsetTop);
                break;
			case "writing":
                window.scrollTo(0, this.refWriting.current.offsetTop);
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
                        <div className="downloadMenu">
                            <DownloadMenu scrollfromParent={this.handleScroll} menuColor={this.state.menuColor}/>
                        </div>
                        <div className="Intro">
                            <Intro scrollfromParent={this.handleScroll} setCoverHeight={this.setCoverHeight}/>
                        </div>
                        <div className="experiancesSections" ref={this.refContent}>
                            <Content scrollfromParent={this.handleScroll} />
                        </div>
						<div className="experiancesSections" ref={this.refSkills}>
                            <Skills/>
                        </div>
                        <div className="experiancesSections" ref={this.refEngineeringJobs}>
                            <EngineeringJobs/>
                        </div>
						<div className="experiancesSections" ref={this.refEducation}>
                            <Education/>
                        </div>
						<div className="experiancesSections" ref={this.refInvolvement}>
                            <Involvement/>
                        </div>
						<div className="experiancesSections" ref={this.refProjects}>
                            <Projects/>
                        </div>
                        <div className="experiancesSections" ref={this.refWriting}>
                            <Writing/>
                        </div>
                        <div className="experiancesSections" ref={this.refOtherJobs}>
                            <OtherJobs/>
                        </div>
                        <div className="experiancesSections" ref={this.refContact}>
                            <Contact/>
                        </div>

                </div>
        );
    }
}

export default FrontPage;
