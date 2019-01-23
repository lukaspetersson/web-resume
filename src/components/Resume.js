import React from 'react';
import './Resume.css';
import profilePic from "./../img/person.png"
import football_logo from "./../img/football.png"
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

function Hobbies(props){
    return (
        <div className="Hobbies">
            <h3>Hobbies</h3>
            <img src={football_logo}/>
            <img src={football_logo}/>
            <img src={football_logo}/>
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
            </div>
        );
    }
}

export default Resume;
