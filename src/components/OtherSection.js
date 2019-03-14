import React from 'react';
import './OtherSection.css';
import car_icon from "./../img/car_icon.png"
import alexa_logo from "./../img/alexa_logo.png"
import bp_logo from "./../img/bp_logo.png"
import luf_logo from "./../img/luf_logo.png"
import ungaforskare_logo from "./../img/ungaforskare_logo.png"
import erasmus_logo from "./../img/erasmus_logo.jpg"
import fallingkitten_screen from "./../img/fallingkitten_screen.png"
import arrow_back from "./../img/arrow_back.png"
import arrow_forward from "./../img/arrow_forward.png"
import SmallBlock from "./SmallBlock.js";

class OtherSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                luf:{
                    year:"2018 - present",
                    description:"“You shouldn't talk about politics at the dinner table” is a cliche advice that I have not followed, I like expressing my opinions. I therefore joined  political youth party.",
                    image: {
                      front: luf_logo,
                    }
                },
                erasmus:{
                    year:"2017",
                    description:"My physics paper go chosen to represent my school. I traveled to Genoa to present it to 20 other students from europe.",
                    image: {
                      front: erasmus_logo,
                    }
                },
                ungaForskare:{
                    year:"2018",
                    description:"I improved that same physics paper from Erasmus and competed in in a competition by Ungaforskare.",
                    image: {
                      front: ungaforskare_logo,
                    }
                },
                football:{
                    year:"2004-2019",
                    description:"I have always liked exercising and being active and I played football for Brommapojkarna for 14 years.",
                    image: {
                      front: bp_logo,
                    }
                },
                alexa:{
                    year:"2019",
                    description:"As a hobby I have built apps for Alexa. Built with an API from my local public transport system I can now ask “when is the next train leaving?”",
                    image: {
                      front: alexa_logo,
                    }
                },
                driver:{
                    year:"March 2017",
                    description:"I have have had a driver's license since March 9th 2017.",
                    image: {
                      front: car_icon,
                    }
                },
                arrowStyle:{
                  left:{
                    display: "block"
                  },
                  right:{
                    display: "block"
                  }
                }
            }
            this.appsContainerRef = React.createRef();
            this.resize = this.resize.bind(this);
    }

    componentDidMount() {
      this.resize.call();
      window.addEventListener('resize', this.resize)

      const appsContainer = this.appsContainerRef.current;
      appsContainer.addEventListener('scroll', this.resize)
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.resize)

      const appsContainer = this.appsContainerRef.current;
      appsContainer.removeEventListener('scroll', this.resize)
    }
    resize = function(){
          const appsContainer = this.appsContainerRef.current;
            this.setState({
                arrowStyle:{
                  left:{
                    display: appsContainer.scrollLeft < 10 ? "none": "block"
                  },
                  right:{
                    display: (appsContainer.scrollLeft + appsContainer.offsetWidth) > (appsContainer.scrollWidth -10) ? "none": "block"
                  }
                }
            });
    }
    render() {
        const appsContainer = this.appsContainerRef.current;
        return (
            <div className="otherBody">
                <h1>Other</h1>
                <h3>Here you can read about some hobbies and projects I have had the past years.</h3>
                <img className="arrowsOther" id="firstArrowOther" src={arrow_back} onClick={() => appsContainer.scrollBy(-200, 0)} style = {this.state.arrowStyle.left}/>
                <div className="otherContainer" ref={this.appsContainerRef} >
                    <div className="other">
                        <SmallBlock info={this.state.luf} height={"370px"}/>
                    </div>
                    <div className="other">
                        <SmallBlock info={this.state.erasmus} height={"370px"}/>
                    </div>
                    <div className="other">
                        <SmallBlock info={this.state.ungaForskare} height={"370px"}/>
                    </div>
                    <div className="other">
                        <SmallBlock info={this.state.football} height={"370px"}/>
                    </div>
                    <div className="other">
                        <SmallBlock info={this.state.alexa} height={"370px"}/>
                    </div>
                    <div className="other">
                        <SmallBlock info={this.state.driver} height={"370px"}/>
                    </div>
                </div>
                <img className="arrowsOther" id="secondArrowOther" src={arrow_forward} onClick={() => appsContainer.scrollBy(200, 0)} style = {this.state.arrowStyle.right}/>
            </div>
        );
        }
}

export default OtherSection;
