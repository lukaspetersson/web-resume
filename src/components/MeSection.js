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
                <h1>Hello!</h1>
                <h3>I'm Lukas, a self taught developer currently working at Ericsson and Digital Edge in Stockholm. Driven by curiosity, I constantly seek new things to learn like philosophy, politics, physics or technology. Programming wise I have mostly worked with android, react, and vue, but I have also done VR and Alexa development. I am eager to explore new lands within programming in the future.</h3>
              </div>
              {/*<div className="readMoreContainer" onClick={this.downloadURI}>
                <h3>Full personal letter</h3>
                <img alt="" src={download_icon}/>
              </div>*/}
            </div>
        );
    }
}

export default MeSection;
