import React from 'react';
import './style.css';
import profilePic from "./img/person.png"
import email_logo from "./img/email_logo.png"
import phone_logo from "./img/phone_logo.png"
import linkedin_logo from "./img/linkedin_logo.png"

function Me(props){
    return (
        <div className="Me">
            <img className="profilePic" src={profilePic}/>
            <p className="name">Lukas Petersson</p>
            <p className="profession">App and Web Developer</p>
        </div>
    )
}

function Contact(props){
    return (
        <div className="Contact">
            <div className="email">
                <img src={email_logo}/>
                <p>Lukas.petersson.1999@gmail.com</p>
            </div>
            <div className="phone">
                <img src={phone_logo}/>
                <p>0707898860</p>
            </div>
            <div className="linked_in">
                <img src={linkedin_logo}/>
                <p >Lukas Petersson</p>
            </div>
        </div>
    )
}

function hej(){
    console.log("HHHHHHHHHHHHHHHHHHHHHHHhh")
}


class Cv extends React.Component {
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
                    <Contact />
                </div>
            </div>
        );
    }
}

function MeSection(props){
    return (
        <div>
            <p>Lukas Petersson</p>
        </div>
    )
}

class FrontPage extends React.Component {
    render() {
        return (
            <div>
                <Cv/>
                <MeSection/>
            </div>

        );
    }
}

export default FrontPage;
