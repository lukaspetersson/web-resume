import React from 'react';
import './FrontPage.css';
import Resume from './Resume.js'
import WelcomeSection from './MeSection.js'
import MeSection from './MeSection.js'
import WebSection from './MeSection.js'
import AppsSection from './MeSection.js'
import ServiceSection from './MeSection.js'
import kid from "./../img/kid.jpg"

class FrontPage extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                backgroundStyle:{
                    backgroundImage :"url(" + kid + ")",
                },
            }
            this.handleData = this.handleData.bind(this);
        }
    handleData(data) {
        this.setState({
            backgroundStyle:{
                backgroundImage :"url(" + data + ")",
            }
        });

        window.scrollTo(0, 110)
    }
    render() {
        return (
            <div className="body">
                <div className="WelcomeSection">
                    <div >
                        <WelcomeSection/>
                    </div>
                </div>
                <div style = {this.state.backgroundStyle} className="Resume">
                    <div className="paper" >
                        <Resume handlerFromParent={this.handleData}/>
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
        );
    }
}

export default FrontPage;
