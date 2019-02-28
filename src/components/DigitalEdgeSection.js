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
            </div>
        );
        }
}

export default DigitalEdgeSection;
