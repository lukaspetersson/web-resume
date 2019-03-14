import React from 'react';
import './MeSection.css';
import download_icon from "./../img/download_icon.png"

class MeSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {}
    }

    downloadURI() {
        var link = document.createElement("a");
        link.download = "name";
        link.href = download_icon;
        link.click();
    }

    render() {
        return (
            <div className="meBody">
              <div className="infoContainer">
                <h1>About me</h1>
                <h3>oem+v oe+mo våemvm emvemvpomqeåvm pelv omepno qenpnved ko ckw owck wp cp kwo spncåqsoåc noqwcqow+ opbncqow+pncb+ qowpnc pwi cie vew   n099 h 9 09 0vomepno qenpnved ko ckw owck wp cp kwo spncåqsoåcnoq wcqow+opbncqow+pncb+qowpnc pwi cie vew   n099 h 9 09 0vomepno qenpnved ko ckw owck wp cp kwo spncåqsoåcnoqwcqow+opbncqow+pncb+qowpnc pwi cie vew   n099 h 9 09 0vomepno qenpnved ko ckw owck wp cp kwo spncåqsoåcnoqwcqow+opbncqow+pncb+qowpnc pwi cie vew   n099 h 9 09 0vomepno qenpnved ko ckw owck wp cp kwo spncåqsoåcnoqw cqow+opb ncq ow+pncb+qowpnc pwi cie vew   n099 h 9 09 0vomepno qenpnved ko ckw owck wp cp kwo spncåqsoåcnoqwcq ow+opbncqow +pncb+qowpnc pwi cie vew   n099 h 9 09 0vomepno qenpnved ko ckw owck wp cp kwo spncåqsoåcnoqwc qow+opbn cqow+pncb+qowpnc pwi cie vew   n099 h 9 09 0</h3>
              </div>
              <div className="readMoreContainer" onClick={this.downloadURI}>
                <h3>Full personal letter</h3>
                <img src={download_icon}/>
              </div>
            </div>
        );
    }
}

export default MeSection;
