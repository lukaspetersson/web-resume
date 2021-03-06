import React from 'react';
import './OtherJobs.css'

import abbekas_logo from "./../../img/abbekas_logo.jpg"
import tui_logo from "./../../img/tui_logo.png"
import hemkop_logo from "./../../img/hemkop_logo.png"
import drottningholm_logo from "./../../img/drottningholm_logo.jpg"
import bedinge_logo from "./../../img/bedinge_logo.png"
import iesb_logo from "./../../img/iesb_logo.png"
import abbekas_back from "./../../img/abbekas_back.jpg"
import tui_back from "./../../img/tui_back.jpg"
import hemkop_back from "./../../img/hemkop_back.jpg"
import drottningholm_back from "./../../img/drottningholm_back.jpg"
import bedinge_back from "./../../img/bedinge_back.jpg"
import iesb_back from "./../../img/iesb_back.jpg"
import arrow_back from "./../../img/arrow_back.svg"
import arrow_forward from "./../../img/arrow_forward.svg"
import StandardCard from "./../StandardCard.js";

class OtherJobs extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                tui:{
                    year:"Summer 2018",
					title:"Entertainer",
                    description:"I spent the Summer of 2018 in Greece working at a TUI hotel as an Entertainer. Me and my colleagues performed on stage and hosted family games. I had the time of my life and made some great friends!",
                    image: {
                      front: tui_logo,
                      back: tui_back
                    }
                },
                iesb:{
                    year:"Oct - Nov 2018",
					title:"Substitute teacher",
                    description:"3 years after graduating from IESB I came back but this time in the role of a substitute teacher. My respect for teachers grew as I realised how challenging it is to inspire at the same time as to act with authority.",
                    image: {
                      front: iesb_logo,
                      back: iesb_back
                    }
                },
                hemkop:{
                    year:"Oct - Nov 2018",
					title:"Sales Assistant",
                    description:"At Hemköp I realised that the shelfs in a supermarket apparently don't get filled by themselves, but by hard work and time optimization.",
                    image: {
                      front: hemkop_logo,
                      back: hemkop_back
                    }
                },
                drottningholm:{
                    year:"2015 - 2017",
					title:"Golf coach",
                    description:"Leadership, planning and organization were essential skills in my work as a golf instructor, although pronouncing all the names during attendance was by far the hardest part.",
                    image: {
                      front: drottningholm_logo,
                      back: drottningholm_back
                    }
                },
                bedinge:{
                    year:"Summer 2017",
					title:"Waiter",
                    description:"Working in a smaller restaurant sets completely different requirements, and you can no longer specialize in one thing. I had become an amazing dishwasher at Abbekås, but now I had to learn new skills.",
                    image: {
                      front: bedinge_logo,
                      back: bedinge_back
                    }
                },
                abbekas:{
                    year:"Summer 2015 & 2016",
					title:"Dishwasher",
                    description:"My first ever job was a harsh but fun welcoming to working life. Washing dishes at a restaurant is an extremely stressful task. When the piles stack up, there is no time to waste.",
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
            this.blocksContainerRef = React.createRef();
            this.resize = this.resize.bind(this);
            this.scrollSide = this.scrollSide.bind(this);

    }

    componentDidMount() {
      this.resize.call();
      window.addEventListener('resize', this.resize)

      const blocksContainer = this.blocksContainerRef.current;
      blocksContainer.addEventListener('scroll', this.resize)
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.resize)

      const blocksContainer = this.blocksContainerRef.current;
      blocksContainer.removeEventListener('scroll', this.resize)
    }
    resize = function(){
          const blocksContainer = this.blocksContainerRef.current;
            this.setState({
                arrowStyle:{
                  left:{
                    display: blocksContainer.scrollLeft < 10 ? "none": "block"
                  },
                  right:{
                    display: (blocksContainer.scrollLeft + blocksContainer.offsetWidth) > (blocksContainer.scrollWidth -10) ? "none": "block"
                  }
                }
            });
    }
    scrollSide(direction){
      const container = this.blocksContainerRef.current;
      try{
        container.scrollBy(direction*230, 0)
      }catch{
        container.scrollLeft +=  direction*230
      }
    }
    render() {
        return (
            <div className="serviceBody">
                <h1>Other Jobs</h1>
                <img alt="" className="arrowsService" id="firstArrowService" src={arrow_back} onClick={() => this.scrollSide(-1)} style = {this.state.arrowStyle.left}/>
                    <div className="serviceContainer" ref={this.blocksContainerRef} >
                    <div className="service">
                        <StandardCard info={this.state.iesb} height={"430px"}/>
                    </div>
                    <div className="service">
                        <StandardCard info={this.state.hemkop} height={"430px"}/>
                    </div>
                    <div className="service">
                        <StandardCard info={this.state.tui} height={"430px"}/>
                    </div>
                    <div className="service">
                        <StandardCard info={this.state.bedinge} height={"430px"}/>
                    </div>
                    <div className="service">
                        <StandardCard info={this.state.drottningholm} height={"430px"}/>
                    </div>
                    <div className="service">
                        <StandardCard info={this.state.abbekas} height={"430px"}/>
                    </div>
                </div>
                <img alt="" className="arrowsService" id="secondArrowService" src={arrow_forward} onClick={() => this.scrollSide(1)} style = {this.state.arrowStyle.right}/>
            </div>
        );
        }
}

export default OtherJobs;
