import React from 'react';
import './AppsSection.css';
import booklog_logo from "./../img/booklog_logo.png"
import fallingkitten_logo from "./../img/fallingkitten_logo.png"
import burnball_logo from "./../img/burnball_logo.png"
import booklog_screen from "./../img/booklog_screen.png"
import fallingkitten_screen from "./../img/fallingkitten_screen.png"
import burnball_screen from "./../img/burnball_screen.png"
import arrow_back from "./../img/arrow_back.png"
import arrow_forward from "./../img/arrow_forward.png"
import SmallBlock from "./SmallBlock.js";

class AppsSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                bookLog:{
                    description:"booklog cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p ",
                    image: {
                      front: booklog_logo,
                      back: booklog_screen
                    }
                },
                burnBall:{
                    description:"burnBall wdmpqow cpqw cpcqwpo cw cqpw coqw +co qwp cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p ",
                    image: {
                      front: burnball_logo,
                      back: burnball_screen
                    }
                },
                fallingKitten:{
                    description:"fallingKitten wdmwp cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p",
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
            <div className="appsBody">
                <h1>My Mobile Apps</h1>
                <h3>oem+v oe+mo våemvm emvemvpomqeåvm pelvomepno qenpnved ko ckw owck wp cp kwo </h3>
                <img className="arrows" id="firstArrow" src={arrow_back} onClick={() => appsContainer.scrollBy(-200, 0)} style = {this.state.arrowStyle.left}/>
                <div className="appsContainer" ref={this.appsContainerRef} >
                    <div className="app">
                        <SmallBlock info={this.state.bookLog}/>
                    </div>
                    <div className="app">
                        <SmallBlock info={this.state.burnBall}/>
                    </div>
                    <div className="app">
                        <SmallBlock info={this.state.fallingKitten}/>
                    </div>
                </div>
                <img className="arrows" id="secondArrow" src={arrow_forward} onClick={() => appsContainer.scrollBy(200, 0)} style = {this.state.arrowStyle.right}/>
            </div>
        );
        }
}

export default AppsSection;
