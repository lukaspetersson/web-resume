import React from 'react';
import './AppsSection.css';
import booklog_logo from "./../img/booklog_logo.png"
import fallingkitten_logo from "./../img/fallingkitten_logo.png"
import burnball_logo from "./../img/burnball_logo.png"
import arrow_back from "./../img/arrow_back.png"
import arrow_forward from "./../img/arrow_forward.png"
import SmallBlock from "./SmallBlock.js";

class AppsSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                bookLog:{
                    description:"booklog cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p ",
                    image: booklog_logo
                },
                burnBall:{
                    description:"burnBall wdmpqow cpqw cpcqwpo cw cqpw coqw +co qwp cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p ",
                    image: burnball_logo
                },
                fallingKitten:{
                    description:"fallingKitten wdmwp cp qwl clqwcl l  pc qlw c wqålpclqwåclwlc p",
                    image: fallingkitten_logo
                },
            }
            this.appsContainerRef = React.createRef();
    }
    render() {
        const appsContainer = this.appsContainerRef.current;

        console.log(this.myInput.current.offsetWidth)

        if(appsContainer.offsetWidth > 700){
            return (
                <div className="appsBody">
                    <h1>My Mobile Apps</h1>
                    <h3>oem+v oe+mo våemvm emvemvpomqeåvm pelvomepno qenpnved ko ckw owck wp cp kwo </h3>
                    <img src={arrow_back} onClick={() => appsContainer.scrollBy(-200, 0)}/>
                    <div className="appsContainer" ref={this.appsContainerRef}>
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
                    <img src={arrow_forward} onClick={() => appsContainer.scrollBy(200, 0)}/>
                </div>
            );
        }else{
            return (
                <div className="appsBody">
                    <h1>My Mobile Apps</h1>
                    <h3>oem+v oe+mo våemvm emvemvpomqeåvm pelvomepno qenpnved ko ckw owck wp cp kwo </h3>
                    <div className="appsContainer" ref={this.appsContainerRef}>
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
                </div>
            );
        }

    }
}

export default AppsSection;
