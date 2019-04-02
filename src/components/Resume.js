import React from 'react';
import './Resume.css';
import BoxResume from "./BoxResume.js";
import pepperPic from "./../img/pepper_transparent.png"
import ericssonLogo from "./../img/ericsson_logo.svg"
import educationLogo from "./../img/lund_logo.png"
import bamseLogo from "./../img/bamse_logo.png"
import moreLogo from "./../img/more_icon.png"
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
                        examples: ["Lund University","Kungsholmens gymnasium","Cambridge IGCSE", "Engelska Skolan"],
                        examplesYear: ["2019 - " , "2015 - 2018", "2013 - 2015", " - 2015"],
                        color: "rgb(34, 94, 191)",
                        subColor: "rgba(19, 54, 109, 0.7)"
                    },
                    digitalEdge: {
                        image:pepperPic,
                        title: "Work - Programming",
                        examples: ["Digital Edge"],
                        examplesYear: ["Nov 2018 - present"],
                        color: "rgb(191, 33, 33)",
                        subColor: "rgba(140, 8, 8, 0.7)"
                    },
                    ericsson: {
                        image:ericssonLogo,
                        title: "Internship - Programming",
                        examples: ["Ericsson"],
                        examplesYear: ["Jan 2019 - present"],
                        color: "rgb(191, 33, 146)",
                        subColor: "rgba(112, 19, 85, 0.7)"
                    },
                    mobileApps: {
                        image:booklogLogo,
                        title: "Android Apps",
                        examples: ["Item Tracker", "BookLog","Falling Kitten", "Brännbollräknare"],
                        examplesYear: ["2019", "2019", "2018", "2018"],
                        color: "rgb(143, 33, 191)",
                        subColor: "rgba(65, 15, 86, 0.7)"
                    },
                    serviceJobs: {
                        image:bamseLogo,
                        title: "Work - Service",
                        examples: ["Engelska skolan", "Hemköp",  "TUI", "Bedinge GK", "Drottningholms GK", "Abbekås hamnkrog"],
                        examplesYear: ["Oct - Nov 2018" , "Oct - Nov 2018", "summer 2018", "summer 2017",  "2015 - 2017", "summer 2015 & 2016"],
                        color: "rgb(33, 191, 117)",
                        subColor: "rgba(13, 86, 52, 0.7)"
                    },
                    other: {
                        image:moreLogo,
                        title: "Other",
                        examples: ["Liberal Youth party", "Alexa development","Brommapojkarna", "Unga forskare" ,"Erasmus +","Driver's license"],
                        examplesYear: ["2018 - present", "2019", "2004 - 2019", "2018", "2017", "2017"],
                        color: "rgb(191, 183, 33)",
                        subColor: "rgba(102, 98, 15, 0.7)"
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
          }else if(window.innerWidth < 800 && window.innerWidth > 410){
              this.setState({
                boxSize: 100/2
              })
          }else if(window.innerWidth < 410){
              this.setState({
                boxSize: 100
              })
          }
      }
    render() {
        var boxStyle ={
            height: this.state.boxSize+"vw",
            width: this.state.boxSize+"%",
            fontSize: this.state.boxSize/30+"vw",
            lineHeight: this.state.boxSize/30+"vw",
        }
        return (
            <div >
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("education")} style={boxStyle}>
                    <BoxResume info={this.state.experiance.education}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("digitalEdge")} style={boxStyle}>
                    <BoxResume info={this.state.experiance.digitalEdge}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("ericsson")} style={boxStyle}>
                    <BoxResume info={this.state.experiance.ericsson}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")}style={boxStyle}>
                    <BoxResume info={this.state.experiance.mobileApps}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("service")} style={boxStyle}>
                    <BoxResume info={this.state.experiance.serviceJobs}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("other")} style={boxStyle}>
                    <BoxResume info={this.state.experiance.other}/>
                </div>
            </div>
        );
    }
}

export default Resume;
