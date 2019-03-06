import React from 'react';
import './BoxResume.css';

class BoxResume extends React.Component {
    constructor(props){
            super(props)
            this.state={
              textOpacity:0,
            }
            this.toggleOpacity = this.toggleOpacity.bind(this)
            this.resizeWindow = this.resizeWindow.bind(this)
    }
    componentDidMount(){
         window.addEventListener('resize', this.resizeWindow)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.resizeWindow)
    }

    resizeWindow = ()=>{
        this.setState({
          textOpacity: window.innerWidth > 800 ? 0 : 1
        })
    }

    toggleOpacity(onMouse){
      if(window.innerWidth > 800){
        this.setState({
          textOpacity:onMouse == "leave" ? 0 : 1
        })
      }
    }

    render() {
        if(this.props.info.examples){
            var examples =[]
            var years = [];
            for(var i = 0; i < this.props.info.examples.length; i++){
                examples.push(<p  style={{float : "left", clear:"both", margin: "10px"}}>{this.props.info.examples[i]}</p>)
                years.push(<p  style={{float : "right", clear:"both", margin: "10px"}}>{this.props.info.examplesYear[i]}</p>)

            }
        }

        return (
            <div className="boxBody" style={{backgroundColor : this.props.info.color, backgroundImage : "url("+this.props.info.image+")"}}>
                <p className="boxTitle">{this.props.info.title}</p>
                <div className="hoverContainer" style={{backgroundColor : this.props.info.subColor, opacity: this.state.textOpacity}} onMouseEnter={()=>{this.toggleOpacity("enter")}} onMouseLeave={()=>{this.toggleOpacity("leave")}}>
                    <p className="boxTitle">{this.props.info.title}</p>
                    <div className="boxSubTitle">
                        {this.props.info.subTitle}
                        <div style={{float : "left"}}>
                        {examples}
                        </div>
                        <div style={{float : "right"}}>
                        {years}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxResume;
