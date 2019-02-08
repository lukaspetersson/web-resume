import React from 'react';
import './Resume.css';
import profilePic from "./../img/profile_pic.png"
import football_logo from "./../img/football_logo.png"
import code_logo from "./../img/code_logo.png"
import politics_logo from "./../img/politics_logo.png"
import ContactResume from "./ContactResume.js";
import ExperianceResume from "./ExperianceResume.js";

class Resume extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                education:{
                    title:"Education",
                    color: "#0053c1",
                    colorlight: "#afcff7",
                    examples: [{
                        name: "Engelska Skolan",
                        year: "-2015",
                    },
                    {
                        name: "Cambridge IGCSE",
                        year: "2014-2015"
                    },
                    {
                        name: "Kungsholmens gymnasium",
                        year: "2015-2018"
                    }]
                },
                apps:{
                    title:"Mobile Apps Development",
                    color: "#128e2d",
                    colorlight: "#aee8ba",
                    examples: [{
                        name: "Brännbollräknare",
                        year: "2018"
                    },
                    {
                        name: "Falling Kitten",
                        year: "2018"
                    },
                    {
                        name: "BookLog",
                        year: "2018-2019",
                    }]
                },
                web:{
                    title:"Web and Robots",
                    color: "#6820a0",
                    colorlight: "#d8baef",
                    examples: [{
                        name: "Ericsson",
                        description: "Internship as web developer",
                        year: "Jan 2019 - present"
                    },
                    {
                        name: "Digital Edge",
                        description: "Consultant developer for web and robotics",
                        year: "Nov 2018 - present"
                    }]
                },
                service:{
                    title:"Jobs within Service",
                    color: "#8e1818",
                    colorlight: "#ffbfbf",
                    examples: [{
                        name: "Abbekås hamnkrog",
                        year: "summer 2015 + 2016"
                    },
                    {
                        name: "Drottningholms GK",
                        year: "2015 - 2017"
                    },
                    {
                        name: "Bedinge GK",
                        year: "summer 2015 + 2016"
                    },
                    {
                        name: "TUI",
                        year: "summer 2018"
                    },
                    {
                        name: "Hemköp",
                        year: "Oct-Nov 2018"
                    },
                    {
                        name: "Internationella Engelska Skolan",
                        year: "Oct-Nov 2018"
                    },
                    ]
                },
                other:{
                    title:"Other",
                    color: "#9b6500",
                    colorlight: "#fff5e2",
                    examples: [{
                        name: "Driving licence",
                        year: "Mar 2017"
                    },
                    {
                        name: "Erasmus +",
                        year: "Oct 2017"
                    },
                    {
                        name: "Unga forskare",
                        year: "Mar 2018"
                    },]
                },
            }
          }
    render() {
        return (
            <div >
                <div className="left_side">
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
                </div>
            </div>
        );
    }
}

export default Resume;
