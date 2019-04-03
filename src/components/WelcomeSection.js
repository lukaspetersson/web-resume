import React from 'react';
import './WelcomeSection.css';
import down_logo from "./../img/down_logo.png"

class WelcomeSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                isCovered: false,
            }
            this.refMeText = React.createRef()
    }
    componentDidMount(){
        if(this.refMeText.current){
          this.props.setCoverHeight(window.innerHeight - this.refMeText.current.clientHeight - 40)
        }
         this.forceUpdate()
         window.addEventListener('resize', ()=>{this.forceUpdate()})
    }

    componentWillUnmount() {
        window.removeEventListener('resize', ()=>{this.forceUpdate()})
    }
    render() {
        if(this.state.isCovered && window.innerWidth/window.innerHeight < 2.4){
            var coverOver = <div className="coverOver"></div>
        }
        if(this.refMeText.current){
          var meHeight = this.refMeText.current.clientHeight;
        }

        if(window.innerWidth/window.innerHeight < 2.4){
            var barcaContainer = <div className="barcaContainer">
                             <p>Make website<br/>FC Barcelona friendly</p>
                             <label className="switch" >
                                   <input type="checkbox" checked={this.state.isCovered} onChange={()=>{this.setState({isCovered : !this.state.isCovered})}}/>
                                   <span className="slider round"></span>
                             </label>
                         </div>
        }

        return (
          <div>
            <div className="welcomeBody" style={{bottom: meHeight}}>
                    <img alt="" src={down_logo} onClick={() => this.props.scrollfromParent("resume")} />
                    {coverOver}
                    {barcaContainer}
            </div>
            <div className="infoContainerWelcome" ref={this.refMeText}>
              <h1>Hello!</h1>
              <h3>I’m Lukas, a self taught developer currently working at Ericsson and Digital Edge in Stockholm. Driven by curiosity, I constantly seek new things to learn like philosophy, politics, physics or technology. Programming wise I have mostly worked with Java, Android, React, and Vue, but I have also worked with VR in Unity, Python, C#, Kotlin and AWS. I am eager to explore new lands within programming in the future.</h3>
            </div>
            </div>
        );
    }
}

export default WelcomeSection;
