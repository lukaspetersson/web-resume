import React from 'react';
import './NavigationBar.css';
import menu_icon from "./../img/menu_icon.png"
import DowloadPage from "./DowloadPage.js";


class NavigationBar extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                downloadVisibility: false,
                infoContainerClass: "infoContainer open",
                infoContainerContentClass: "infoContainerContent open",
            }
            this.visibilityToggle = this.visibilityToggle.bind(this)
            this.renderInfo = this.renderInfo.bind(this)
    }

    componentDidMount(){
        const menu = document.querySelector('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4');
        menu.classList.toggle("open");
    }
    renderInfo() {
        const menu = document.querySelector('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4');
        menu.classList.toggle("open");
        // this.setState({
        //     infoContainerClass: this.state.infoContainerClass === "infoContainer" ? "infoContainer open" : "infoContainer",
        //     infoContainerContentClass: this.state.infoContainerClass === "infoContainer" ? "infoContainerContent open" : "infoContainerContent",
        // })
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
                    <DowloadPage toggleVisibility={this.visibilityToggle}/>
                </div>






                <div className={this.state.infoContainerClass}>
                    <div id="nav-container" onClick={this.renderInfo} >
                        <div id="nav-icon1">
                            <span style={{backgroundColor: "white"}}></span>
                            <span style={{backgroundColor: "white"}}></span>
                            <span style={{backgroundColor: "white"}}></span>
                        </div>
                    </div>
                    <div className={this.state.infoContainerContentClass}>
                        <div className="infoDisplay">
                    +kw+0kw+0kd+wkd
                        </div>
                        <div className="divider"></div>

                        <div className="filesDisplay">

                        </div>
                    </div>
                </div>








            </div>
        );
    }
}

export default NavigationBar;
