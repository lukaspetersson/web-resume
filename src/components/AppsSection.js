import React from 'react';
import './AppsSection.css';
import booklog_logo from "./../img/booklog_logo.png"
import fallingkitten_logo from "./../img/fallingkitten_logo.png"
import burnball_logo from "./../img/burnball_logo.png"
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
                }
            }
    }
    render() {
        return (

            <div className="appsBody">
                <h1>My Mobile Apps</h1>
                    <SmallBlock info={this.state.booklog}/>

                    <SmallBlock info={this.state.burnBall}/>

                    <SmallBlock info={this.state.fallingKitten}/>

            </div>
        );
    }
}

export default AppsSection;
