import React from 'react';
import './NavigationBar.css';
import menu_icon from "./../img/menu_icon.png"
import DowloadPage from "./DowloadPage.js";


class NavigationBar extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                downloadVisibility: false
            }
            this.visibilityToggle = this.visibilityToggle.bind(this)
    }

    visibilityToggle(){
        this.setState({
            downloadVisibility: !this.state.downloadVisibility
        })
    }

    render() {
        return (
            <div className="navBar">
                <img src={menu_icon} onClick={this.visibilityToggle}/>
                <span onClick={()=>{window.open("https://www.w3schools.com")}}>Compleate resume</span>
                <span onClick={() => this.props.scrollfromParent("contact")}>Contact</span>
                <div style={{visibility : this.state.downloadVisibility? "visible" : "hidden"}}>
                    <DowloadPage/>
                </div>
            </div>
        );
    }
}

export default NavigationBar;
