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
              <h3>I’m Lukas, a self-taught software developer with an entrepreneurial mindset currently studying M.Sc. Engineering Physics at Lund University. Driven by curiosity, I constantly seek new challenges and are committed to lifelong learning. My primary interests are within the STEM fields, but I also enjoy philosophy and politics. I am eager to explore new lands within programming in the future.</h3>
            </div>
            </div>
        );
    }
}

export default WelcomeSection;
