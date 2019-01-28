import React from 'react';
import './NavigationBar.css';

class NavigationBar extends React.Component {
    constructor(props){
            super(props)
            this.state = {}
    }
    render() {
        return (
            <div className="bar">
                <h1 onClick={() => this.props.scrollfromParent("welcome")}>LP</h1>
                <p onClick={() => this.props.scrollfromParent("me")}>ME</p>
                <p onClick={() => this.props.scrollfromParent("web")}>WEB</p>
                <p onClick={() => this.props.scrollfromParent("apps")}>APPS</p>
                <p onClick={() => this.props.scrollfromParent("service")}>SERVICE</p>
            </div>
        );
    }
}

export default NavigationBar;
