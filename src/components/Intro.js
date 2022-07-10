import React from 'react';
import './Intro.css';
import down_logo from "./../img/down_logo.png"

class Intro extends React.Component {
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
                    <img alt="" src={down_logo} onClick={() => this.props.scrollfromParent("content")} />
                    {coverOver}
                    {barcaContainer}
            </div>
            <div className="infoContainerWelcome" ref={this.refMeText}>
              <h1>Hello!</h1>
              <h3>Most people outgrow their childhood desire to become an astronaut, but I have not. Becoming an adult has not diminished the awe I feel when I look up in the night sky. I am Lukas, an engineering hobbyist with an interest in understanding our universe. I hope to do so by applying ML and Robotics to everything from Philosophy and Physics to Cooking and Music.</h3>
                </div>
            </div>
        );
    }
}

export default Intro;
