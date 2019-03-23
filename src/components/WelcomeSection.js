import React from 'react';
import './WelcomeSection.css';
//import {Animated} from "react-animated-css";
import down_logo from "./../img/down_logo.png"

class WelcomeSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                bottom: "20px",
                isCovered: false,
            }
    }
    render() {
        if(this.state.isCovered){
            //var coverOver = <Animated isVisible={this.state.isCovered}><div className="coverOver"></div></Animated>
            var coverOver =<div className="coverOver"></div>
        }
        return (
            <div className="welcomeBody">
            {coverOver}
            <div className="barcaContainer">
                <p>Make website FC Barcelona friendly</p>
                <label className="switch" >
                      <input type="checkbox" onClick={()=>{this.setState({isCovered : !this.state.isCovered})}}/>
                      <span className="slider round"></span>
                </label>
            </div>
                <div className="welcomeText" style={{bottom: this.state.bottom}}>
                    <img alt="" src={down_logo}  onClick={() => this.props.scrollfromParent("me")} onMouseEnter={()=>{this.setState({bottom:"-10px"})}} onMouseLeave={()=>{this.setState({bottom:"20px"})}}/>
                </div>
            </div>


        );
    }
}

export default WelcomeSection;
