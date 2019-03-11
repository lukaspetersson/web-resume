import React from 'react';
import './NavigationBar.css';

class NavigationBar extends React.Component {
    constructor(props){
            super(props)
            this.state = {

            }
    }

    render() {
        return (
            <div className="bar">
                <span>Top</span>
                <span>Top</span>
                <span>Contact</span>
            </div>
        );
    }
}

export default NavigationBar;
