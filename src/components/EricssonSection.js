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
                <h3>Working at two companies so different in terms of size is a great experience! It has given me valuable insight in what motivates me. As an intern the primary goal is to learn things. I have worked with WebRTC and have built web and Android apps with React.js and Kotlin.</h3>
              </div>
            </div>
        );
        }
}

export default EricssonSection;
