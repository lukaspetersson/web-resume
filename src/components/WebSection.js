import React from 'react';
import './WebSection.css';
import de_logo from "./../img/de_logo.jpg"
import ericsson_logo from "./../img/ericsson_logo.png"
import de_back from "./../img/de_back.png"
import ericsson_back from "./../img/ericsson_back.png"
import arrow_back from "./../img/arrow_back.png"
import arrow_forward from "./../img/arrow_forward.png"
import SmallBlock from "./SmallBlock.js";

class WebSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                de:{
                    description:"booklog cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p ",
                    image: {
                      front: de_logo,
                      back: de_back
                    }
                },
                ericsson:{
                    description:"burnBall wdmpqow cpqw cpcqwpo cw cqpw coqw +co qwp cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p ",
                    image: {
                      front: ericsson_logo,
                      back: ericsson_back
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
            <div className="webBody">
                <h1>Jobs as programmer</h1>
                <h3>oem+v oe+mo våemvm emvemvpomqeåvm pelvomepno qenpnved ko ckw owck wp cp kwo </h3>
                <img className="arrows" id="firstArrow" src={arrow_back} onClick={() => appsContainer.scrollBy(-200, 0)} style = {this.state.arrowStyle.left}/>
                <div className="webContainer" ref={this.appsContainerRef} >
                    <div className="web">
                        <SmallBlock info={this.state.de}/>
                    </div>
                    <div className="web">
                        <SmallBlock info={this.state.ericsson}/>
                    </div>
                </div>
                <img className="arrows" id="secondArrow" src={arrow_forward} onClick={() => appsContainer.scrollBy(200, 0)} style = {this.state.arrowStyle.right}/>
            </div>
        );
        }
}

export default WebSection;
