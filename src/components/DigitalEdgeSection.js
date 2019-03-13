import React from 'react';
import './DigitalEdgeSection.css';
import pepper_hello from "./../img/pepper_hello.png"

class DigitalEdgeSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
            }
    }
    render() {

        return (
            <div className="digitalEdgeBody">
                <img src={pepper_hello}/>
                <div>
                  <h1>Digital Edge</h1>
                  <h3>After spending much of my freetime teaching myself to code I got a job as a developer at a startup called Digital Edge, my hobby had become my full time job. At Digital Edge I have been programming a humanoid robot so that it can work as a receptionist. I worked full time for 2 months, but then switched to working weekends during my internship at Ericsson.</h3>
                </div>

            </div>
        );
        }
}

export default DigitalEdgeSection;
