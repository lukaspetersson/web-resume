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
            <h3>Hobbies</h3>
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
                }
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
                        <ExperianceResume info = {this.state.apps}/>
                    </div>
                    <div onClick={this.moveTo} >
                        <ExperianceResume info = {this.state.education}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
