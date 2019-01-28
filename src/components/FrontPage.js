import React from 'react';
import './FrontPage.css';
import Resume from './Resume.js'
import WelcomeSection from './WelcomeSection.js'
import MeSection from './MeSection.js'
import WebSection from './WebSection.js'
import AppsSection from './AppsSection.js'
import ServiceSection from './ServiceSection.js'
import NavigationBar from './NavigationBar.js'
import kid from "./../img/kid.jpg"
import scrollToComponent from 'react-scroll-to-component';

class FrontPage extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                resumeBackground:{
                    backgroundImage :"url(" + kid + ")",
                },
                navigationBackground:{
                    backgroundColor :"transparent",
                },
            }
            this.handleData = this.handleData.bind(this);
            this.handleScroll = this.handleScroll.bind(this);
            this.changeNav = this.changeNav.bind(this);
            this.bodyRef = React.createRef();
        }
    changeNav() {
        const body = this.bodyRef.current;
        if(body.scrollTop > 490){
            this.setState({
                navigationBackground:{
                    backgroundColor :"black",
                }
            });
        }else{
            this.setState({
                navigationBackground:{
                    backgroundColor :"transparent",
                }
            });
        }
    }
    handleData(data) {
        this.setState({
            resumeBackground:{
                backgroundImage :"url(" + data + ")",
            }
        });
    }
    handleScroll(data) {
        const body = this.bodyRef.current;
        switch(data) {
          case "welcome":
            body.scrollTo(0, 0);
            break;
          case "me":
            body.scrollTo(0, 1500);
            break;
          case "web":
            body.scrollTo(0, 2000);
            break;
          case "apps":
            body.scrollTo(0, 2500);
            break;
          case "service":
            body.scrollTo(0, 3000);
            break;
        }
    }
    render() {
        return (
            <div className="FrontPage">
                <div className="NavigationBar" style = {this.state.navigationBackground}>
                    <NavigationBar scrollfromParent={this.handleScroll} />
                </div>
                <div className="body" ref={this.bodyRef} onScroll={this.changeNav}>
                    <div className="WelcomeSection">
                        <div >
                            <WelcomeSection />
                        </div>
                    </div>
                    <div style = {this.state.resumeBackground} className="Resume">
                        <div className="paper">
                            <Resume handlerFromParent={this.handleData} scrollfromParent={this.handleScroll}/>
                        </div>
                    </div>
                    <div className="MeSection">
                        <div >
                            <MeSection/>
                        </div>
                    </div>
                    <div className="WebSection">
                        <div >
                            <WebSection/>
                        </div>
                    </div>
                    <div className="AppsSection">
                        <div >
                            <AppsSection/>
                        </div>
                    </div>
                    <div className="ServiceSection">
                        <div >
                            <ServiceSection/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontPage;
