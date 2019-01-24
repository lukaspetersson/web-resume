import React from 'react';
import './Resume.css';
import profilePic from "./../img/person.png"
import football_logo from "./../img/football_logo.png"
import code_logo from "./../img/code_logo.png"
import politics_logo from "./../img/politics_logo.png"
import ContactResume from "./ContactResume.js";
import ExperianceResume from "./ExperianceResume.js";

function Me(props){
    return (
        <div className="Me">
            <img className="profilePic" src={profilePic}/>
            <p className="name">Lukas Petersson</p>
            <p className="profession">App and Web Developer</p>
        </div>
    )
}

function Hobbies(props){
    return (
        <div className="Hobbies">
            <h2>Hobbies</h2>
            <img src={football_logo}/>
            <img src={code_logo}/>
            <img src={politics_logo}/>
        </div>
    )
}

function hej(){
    console.log("HHHHHHHHHHHHHHHHHHHHHHHhh")
}


class Resume extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                education:{
                    title:"Education",
                    examples: [{
                        name: "Engelska Skolan",
                        year: "-2015",
                    },
                    {
                        name: "IGCSE",
                        year: "2014-2015"
                    },
                    {
                        name: "Kungsholmens gymnasium",
                        year: "2015-2018"
                    }]
                },
                apps:{
                    title:"Mobile Apps",
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
                    examples: [{
                        name: "Ericsson",
                        description: "internship as web developer",
                        year: "Jan 2019 - now"
                    },
                    {
                        name: "Digital Edge",
                        description: "consultant developer for web and robotics",
                        year: "Nov 2018 - now"
                    }]
                },
                service:{
                    title:"Service",
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
                        name: "IESB",
                        year: "Oct-Nov 2018"
                    },
                    ]
                },
                other:{
                    title:"Other",
                    examples: [{
                        name: "Driver licence",
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
        this.moveTo = this.moveTo.bind(this)
    }

    moveTo(){
        window.scrollBy(0, 110);
    }
    render() {
        return (
            <div>
                <div className="left_side" >
                    <div onClick={this.moveTo} >
                        <Me />
                    </div>
                    <div onClick={this.moveTo} >
                        <ContactResume />
                    </div>
                    <div onClick={this.moveTo} >
                        <Hobbies />
                    </div>
                </div>
                <div className="right_side" >
                    <div onClick={this.moveTo} >
                        <ExperianceResume info = {this.state.education}/>
                    </div>
                    <div onClick={this.moveTo} >
                        <ExperianceResume info = {this.state.apps}/>
                    </div>
                    <div onClick={this.moveTo} >
                        <ExperianceResume info = {this.state.web}/>
                    </div>
                    <div onClick={this.moveTo} >
                        <ExperianceResume info = {this.state.service}/>
                    </div>
                    <div onClick={this.moveTo} >
                        <ExperianceResume info = {this.state.other}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
