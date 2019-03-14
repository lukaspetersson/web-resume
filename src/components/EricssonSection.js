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
                <h1>Ericsson</h1>
                <h3>Simultaneously working at two companies that were like day and night in terms of size was a great experience, I got an insight in how such an enormous company is managed. More importantly, I made some great friends and Improved my coding skills. I worked with web development with focus on WebRTC and React.js.</h3>
              </div>
            </div>
        );
        }
}

export default EricssonSection;
