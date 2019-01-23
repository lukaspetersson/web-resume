import React from 'react';
import './Resume.css';
import profilePic from "./../img/person.png"
import ContactResume from "./ContactResume.js";

function Me(props){
    return (
        <div className="Me">
            <img className="profilePic" src={profilePic}/>
            <p className="name">Lukas Petersson</p>
            <p className="profession">App and Web Developer</p>
        </div>
    )
}

function hej(){
    console.log("HHHHHHHHHHHHHHHHHHHHHHHhh")
}


class Resume extends React.Component {
    constructor(props){
            super(props)
        this.moveTo = this.moveTo.bind(this)
    }

    moveTo(){
        window.scrollBy(0, 110);
    }
    render() {
        return (
            <div className="paper" >
                <div onClick={this.moveTo} >
                    <Me />
                </div>
                <div onClick={this.moveTo} >
                    <ContactResume />
                </div>
            </div>
        );
    }
}

export default Resume;
