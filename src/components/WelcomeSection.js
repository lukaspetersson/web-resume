import React from 'react';
import './WelcomeSection.css';
import down_logo from "./../img/down_logo.png"
import cover_over from "./../img/madrid_cover.png"

class WelcomeSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                margin: "0px",
                isCovered: false,
            }
    }
    render() {
        if(this.state.isCovered){
            var coverOver = <div className="coverOver"></div>
        }
        return (
            <div className="welcomeBody">
            {coverOver}
            <div className="barcaContainer">
                <p>Barcelona friendly switch</p>
                <label className="switch" >
                      <input type="checkbox" onClick={()=>{this.setState({isCovered : !this.state.isCovered})}}/>
                      <span className="slider round"></span>
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
