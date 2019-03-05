import React from 'react';
import './EducationSection.css';
import booklog_logo from "./../img/booklog_logo.png"
import fallingkitten_logo from "./../img/fallingkitten_logo.png"
import burnball_logo from "./../img/burnball_logo.png"
import booklog_screen from "./../img/booklog_screen.png"
import fallingkitten_screen from "./../img/fallingkitten_screen.png"
import burnball_screen from "./../img/burnball_screen.png"
import arrow_back from "./../img/arrow_back.png"
import arrow_forward from "./../img/arrow_forward.png"
import SmallBlock from "./SmallBlock.js";

class EducationSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                bookLog:{
                    description:"The virtual bookshelf BoogLog lets you keep track of the books you read. It uses APIs such as google Books, Vision and Cloud Firestore.",
                    image: {
                      front: booklog_logo,
                      back: booklog_screen
                    }
                },
                burnBall:{
                    description:"The Brännbollräknare takes away the inconvenience of handling pen and paper during your brännboll matches.",
                    image: {
                      front: burnball_logo,
                      back: burnball_screen
                    }
                },
                fallingKitten:{
                    description:"In this adorable endless arcade game, you will rotate the kittens falling from the sky and save them from exploding.",
                    image: {
                      front: fallingkitten_logo,
                      back: fallingkitten_screen
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
                <h3>oienvennep vne  epvoeo+fmoem+wvmpweov wef+vowemovm+wem+ovwe+momv+owe e+wov+owemv ew+voemwv weov+m+ewo v+we ovoev w pvew vwe vwe+ ovpe v+e vpwe v  </h3>
                <img className="arrowsEducation" id="firstArrowEducation" src={arrow_back} onClick={() => appsContainer.scrollBy(-200, 0)} style = {this.state.arrowStyle.left}/>
                <div className="educationContainer" ref={this.appsContainerRef} >
                    <div className="education">
                        <SmallBlock info={this.state.bookLog}/>
                    </div>
                    <div className="education">
                        <SmallBlock info={this.state.burnBall}/>
                    </div>
                    <div className="education">
                        <SmallBlock info={this.state.fallingKitten}/>
                    </div>
                </div>
                <img className="arrowsEducation" id="secondArrowEducation" src={arrow_forward} onClick={() => appsContainer.scrollBy(200, 0)} style = {this.state.arrowStyle.right}/>
            </div>
        );
        }
}

export default EducationSection;
