import React from 'react';
import './NavigationBar.css';
import menu_icon from "./../img/menu_icon.png"

class NavigationBar extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                downloadVisibility: false,
                downloadContainerClass: "downloadContainer",
                downloadContainerContentClass: "downloadContainerContent",
                menuSize:"50vw",
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

    componentDidMount(){
        this.resizeWindow()
         window.addEventListener('resize', this.resizeWindow)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.resizeWindow)
    }
    resizeWindow = ()=>{
        if(window.innerWidth < 600){
            this.setState({
              menuSize:"0",
            })
        }else if(window.innerWidth < 800){
          this.setState({
            menuSize:"20vw",
          })
        }else{
            this.setState({
              menuSize:"50vw",
            })
        }
    }

    render() {
        return (
            <div className="navBar">
               <div className={this.state.downloadContainerClass} style={{right: this.state.menuSize, height: this.state.downloadContainerClass === "downloadContainer" ? "20vh" : "100vh"}}>
                    <div id="nav-container" onClick={this.renderInfo} >
                        <div id="nav-icon1">
                            <span style={{backgroundColor: "white"}}></span>
                            <span style={{backgroundColor: "white"}}></span>
                            <span style={{backgroundColor: "white"}}></span>
                        </div>
                    </div>
                    <div className={this.state.downloadContainerContentClass}>
                        <div className="infoDisplay">
                            <h1>Resume download links</h1>
                        </div>
                        <div className="divider"/>
                        <div className="filesDisplay">
                        <a href={menu_icon} download>Resume</a>
                        <br/>
                        <a href={menu_icon} download>Personal letter</a>
                        <br/>
                        <a href={menu_icon} download>IGCSE grades</a>
                        <br/>
                        <a href={menu_icon} download>Gymnasium grades</a>
                        <br/>
                        <a href={menu_icon} download>TUI work certificate</a>
                        <br/>
                        <a href={menu_icon} download>Abbekås work certificate</a>
                        <br/>
                        <a href={menu_icon} download>Drottningholm work certificate</a>
                        <div className="divider"/>
                        <a href={menu_icon} download>Full resume</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;
