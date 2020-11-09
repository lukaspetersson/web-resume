import React from 'react';
import './PersonalProjects.css';
import arrow_back from "./../img/arrow_back.svg"
import arrow_forward from "./../img/arrow_forward.svg"
import SmallBlock from "./SmallBlock.js";

class PersonalProjects extends React.Component {
    constructor(props){
            super(props)
            this.state = {
				ncpc:{
					header: "NCPC Programming Competition",
                    year:"Nov 2020",
                    description:"Finished 5th in Sweden in the Nordic ICPC qualifiers. This was achieved with a 2-man team despite the fact that the team size should be 3!",
                },
				carfree:{
					header: "Co-Founder of Carefree Stockholm",
                    year:"Jul 2020 - Present",
                    description:"Developed a database with an associated user-friendly tool to redraw the map of Stockholm.  Carefree Stockholm is taking an engineering approach in creating a political party.",
                },
				axfood:{
					header: "Pitch for Senior Executives",
                    year:"Apr 2019",
                    description:"Developed an Android app for managing expire dates in supermarkets. Pitched the app for four of the highest managers of Axfood and was offered a role developing their software.",
                },
				booklog:{
					header: "First (of many) Android Projects",
                    year:"Apr 2019",
                    description:"BookLog was the Android app that made my programming passion explode. A virtual bookshelf that I use myself every day.",
                },
				other:{
					header: "More Android Apps",
                    year:"2018 - Present",
                    description:"Published the apps Falling Kitten and Brännbollräknare on the Google Play Store.",
                },
				ungaForskare:{
					header: "Science Competition",
                    year:"Feb 2018",
                    description:"Qualified for the semi finals in Unga Forskare with a physics research project.",
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
            <div className="personalProjectsBody">
                <h1>Competitions and Personal Projects</h1>
                <img alt="" className="arrowsPersonalProjects" id="firstArrowPersonalProjects" src={arrow_back} onClick={() => this.scrollSide(-1)} style = {this.state.arrowStyle.left}/>
                <div className="personalProjectsContainer" ref={this.blocksContainerRef} >
					<div className="personalProjects">
						<SmallBlock info={this.state.ncpc} height={"370px"}/>
					</div>
					<div className="personalProjects">
						<SmallBlock info={this.state.carfree} height={"370px"}/>
					</div>
					<div className="personalProjects">
						<SmallBlock info={this.state.axfood} height={"370px"}/>
					</div>
					<div className="personalProjects">
						<SmallBlock info={this.state.booklog} height={"370px"}/>
					</div>
					<div className="personalProjects">
						<SmallBlock info={this.state.other} height={"370px"}/>
					</div>
					<div className="personalProjects">
						<SmallBlock info={this.state.ungaForskare} height={"370px"}/>
					</div>
                </div>
                <img alt="" className="arrowsPersonalProjects" id="secondArrowPersonalProjects" src={arrow_forward} onClick={() => this.scrollSide(1)} style = {this.state.arrowStyle.right}/>
            </div>
        );
        }
}

export default PersonalProjects;
