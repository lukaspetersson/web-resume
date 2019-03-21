import React from 'react';
import './WelcomeSection.css';
import down_logo from "./../img/down_logo.png"

class WelcomeSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                margin: "0px"
            }
    }
    render() {
        return (
            <div className="welcomeBody">
            <div className="barcaContainer">
                <p>Barcelona friendly switch</p>
                <label className="switch">
                      <input type="checkbox"/>
                      <span class="slider round"></span>
                </label>
            </div>
                <div className="welcomeText">
                    <img alt="" src={down_logo} style={{marginTop: this.state.margin}} onClick={() => this.props.scrollfromParent("me")} onMouseEnter={()=>{this.setState({margin:"20px"})}} onMouseLeave={()=>{this.setState({margin:"0px"})}}/>
                </div>
            </div>


        );
    }
}

export default WelcomeSection;
