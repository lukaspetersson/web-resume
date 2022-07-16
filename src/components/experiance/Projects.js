import React from 'react';
import './Projects.css';
import arrow_back from "./../../img/arrow_back.svg"
import arrow_forward from "./../../img/arrow_forward.svg"
import StandardCard from "./../StandardCard.js";

class Projects extends React.Component {
    constructor(props){
            super(props)
            this.state = {
				ncpc21:{
					header: "NCPC Competitive Programming",
                    year:"2021",
                    description:"Finished 3rd of all Swedish teams the Nordic ICPC qualifiers",
                },
				comma:{
						header:"Computer Vision Project",
						year:"2021",
						description:"Applied CNN and optical flow to achieve a better score than the internal solution"
				},
				ncpc20:{
					header: "NCPC Programming Competition",
                    year:"2020",
                    description:"5th in sweden with only a two man team",
                },
				kungfu:{
						header:"Shaolin Kunf Fu",
						year:"2019",
						description:"Went outside my comfort zone by traveling alone to a Martial art camp and training for 6 weeks."
				},
				axfood:{
					header: "Pitch for Senior Executives",
                    year:"2019",
                    description:"I pitched my food-app for the senior executives of Axfood and was offered a role to develop their software.",
                },
				booklog:{
					header: "First (of many) Android Projects",
                    year:"2018 - 2019",
                    description:"BookLog was the Android app that made my programming passion explode. A virtual bookshelf that I use myself every day.",
                },
				other:{
					header: "More Android Apps",
                    year:"2018 - Present",
                    description:"Published the apps Falling Kitten and Brännbollräknare on the Google Play Store. Hopefully there will be more to come!",
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
            <div className="projectsBody">
                <h1>Projects & Competitions</h1>
                <img alt="" className="arrowsProjects" id="firstArrowProjects" src={arrow_back} onClick={() => this.scrollSide(-1)} style = {this.state.arrowStyle.left}/>
                <div className="projectsContainer" ref={this.blocksContainerRef} >
					<div className="projects">
						<StandardCard info={this.state.ncpc21} height={"350px"}/>
					</div>
					<div className="projects">
						<StandardCard info={this.state.comma} height={"350px"}/>
					</div>
					<div className="projects">
						<StandardCard info={this.state.ncpc20} height={"350px"}/>
					</div>
					<div className="projects">
						<StandardCard info={this.state.kungfu} height={"350px"}/>
					</div>
					<div className="projects">
						<StandardCard info={this.state.axfood} height={"350px"}/>
					</div>
					<div className="projects">
						<StandardCard info={this.state.booklog} height={"350px"}/>
					</div>
					<div className="projects">
						<StandardCard info={this.state.other} height={"350px"}/>
					</div>
                </div>
                <img alt="" className="arrowsProjects" id="secondArrowProjects" src={arrow_forward} onClick={() => this.scrollSide(1)} style = {this.state.arrowStyle.right}/>
            </div>
        );
        }
}

export default Projects;
