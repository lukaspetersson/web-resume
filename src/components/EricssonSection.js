import React from 'react';
import './EricssonSection.css';

class EricssonSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
            }
    }
    render() {

        return (
            <div className="ericssonBody">
              <div>
                <h1>Internship - Programming</h1>
                <h2>Ericsson</h2>
                <h3>Working at two companies so different in terms of size was a great experience! It gave me valuable insight into what motivates me. As an intern the primary goal is to learn things. I worked with WebRTC and I built web apps with React.js and an Android app with Kotlin.</h3>
              </div>
            </div>
        );
        }
}

export default EricssonSection;
