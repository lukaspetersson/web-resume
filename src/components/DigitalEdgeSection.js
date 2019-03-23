import React from 'react';
import './DigitalEdgeSection.css';
import pepper_hello from "./../img/pepper_hello.png"
import hello_animation from "./../img/hello_animation.gif"

class DigitalEdgeSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
            }
    }
    render() {

        return (
            <div className="digitalEdgeBody">
                <div className="pepperImg">
                    <img alt="" src={pepper_hello}/>
                    <img alt="" src={hello_animation}/>
                </div>
                <div>
                  <h1>Digital Edge</h1>
                  <h3>After spending much of my freetime teaching myself to code, I got a job as a developer at a startup called Digital Edge. My hobby had become my full time job! At Digital Edge I am programming a humanoid robot so that it can work as a receptionist. I'm using the library Vue.js and APIs like Naoqi and Google cloud. Initially I worked full time for 2 months, but when I started my internship at Ericsson I switched to work only at weekends.</h3>
                </div>

            </div>
        );
        }
}

export default DigitalEdgeSection;
