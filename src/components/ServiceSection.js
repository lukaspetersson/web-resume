import React from 'react';
import './ServiceSection.css'

import abbekas_logo from "./../img/abbekas_logo.jpg"
import tui_logo from "./../img/tui_logo.png"
import hemkop_logo from "./../img/hemkop_logo.png"
import drottningholm_logo from "./../img/drottningholm_logo.jpg"
import bedinge_logo from "./../img/bedinge_logo.png"
import iesb_logo from "./../img/iesb_logo.png"
import abbekas_back from "./../img/abbekas_back.jpg"
import tui_back from "./../img/tui_back.png"
import hemkop_back from "./../img/hemkop_back.jpg"
import drottningholm_back from "./../img/drottningholm_back.jpg"
import bedinge_back from "./../img/bedinge_back.jpg"
import iesb_back from "./../img/iesb_back.png"

import arrow_back from "./../img/arrow_back.png"
import arrow_forward from "./../img/arrow_forward.png"
import SmallBlock from "./SmallBlock.js";

class ServiceSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                tui:{
                    description:"I spent the summer of 2018 in Greece working at a TUI hotel as a Entertainer. Me and colleagues performed on stage and hosted family games. I had the time of my life and made some great friends!",
                    image: {
                      front: tui_logo,
                      back: tui_back
                    }
                },
                iesb:{
                    description:"3 years after graduating from IESB I came back but this time in the role of a substitute teacher. My respect for teachers grew as I realized how hard the balance between inspiration and authority is.",
                    image: {
                      front: iesb_logo,
                      back: iesb_back
                    }
                },
                hemkop:{
                    description:"The magic of a supermarket was ruined for me while I was working at Hemköp. The shelfs apparently don´t get filled by themselves, but by hard work and time optimization.",
                    image: {
                      front: hemkop_logo,
                      back: hemkop_back
                    }
                },
                drottningholm:{
                    description:"Leadership, planning and organization were essential skills in my work as a golf instructor, although pronouncing all the names during attendance was by far the hardest part.",
                    image: {
                      front: drottningholm_logo,
                      back: drottningholm_back
                    }
                },
                bedinge:{
                    description:"Working in a smaller restaurant sets completely different requirements, you can no longer specialize in one thing. I had become an amazing dishwasher at Abbekås, but now I had to learn new skills.",
                    image: {
                      front: bedinge_logo,
                      back: bedinge_back
                    }
                },
                abbekas:{
                    description:"My first ever job was a harsh but fun welcoming into working life. Washing dishes at a restaurant is an extremely stressful task. When the piles stack up, there is no time to waste.",
                    image: {
                      front: abbekas_logo,
                      back: abbekas_back
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
            <div className="serviceBody">
                <h1>Service Jobs</h1>
                <h3>Skills are great but it is wasted without hard work, I got my first job almost as soon as it was legally possible. From that I have developed an unmatchable work ethic, something my former employers can certify.</h3>
                <div className="quote">
                  <p>"Jag kan verkligen rekomendera denna unge man, ävenom om jag helst slipper då jag hoppas ha honom många år framöver"</p>
                </div>
                <div className="quote">
                  <p>"Jag ger honom högsta betyg"</p>
                </div>
                <img className="arrows" id="firstArrow" src={arrow_back} onClick={() => appsContainer.scrollBy(-200, 0)} style = {this.state.arrowStyle.left}/>
                <div className="serviceContainer" ref={this.appsContainerRef} >
                    <div className="service">
                        <SmallBlock info={this.state.abbekas}/>
                    </div>
                    <div className="service">
                        <SmallBlock info={this.state.drottningholm}/>
                    </div>
                    <div className="service">
                        <SmallBlock info={this.state.bedinge}/>
                    </div>
                    <div className="service">
                        <SmallBlock info={this.state.tui}/>
                    </div>
                    <div className="service">
                        <SmallBlock info={this.state.hemkop}/>
                    </div>
                    <div className="service">
                        <SmallBlock info={this.state.iesb}/>
                    </div>
                </div>
                <img className="arrows" id="secondArrow" src={arrow_forward} onClick={() => appsContainer.scrollBy(200, 0)} style = {this.state.arrowStyle.right}/>
            </div>
        );
        }
}

export default ServiceSection;
