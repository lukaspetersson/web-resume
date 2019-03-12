import React from 'react';
import './NavigationBar.css';
import menu_icon from "./../img/menu_icon.png"


class NavigationBar extends React.Component {
    constructor(props){
            super(props)
            this.state = {

            }
    }

    render() {
        // <span onClick={() => this.props.scrollfromParent("top")}>Top</span>
        return (
            <div className="navBar">
                <img src={menu_icon}/>
                <span onClick={()=>{window.open("https://www.w3schools.com")}}>Compleate resume</span>
                <span onClick={() => this.props.scrollfromParent("contact")}>Contact</span>
            </div>
        );
    }
}

export default NavigationBar;
