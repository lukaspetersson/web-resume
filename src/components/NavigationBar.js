import React from 'react';
import './NavigationBar.css';
import menu_icon from "./../img/menu_icon.png"
import DowloadPage from "./DowloadPage.js";


class NavigationBar extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                downloadVisibility: false,
                downloadContainerClass: "downloadContainer",
                downloadContainerContentClass: "downloadContainerContent",
            }
            this.visibilityToggle = this.visibilityToggle.bind(this)
            this.renderInfo = this.renderInfo.bind(this)
    }

    renderInfo() {
        const menu = document.querySelector('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4');
        menu.classList.toggle("open");
        this.setState({
            downloadContainerClass: this.state.downloadContainerClass === "downloadContainer" ? "downloadContainer open" : "downloadContainer",
            downloadContainerContentClass: this.state.downloadContainerClass === "downloadContainer" ? "downloadContainerContent open" : "downloadContainerContent",
        })
    }

    visibilityToggle(){
        this.setState({
            downloadVisibility: !this.state.downloadVisibility
        })
    }

    render() {
        // <img src={menu_icon} onClick={this.visibilityToggle}/>
        // <span onClick={()=>{window.open("https://www.w3schools.com")}}>Compleate resume</span>
        // <span onClick={() => this.props.scrollfromParent("contact")}>Contact</span>
        // <div style={{visibility : this.state.downloadVisibility? "visible" : "hidden"}}>
        //     <DowloadPage toggleVisibility={this.visibilityToggle}/>
        // </div>
        return (
            <div className="navBar">







               <div className={this.state.downloadContainerClass}>
                    <div id="nav-container" onClick={this.renderInfo} >
                        <div id="nav-icon1">
                            <span style={{backgroundColor: "white"}}></span>
                            <span style={{backgroundColor: "white"}}></span>
                            <span style={{backgroundColor: "white"}}></span>
                        </div>
                    </div>
                    <div className={this.state.downloadContainerContentClass}>
                        <div className="infoDisplay">
                            dwdwd
                        </div>
                        <div className="divider"></div>

                        <div className="filesDisplay">

                        asdasd
                        </div>
                    </div>
                </div>








            </div>
        );
    }
}

export default NavigationBar;
