import React from 'react';
import './ServiceSection.css'

import abbekas_logo from "./../img/abbekas_logo.jpg"
import tui_logo from "./../img/tui_logo.png"
import hemkop_logo from "./../img/hemkop_logo.png"
import drottningholm_logo from "./../img/drottningholm_logo.jpg"
import bedinge_logo from "./../img/bedinge_logo.png"
import iesb_logo from "./../img/iesb_logo.png"
import abbekas_back from "./../img/abbekas_back.jpg"
import tui_back from "./../img/tui_back.jpg"
import hemkop_back from "./../img/hemkop_back.jpg"
import drottningholm_back from "./../img/drottningholm_back.jpg"
import bedinge_back from "./../img/bedinge_back.jpg"
import iesb_back from "./../img/iesb_back.jpg"

import arrow_back from "./../img/arrow_back.png"
import arrow_forward from "./../img/arrow_forward.png"
import SmallBlock from "./SmallBlock.js";

class ServiceSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                tui:{
                    description:"booklog cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p ",
                    image: {
                      front: tui_logo,
                      back: tui_back
                    }
                },
                iesb:{
                    description:"burnBall wdmpqow cpqw cpcqwpo cw cqpw coqw +co qwp cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p ",
                    image: {
                      front: iesb_logo,
                      back: iesb_back
                    }
                },
                hemkop:{
                    description:"fallingKitten wdmwp cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p",
                    image: {
                      front: hemkop_logo,
                      back: hemkop_back
                    }
                },
                drottningholm:{
                    description:"fallingKitten wdmwp cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p",
                    image: {
                      front: drottningholm_logo,
                      back: drottningholm_back
                    }
                },
                bedinge:{
                    description:"fallingKitten wdmwp cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p",
                    image: {
                      front: bedinge_logo,
                      back: bedinge_back
                    }
                },
                abbekas:{
                    description:"fallingKitten wdmwp cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p",
                    image: {
                      front: abbekas_logo,
                      back: abbekas_back
                    }
                },
                arrowStyle:{
                    display: "inline-block"
                }
            }
            this.appsContainerRef = React.createRef();
            this.resize = this.resize.bind(this);
    }

    componentDidMount() {
      this.resize.call();
      window.addEventListener('resize', this.resize)
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.resize)
    }
    resize = function(){
          const appsContainer = this.appsContainerRef.current;
              this.setState({
                  arrowStyle:{
                      display: ((appsContainer.offsetWidth > 1400) ? "none": "inline-block")
                  }
              });
    }
    render() {
        const appsContainer = this.appsContainerRef.current;
        return (
            <div className="serviceBody">
                <h1>Service jobs</h1>
                <h3>oem+v oe+mo våemvm emvemvpomqeåvm pelvomepno qenpnved ko ckw owck wp cp kwo </h3>
                <img className="arrows" id="firstArrow" src={arrow_back} onClick={() => appsContainer.scrollBy(-200, 0)} style = {this.state.arrowStyle}/>
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
                <img className="arrows" id="secondArrow" src={arrow_forward} onClick={() => appsContainer.scrollBy(200, 0)} style = {this.state.arrowStyle}/>
            </div>
        );
        }
}

export default ServiceSection;
