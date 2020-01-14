import React from 'react';
import './EducationSection.css';
import iesb_logo from "./../img/iesb_logo.png"
import kg_logo from "./../img/kg_logo.png"
import igcse_logo from "./../img/igcse_logo.png"
import lund_logo from "./../img/lund_logo.png"
import arrow_back from "./../img/arrow_back.svg"
import arrow_forward from "./../img/arrow_forward.svg"
import SmallBlock from "./SmallBlock.js";

class EducationSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                iesb:{
                    year:"- 2015",
                    description:"Choosing IESB is one of the best choices of my life! It improved my english skills enormously and  the diversity of the students taught me different perspectives.",
                    image: {
                      front: iesb_logo,
                    }
                },
                igcse:{
                    year:"2013 - 2015",
                    description:"I took extracurricular IGCSE courses in math, english and science. I longed for a challenge and was curious to learn new things. As it turned out, I made great friends as well!",
                    image: {
                      front: igcse_logo,
                    }
                },
                kungsholmen:{
                    year:"2015 - 2018",
                    description:"An international science programme at Kungsholmens gymnasium was an obvious choice. I loved math, and going from one international school to another felt natural.",
                    image: {
                      front: kg_logo,
                    }
                },
                lund:{
                    year:"2019 - ",
                    description:"I am currently studying M.Sc. Engineering Physics (\"Teknisk fysik\" in Swedish) at Lund University. It is a 5 year civil engineering programme.",
                    image: {
                      front: lund_logo,
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
            <div className="educationBody">
                <h1>Education</h1>
                <img alt="" className="arrowsEducation" id="firstArrowEducation" src={arrow_back} onClick={() => this.scrollSide(-1)} style = {this.state.arrowStyle.left}/>
                <div className="educationContainer" ref={this.blocksContainerRef} >
                    <div className="education">
                        <SmallBlock info={this.state.lund} height={"380px"}/>
                    </div>
                    <div className="education">
                        <SmallBlock info={this.state.kungsholmen} height={"380px"}/>
                    </div>
                    <div className="education">
                        <SmallBlock info={this.state.igcse} height={"380px"}/>
                    </div>
                    <div className="education">
                        <SmallBlock info={this.state.iesb} height={"380px"}/>
                    </div>
                </div>
                <img alt="" className="arrowsEducation" id="secondArrowEducation" src={arrow_forward}onClick={() => this.scrollSide(1)} style = {this.state.arrowStyle.right}/>
            </div>
        );
        }
}

export default EducationSection;
