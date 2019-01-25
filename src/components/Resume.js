import React from 'react';
import './Resume.css';
import profilePic from "./../img/person.png"
import football_logo from "./../img/football_logo.png"
import code_logo from "./../img/code_logo.png"
import politics_logo from "./../img/politics_logo.png"
import ContactResume from "./ContactResume.js";
import ExperianceResume from "./ExperianceResume.js";
import apps from "./../img/apps.jpg"
import education from "./../img/education.jpg"
import erasmus from "./../img/erasmus.jpg"
import pepper from "./../img/pepper.jpg"
import service from "./../img/service.jpg"
import owl from "./../img/owl.jpg"
import scrollToComponent from 'react-scroll-to-component';


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
                image: owl,
                education:{
                    title:"Education",
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
                        description: "Internship as web developer",
                        year: "Jan 2019 - now"
                    },
                    {
                        name: "Digital Edge",
                        description: "Consultant developer for web and robotics",
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
                        name: "Internationella Engelska Skolan",
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
        this.myRef = React.createRef()

    }

    moveTo(){
        const node = this.myRef.current;
        node.scrollTo(0, 110);
    }
    render() {
        return (
            <div ref={this.myRef} >
                <div className="left_side" >
                    <div  >
                        <Me onClick={this.moveTo}/>
                    </div>
                    <div onClick={this.moveTo} >
                        <ContactResume />
                    </div>
                    <div onClick={() => window.scrollTo(0, 10)} >
                        <Hobbies />
                    </div>
                </div>
                <div className="right_side" >
                    <div onMouseEnter={() => this.props.handlerFromParent(education)} onClick={() => window.scrollTo(0, 110)} >
                        <ExperianceResume info = {this.state.education}/>
                    </div>
                    <div onMouseEnter={() => this.props.handlerFromParent(apps)} onClick={() => window.scrollTo(0, 110)}>
                        <ExperianceResume info = {this.state.apps}/>
                    </div>
                    <div onMouseEnter={() => this.props.handlerFromParent(pepper)} onClick={() => window.scrollTo(0, 110)}>
                        <ExperianceResume info = {this.state.web}/>
                    </div>
                    <div onMouseEnter={() => this.props.handlerFromParent(service)} onClick={() => window.scrollTo(0, 110)}>
                        <ExperianceResume info = {this.state.service}/>
                    </div>
                    <div onMouseEnter={() => this.props.handlerFromParent(erasmus)} onClick={() => window.scrollTo(0, 110)}>
                        <ExperianceResume info = {this.state.other}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
