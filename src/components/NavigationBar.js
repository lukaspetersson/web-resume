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
                <span onClick={() => this.props.scrollfromParent("top")}>Top</span>
                <span onClick={()=>{window.open("https://www.w3schools.com")}}>Compleate resume</span>
                <span onClick={() => this.props.scrollfromParent("contact")}>Contact</span>
            </div>
        );
    }
}

export default NavigationBar;
