import React from 'react';
import './Resume.css';
// import profilePic from "./../img/profile_pic.png"
// import football_logo from "./../img/football_logo.png"
// import code_logo from "./../img/code_logo.png"
// import politics_logo from "./../img/politics_logo.png"
// import ContactResume from "./ContactResume.js";
// import ExperianceResume from "./ExperianceResume.js";
import BoxResume from "./BoxResume.js";
import pepperPic from "./../img/pepper_transparent.png"

class Resume extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                education: {
                    image:pepperPic,
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
                    image:pepperPic,
                    title: "Internship",
                    subTitle: ["Intern developer at Ericsson"],
                    color: "rgb(191, 33, 146)",
                    subColor: "rgba(112, 19, 85, 0.7)"
                },
                mobileApps: {
                    image:pepperPic,
                    title: "Mobile Development",
                    examples: ["Brännbollräknare", "BookLog", "FallingKitten"],
                    examplesYear: ["2018", "2018-2019", "2018"],
                    color: "rgb(143, 33, 191)",
                    subColor: "rgba(65, 15, 86, 0.7)"
                },
                serviceJobs: {
                    image:pepperPic,
                    title: "Service jobs",
                    examples: ["Abbekås hamnkrog", "Drottningholms GK", "Bedinge GK", "TUI", "Hemköp", "Engelska skolan"],
                    examplesYear: ["summer 2015 + 2015", "2015 - 2017", "summer 2017", "summer 2018", "Oct-Nov 2018" , "Oct-Nov 2018"],
                    color: "rgb(33, 191, 117)",
                    subColor: "rgba(13, 86, 52, 0.7)"
                },
                other: {
                    image:pepperPic,
                    title: "Other",
                    examples: ["Driving licence", "Erasmus +", "Unga forskare"],
                    examplesYear: ["2017", "2017", "2018"],
                    color: "rgb(191, 183, 33)",
                    subColor: "rgba(102, 98, 15, 0.7)"
                },
            }
          }
    render() {
        return (
            <div >
            <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")}>
                <BoxResume info={this.state.education}/>
            </div>
            <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")}>
                <BoxResume info={this.state.digitalEdge}/>
            </div>
            <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")}>
                <BoxResume info={this.state.ericsson}/>
            </div>
            <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")}>
                <BoxResume info={this.state.mobileApps}/>
            </div>
            <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")}>
                <BoxResume info={this.state.serviceJobs}/>
            </div>
            <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")}>
                <BoxResume info={this.state.other}/>
            </div>


                {/*<div className="left_side">
                    <div onClick={() => this.props.scrollfromParent("me")} >
                      <div className="Me">
                          <img className="profilePic" src={profilePic}/>
                          <p className="name">Lukas Petersson</p>
                          <p className="profession">App and Web Developer</p>
                      </div>
                    </div>
                    <div onClick={this.moveTo} >
                        <ContactResume />
                    </div>
                    <div onClick={() => this.props.scrollfromParent("me")} >
                      <div className="Hobbies">
                          <h2>Hobbies</h2>
                          <img src={football_logo}/>
                          <img src={code_logo}/>
                          <img src={politics_logo}/>
                      </div>
                    </div>
                </div>
                <div className="right_side" onMouseLeave={() => this.props.handlerFromParent("#EAE5E2")}>
                    <div onMouseEnter={() => this.props.handlerFromParent(this.state.education.color)} onClick={() => this.props.scrollfromParent("me")} >
                        <ExperianceResume info = {this.state.education}/>
                    </div>
                    <div onMouseEnter={() => this.props.handlerFromParent(this.state.web.color)} onClick={() => this.props.scrollfromParent("web")}>
                        <ExperianceResume info = {this.state.web}/>
                    </div>
                    <div onMouseEnter={() => this.props.handlerFromParent(this.state.apps.color)} onClick={() => this.props.scrollfromParent("apps")}>
                        <ExperianceResume info = {this.state.apps}/>
                    </div>
                    <div onMouseEnter={() => this.props.handlerFromParent(this.state.service.color)} onClick={() => this.props.scrollfromParent("service")}>
                        <ExperianceResume info = {this.state.service}/>
                    </div>
                    <div onMouseEnter={() => this.props.handlerFromParent(this.state.other.color)} onClick={() => this.props.scrollfromParent("me")}>
                        <ExperianceResume info = {this.state.other}/>
                    </div>
                </div>*/}
            </div>
        );
    }
}

export default Resume;
