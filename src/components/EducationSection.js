import React from 'react';
import './EducationSection.css';
import iesb_logo from "./../img/iesb_logo.png"
import kg_logo from "./../img/kg_logo.png"
import igcse_logo from "./../img/igcse_logo.png"
import booklog_screen from "./../img/booklog_screen.png"
import fallingkitten_screen from "./../img/fallingkitten_screen.png"
import burnball_screen from "./../img/burnball_screen.png"
import arrow_back from "./../img/arrow_back.svg"
import arrow_forward from "./../img/arrow_forward.svg"
import SmallBlock from "./SmallBlock.js";

class EducationSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                iesb:{
                    year:"- 2015",
                    description:"Choosing IESB is one of the best choices of my life, not only because it improved my english skills enormously, but also because the diversity of the students taught me different perspectives.",
                    image: {
                      front: iesb_logo,
                    }
                },
                igcse:{
                    year:"2014 - 2015",
                    description:"I took extra IGCSE courses in math, english and science because I longed for a challenge and I have always been curious. As it turned out, I made great friends as well!",
                    image: {
                      front: igcse_logo,
                    }
                },
                kungsholmen:{
                    year:"2015 - 2018",
                    description:"Choosing a international Science program at Kungsholmens gymnasium was an obvious choice. I loved math, and going from an international school to another felt natural.",
                    image: {
                      front: kg_logo,
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
            <div className="educationBody">
                <h1>Education</h1>
                <img className="arrowsEducation" id="firstArrowEducation" src={arrow_back} onClick={() => appsContainer.scrollBy(-200, 0)} style = {this.state.arrowStyle.left}/>
                <div className="educationContainer" ref={this.appsContainerRef} >
                    <div className="education">
                        <SmallBlock info={this.state.iesb} height={"380px"}/>
                    </div>
                    <div className="education">
                        <SmallBlock info={this.state.igcse} height={"380px"}/>
                    </div>
                    <div className="education">
                        <SmallBlock info={this.state.kungsholmen} height={"380px"}/>
                    </div>
                </div>
                <img className="arrowsEducation" id="secondArrowEducation" src={arrow_forward} onClick={() => appsContainer.scrollBy(200, 0)} style = {this.state.arrowStyle.right}/>
            </div>
        );
        }
}

export default EducationSection;
