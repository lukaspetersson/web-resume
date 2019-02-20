import React from 'react';
import './Resume.css';
// import profilePic from "./../img/profile_pic.png"
// import football_logo from "./../img/football_logo.png"
// import code_logo from "./../img/code_logo.png"
// import politics_logo from "./../img/politics_logo.png"
// import ContactResume from "./ContactResume.js";
// import ExperianceResume from "./ExperianceResume.js";
import BoxResume from "./BoxResume.js";
import pepperPic from "./../img/pepper_transparent.png"

class Resume extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                digitalEdge: {
                    image:pepperPic,
                    title: "Digital Edge",
                    subTitle: ["Consultant developer for web and robotics"],
                    color: "rgb(226, 18, 18)",
                    subColor: "rgba(140, 8, 8, 0.7)"
                },
                mobileApps: {
                    image:pepperPic,
                    title: "Mobile Development",
                    examples: ["Brännbollräknare", "BookLog", "FallingKitten"],
                    examplesYear: ["2018", "2018-2019", "2018"],
                    color: "rgb(18, 226, 18)",
                    subColor: "rgba(8, 140, 8, 0.7)"
                },
            }
          }
    render() {
        return (
            <div >
            <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")}>
                <BoxResume info={this.state.digitalEdge}/>
            </div>
            <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")}>
                <BoxResume info={this.state.mobileApps}/>
            </div>
            <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")}>
                <BoxResume info={this.state.digitalEdge}/>
            </div>
            <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")}>
                <BoxResume info={this.state.digitalEdge}/>
            </div>
            <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")}>
                <BoxResume info={this.state.digitalEdge}/>
            </div>
            <div className="boxContainer" onClick={() => this.props.scrollfromParent("apps")}>
                <BoxResume info={this.state.digitalEdge}/>
            </div>


                {/*<div className="left_side">
                    <div onClick={() => this.props.scrollfromParent("me")} >
                      <div className="Me">
                          <img className="profilePic" src={profilePic}/>
                          <p className="name">Lukas Petersson</p>
                          <p className="profession">App and Web Developer</p>
                      </div>
                    </div>
                    <div onClick={this.moveTo} >
                        <ContactResume />
                    </div>
                    <div onClick={() => this.props.scrollfromParent("me")} >
                      <div className="Hobbies">
                          <h2>Hobbies</h2>
                          <img src={football_logo}/>
                          <img src={code_logo}/>
                          <img src={politics_logo}/>
                      </div>
                    </div>
                </div>
                <div className="right_side" onMouseLeave={() => this.props.handlerFromParent("#EAE5E2")}>
                    <div onMouseEnter={() => this.props.handlerFromParent(this.state.education.color)} onClick={() => this.props.scrollfromParent("me")} >
                        <ExperianceResume info = {this.state.education}/>
                    </div>
                    <div onMouseEnter={() => this.props.handlerFromParent(this.state.web.color)} onClick={() => this.props.scrollfromParent("web")}>
                        <ExperianceResume info = {this.state.web}/>
                    </div>
                    <div onMouseEnter={() => this.props.handlerFromParent(this.state.apps.color)} onClick={() => this.props.scrollfromParent("apps")}>
                        <ExperianceResume info = {this.state.apps}/>
                    </div>
                    <div onMouseEnter={() => this.props.handlerFromParent(this.state.service.color)} onClick={() => this.props.scrollfromParent("service")}>
                        <ExperianceResume info = {this.state.service}/>
                    </div>
                    <div onMouseEnter={() => this.props.handlerFromParent(this.state.other.color)} onClick={() => this.props.scrollfromParent("me")}>
                        <ExperianceResume info = {this.state.other}/>
                    </div>
                </div>*/}
            </div>
        );
    }
}

export default Resume;
