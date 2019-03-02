import React from 'react';
import './MeSection.css';
import arrow_forward from "./../img/arrow_forward.png"

class MeSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {}
    }
    render() {
        return (
            <div className="meBody">
              <div className="infoContainer">
                <h1>About me</h1>
                <h3>oem+v oe+mo våemvm emvemvpomqeåvm pelv omepno qenpnved ko ckw owck wp cp kwo spncåqsoåc noqwcqow+ opbncqow+pncb+ qowpnc pwi cie vew   n099 h 9 09 0vomepno qenpnved ko ckw owck wp cp kwo spncåqsoåcnoq wcqow+opbncqow+pncb+qowpnc pwi cie vew   n099 h 9 09 0vomepno qenpnved ko ckw owck wp cp kwo spncåqsoåcnoqwcqow+opbncqow+pncb+qowpnc pwi cie vew   n099 h 9 09 0vomepno qenpnved ko ckw owck wp cp kwo spncåqsoåcnoqwcqow+opbncqow+pncb+qowpnc pwi cie vew   n099 h 9 09 0vomepno qenpnved ko ckw owck wp cp kwo spncåqsoåcnoqw cqow+opb ncq ow+pncb+qowpnc pwi cie vew   n099 h 9 09 0vomepno qenpnved ko ckw owck wp cp kwo spncåqsoåcnoqwcq ow+opbncqow +pncb+qowpnc pwi cie vew   n099 h 9 09 0vomepno qenpnved ko ckw owck wp cp kwo spncåqsoåcnoqwc qow+opbn cqow+pncb+qowpnc pwi cie vew   n099 h 9 09 0</h3>
              </div>
              <div className="readMoreContainer" onClick={()=>{window.open("https://www.w3schools.com")}}>
                <h3>Read more</h3>
                <img src={arrow_forward}/>
              </div>
            </div>
        );
    }
}

export default MeSection;
