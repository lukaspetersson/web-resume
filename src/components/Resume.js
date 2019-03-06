import React from 'react';
import './Resume.css';
import BoxResume from "./BoxResume.js";
import pepperPic from "./../img/pepper_transparent.png"
import ericssonLogo from "./../img/ericsson_logo.png"
import educationLogo from "./../img/education_logo.png"
import bamseLogo from "./../img/bamse_logo.png"
import erasmusLogo from "./../img/erasmus_logo.jpg"
import booklogLogo from "./../img/booklog.png"

class Resume extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                boxSize: 100/3,
                experiance:{
                    education: {
                        image:educationLogo,
                        title: "Education",
                        examples: ["Engelska Skolan", "Cambridge IGCSE", "Kungsholmens gymnasium"],
                        examplesYear: ["-2015", "2014-2015", "2015-2018"],
                        color: "rgb(34, 94, 191)",
                        subColor: "rgba(19, 54, 109, 0.7)"
                    },
                    digitalEdge: {
                        image:pepperPic,
                        title: "Robots",
                        subTitle: ["Consultant developer for Digital Edge"],
                        color: "rgb(191, 33, 33)",
                        subColor: "rgba(140, 8, 8, 0.7)"
                    },
                    ericsson: {
                        image:ericssonLogo,
                        title: "Internship",
                        subTitle: ["Intern developer at Ericsson"],
                        color: "rgb(191, 33, 146)",
                        subColor: "rgba(112, 19, 85, 0.7)"
                    },
                    mobileApps: {
                        image:booklogLogo,
                        title: "Mobile Development",
                        examples: ["Brännbollräknare", "BookLog", "FallingKitten"],
                        examplesYear: ["2018", "2018-2019", "2018"],
                        color: "rgb(143, 33, 191)",
                        subColor: "rgba(65, 15, 86, 0.7)"
                    },
                    serviceJobs: {
                        image:bamseLogo,
                        title: "Service jobs",
                        examples: ["Abbekås hamnkrog", "Drottningholms GK", "Bedinge GK", "TUI", "Hemköp", "Engelska skolan"],
                        examplesYear: ["summer 2015 + 2015", "2015 - 2017", "summer 2017", "summer 2018", "Oct-Nov 2018" , "Oct-Nov 2018"],
                        color: "rgb(33, 191, 117)",
                        subColor: "rgba(13, 86, 52, 0.7)"
                    },
                    other: {
                        image:erasmusLogo,
                        title: "Other",
                        examples: ["Driving licence", "Erasmus +", "Unga forskare"],
                        examplesYear: ["2017", "2017", "2018"],
                        color: "rgb(191, 183, 33)",
                        subColor: "rgba(102, 98, 15, 0.7)"
                    },
                }
            }
            this.resizeWindow = this.resizeWindow.bind(this)
          }
      componentDidMount(){
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
          }else if(window.innerWidth < 800 && window.innerWidth > 400){
              this.setState({
                boxSize: 100/2
              })
          }else if(window.innerWidth < 400){
              this.setState({
                boxSize: 100
              })
          }
      }
    render() {
        return (
            <div >
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("education")} style={{height: this.state.boxSize+"vw", width: this.state.boxSize+"%"}}>
                    <BoxResume info={this.state.experiance.education}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("digitalEdge")} style={{height: this.state.boxSize+"vw", width: this.state.boxSize+"%"}}>
                    <BoxResume info={this.state.experiance.digitalEdge}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("ericsson")} style={{height: this.state.boxSize+"vw", width: this.state.boxSize+"%"}}>
                    <BoxResume info={this.state.experiance.ericsson}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")} style={{height: this.state.boxSize+"vw", width: this.state.boxSize+"%"}}>
                    <BoxResume info={this.state.experiance.mobileApps}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("service")} style={{height: this.state.boxSize+"vw", width: this.state.boxSize+"%"}}>
                    <BoxResume info={this.state.experiance.serviceJobs}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("other")} style={{height: this.state.boxSize+"vw", width: this.state.boxSize+"%"}}>
                    <BoxResume info={this.state.experiance.other}/>
                </div>
            </div>
        );
    }
}

export default Resume;
