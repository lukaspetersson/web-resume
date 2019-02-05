import React from 'react';
import './WelcomeSection.css';
import down_logo from "./../img/down_logo.png"

class WelcomeSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {}
    }
    render() {
        return (
            <div className="welcomeBody">
                <div className="welcomeText">
                    <p>Hi</p>
                    <img src={down_logo} onClick={() => this.props.scrollfromParent("resume")}/>
                </div>
            </div>


        );
    }
}

export default WelcomeSection;
