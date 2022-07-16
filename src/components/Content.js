import React from 'react';
import './Content.css';
import ContentBox from "./ContentBox.js";
import satelitePic from "./../img/satelite.png"
import educationLogo from "./../img/lund_logo.png"
import bamseLogo from "./../img/bamse_logo.png"
import c_logo from "./../img/c_logo.png"
import android_logo from "./../img/android_logo.png"
import formula from "./../img/formula_student.png"


class Resume extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                boxSize: 100/3,
                experiance:{
					skills: {
                        image:c_logo,
                        title: "Skills",
                        examples: ["Java","Python", "C++", "Mobile", "Backend", "Data Science"],
                        examplesYear: ["Linear Algebra","Calculus","Control Theory", "Physics", "Machine Learning", "Statistics"],
                        color: "rgb(34, 94, 191)",
                        subColor: "rgba(19, 54, 109, 0.7)"
                    },
                    education: {
                        image:educationLogo,
                        title: "Education",
                        examples: ["Engineering Physics", "Engineering Mathematics", "ETH Exchange Year"],
                        examplesYear: ["Aug 2019 - May 2024", "Aug 2019 - May 2024","Sept 2022 - Aug 2023"],
                        color: "rgb(191, 183, 33)",
                        subColor:"rgba(102, 98, 15, 0.7)"
                    },
                    engJobs: {
                        image:satelitePic,
                        title: "Professional Experience",
                        examples: ["Software Engineering Intern", "Engineering Intern", "Flight Software Intern","IT Consultant", "Junior Robotics Developer", "Software Developer Intern"],
                        examplesYear: ["June 2022 - Sept 2022", "March 2022 - June 2022", "May 2021 - Sept 2021", "Nov 2019 - Jan 2021", "Nov 2018 - Jul 2019", "Jan 2019 - May 2019"],
                        color: "rgb(191, 33, 33)",
                        subColor: "rgba(140, 8, 8, 0.7)"
                    },
					projects: {
                        image:android_logo,
                        title: "Projects & Competitions",
                        examples: ["Competitive Programming","Computer Vision Project","Competitive Programming", "Shaolin Kunf Fu", "Pitch for Senior Executives", "First Android Project", "More Android Apps"],
                        examplesYear: ["2021", "2021","2020", "2019", "2019", "2018 - 2019", "2018 - Present"],
                        color: "rgb(143, 33, 191)",
                        subColor: "rgba(65, 15, 86, 0.7)"
                    },
					involvement: {
                        image:formula,
                        title: "Extracurricular",
                        examples: ["Robotics Software Specialist", "Self Driving Engineer", "Lund Startup Fellowship"],
                        examplesYear: ["July 2022 - Present", "Aug 2021 - July 2022", "Nov 2019 - June 2020"],
                        color: "rgb(33, 191, 117)",
                        subColor: "rgba(13, 86, 52, 0.7)"
                    },
                    writing: {
                        image:bamseLogo,
                        title: "Blog & Publications",
                        examples: ["ML & Music Blog", "Conference Publication"],
                        examplesYear: ["2022 - Present" , "2021"],
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
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("engJobs")} style={boxStyle}>
                    <ContentBox info={this.state.experiance.engJobs}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("education")} style={boxStyle}>
                    <ContentBox info={this.state.experiance.education}/>
                </div>
				<div className="boxContainer" onClick={() => this.props.scrollfromParent("involvement")}style={boxStyle}>
					<ContentBox info={this.state.experiance.involvement}/>
				</div>
				<div className="boxContainer" onClick={() => this.props.scrollfromParent("projects")}style={boxStyle}>
					<ContentBox info={this.state.experiance.projects}/>
				</div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("writing")} style={boxStyle}>
                    <ContentBox info={this.state.experiance.writing}/>
                </div>
            </div>
        );
    }
}

export default Resume;
