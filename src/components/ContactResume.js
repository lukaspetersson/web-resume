import React from 'react';
import './ContactResume.css';
import email_logo from "./../img/email_logo.png"
import phone_logo from "./../img/phone_logo.png"
import linkedin_logo from "./../img/linkedin_logo.png"
import github_logo from "./../img/github_logo.png"

class ContactResume extends React.Component {
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

export default ContactResume;
