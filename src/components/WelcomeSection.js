import React from 'react';
import './WelcomeSection.css';
import {Animated} from "react-animated-css";
import down_logo from "./../img/down_logo.png"

class WelcomeSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                isCovered: false,
            }
    }
    render() {
        if(this.state.isCovered){
            var coverOver = <Animated isVisible={this.state.isCovered}><div className="coverOver"></div></Animated>
        }

        // {coverOver}
        // <div className="barcaContainer">
        //     <p>Make website FC Barcelona friendly</p>
        //     <label className="switch" >
        //           <input type="checkbox" onClick={()=>{this.setState({isCovered : !this.state.isCovered})}}/>
        //           <span className="slider round"></span>
        //     </label>
        // </div>

        // <div className="infoContainerWelcome">
        //   <h1>Hello!</h1>
        //   <h3>I'm Lukas, a self taught developer currently working at Ericsson and Digital Edge in Stockholm. Driven by curiosity, I constantly seek new things to learn like philosophy, politics, physics or technology. Programming wise I have mostly worked with android, react, and vue, but I have also done VR and Alexa development. I am eager to explore new lands within programming in the future.</h3>
        // </div>

        return (
          <div>
            <div className="welcomeBody" style={{bottom: "calc(290px - 9vw)"}}>
                    <img alt="" src={down_logo}  onClick={() => this.props.scrollfromParent("resume")} />
            </div>
            <div className="infoContainerWelcome">
              <h1>Hello!</h1>
              <h3>I'm Lukas, a self taught developer currently working at Ericsson and Digital Edge in Stockholm. Driven by curiosity, I constantly seek new things to learn like philosophy, politics, physics or technology. Programming wise I have mostly worked with android, react, and vue, but I have also done VR and Alexa development. I am eager to explore new lands within programming in the future.</h3>
            </div>
            </div>
        );
    }
}

export default WelcomeSection;
