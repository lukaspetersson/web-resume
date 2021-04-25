import React from 'react';
import './Content.css';
import ContentBox from "./ContentBox.js";
import pepperPic from "./../img/pepper_transparent.png"
import educationLogo from "./../img/lund_logo.png"
import bamseLogo from "./../img/bamse_logo.png"
import c_logo from "./../img/c_logo.png"
import android_logo from "./../img/android_logo.png"
import fsek from "./../img/fsek.png"


class Resume extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                boxSize: 100/3,
                experiance:{
					skills: {
                        image:c_logo,
                        title: "Skills",
                        examples: ["Java","Python","JavaScript", "C++", "Matlab", "Kotlin"],
                        examplesYear: ["Android","ReactJS","Git", "Backend", "Algorithms","SQL", "TensorFlow"],
                        color: "rgb(34, 94, 191)",
                        subColor: "rgba(19, 54, 109, 0.7)"
                    },
                    education: {
                        image:educationLogo,
                        title: "Education",
                        examples: ["Engineering Physics","Fly a Rocket!","Computer Science", "Philosophy", "Lund Startup Fellowship"],
                        examplesYear: ["Aug 2019 - Present", "Nov 2020 - Present" , "Jan 2020 - Present", "Summer 2019", "Okt 2019 - Jun 2020"],
                        color: "rgb(191, 183, 33)",
                        subColor:"rgba(102, 98, 15, 0.7)"
                    },
                    engJobs: {
                        image:pepperPic,
                        title: "Professional Experience",
                        examples: ["Flight Software Intern","IT Consultant", "Junior Software Developer", "Software Developer Intern"],
                        examplesYear: ["Summer 2021", "Nov 2019 - Present", "Nov 2018 - Jul 2019", "Jan 2019 - May 2019"],
                        color: "rgb(191, 33, 33)",
                        subColor: "rgba(140, 8, 8, 0.7)"
                    },
					projects: {
                        image:android_logo,
                        title: "Projects & Competitions",
                        examples: ["Programming Competition", "Shaolin Kunf Fu", "Pitch for Senior Executives", "First Android Projects", "More Android Apps","Science Competition"],
                        examplesYear: ["2020", "2019", "2019", "2018 - 2019", "2018 - Present", "2018"],
                        color: "rgb(143, 33, 191)",
                        subColor: "rgba(65, 15, 86, 0.7)"
                    },
					involvement: {
                        image:fsek,
                        title: "Volunteer & Involvement",
                        examples: ["Engineers Without Borders", "Mentor", "Farad"],
                        examplesYear: ["Jul 2020 - Present", "Sep 2020", "Okt 2019 - Feb 2020"],
                        color: "rgb(33, 191, 117)",
                        subColor: "rgba(13, 86, 52, 0.7)"
                    },
                    serviceJobs: {
                        image:bamseLogo,
                        title: "Other Jobs",
                        examples: ["Substitute teacher", "Sales Assistant ",  "Entertainer", "Waiter", "Golf coach", "Dishwasher"],
                        examplesYear: ["Oct - Nov 2018" , "Oct - Nov 2018", "Summer 2018", "Summer 2017",  "2015 - 2017", "Summer 2015 & 2016"],
                        color: "rgb(191, 33, 146)",
                        subColor: "rgba(112, 19, 85, 0.7)"
                    },
                }
            }
            this.resizeWindow = this.resizeWindow.bind(this)
          }
      componentDidMount(){
          this.resizeWindow()
           window.addEventListener('resize', this.resizeWindow)
      }

      componentWillUnmount() {
        window.removeEventListener('resize', this.resizeWindow)
      }
      resizeWindow = ()=>{
          if(window.innerWidth > 800){
              this.setState({
                boxSize: 100/3
              })
          }else if(window.innerWidth < 800 && window.innerWidth > 460){
              this.setState({
                boxSize: 100/2
              })
          }else if(window.innerWidth < 460){
              this.setState({
                boxSize: 100
              })
          }
      }
    render() {
        var boxStyle ={
            height: this.state.boxSize+"vw",
            width: this.state.boxSize+"%",
            fontSize: this.state.boxSize/32+"vw",
            lineHeight: this.state.boxSize/30+"vw",
        }
        return (
            <div >
				<div className="boxContainer" onClick={() => this.props.scrollfromParent("skills")} style={boxStyle}>
                    <ContentBox info={this.state.experiance.skills}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("education")} style={boxStyle}>
                    <ContentBox info={this.state.experiance.education}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("engJobs")} style={boxStyle}>
                    <ContentBox info={this.state.experiance.engJobs}/>
                </div>
				<div className="boxContainer" onClick={() => this.props.scrollfromParent("projects")}style={boxStyle}>
					<ContentBox info={this.state.experiance.projects}/>
				</div>
				<div className="boxContainer" onClick={() => this.props.scrollfromParent("involvement")}style={boxStyle}>
					<ContentBox info={this.state.experiance.involvement}/>
				</div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("otherJobs")} style={boxStyle}>
                    <ContentBox info={this.state.experiance.serviceJobs}/>
                </div>
            </div>
        );
    }
}

export default Resume;
