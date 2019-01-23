import React from 'react';
import './Resume.css';
import profilePic from "./../img/person.png"
import email_logo from "./../img/email_logo.png"
import phone_logo from "./../img/phone_logo.png"
import linkedin_logo from "./../img/linkedin_logo.png"
import github_logo from "./../img/github_logo.png"

function Me(props){
    return (
        <div className="Me">
            <img className="profilePic" src={profilePic}/>
            <p className="name">Lukas Petersson</p>
            <p className="profession">App and Web Developer</p>
        </div>
    )
}


class Contact extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                contactDetails:"Lukas.Petersson.1999@gmail.com",
                emailStyle:{
                    height:"50px",
                    width:"50px",
                },
                phoneStyle:{
                  height:"32px",
                  width:"32px",
                }
            }
        this.contactText = this.contactText.bind(this)
    }

    contactText(text){
        if ( text == "email"){
            this.setState({
                contactDetails:"Lukas.Petersson.1999@gmail.com",
                emailStyle:{
                    height:"50px",
                    width:"50px",
                },
                phoneStyle:{
                  height:"32px",
                  width:"32px",
                }
            });
        }
        else if(text == "phone"){
            this.setState({
                contactDetails:"0707898860",
                emailStyle:{
                    height:"32px",
                    width:"32px",
                },
                phoneStyle:{
                  height:"50px",
                  width:"50px",
                }
            });
        }
    }

    render() {
        return (
            <div className="Contact">
                <h3>Contact</h3>
                <p>{this.state.contactDetails}</p>
                <div className="personal">
                    <img src={email_logo} style = {this.state.emailStyle} onClick={() => this.contactText("email")}/>
                    <img src={phone_logo} style = {this.state.phoneStyle} onClick={() => this.contactText("phone")}/>
                </div>
                <div className="social_media">
                    <img src={linkedin_logo} onClick={function(event){  window.open("https://www.linkedin.com/in/lukas-petersson-181a83172/");}}/>
                    <img src={github_logo} onClick={function(event){ window.open("https://github.com/lukaspetersson");}}/>
                </div>
            </div>
        );
    }
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
                    <Contact />
                </div>
            </div>
        );
    }
}

export default Resume;
