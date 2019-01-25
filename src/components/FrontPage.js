import React from 'react';
import './FrontPage.css';
import Resume from './Resume.js'
import MeSection from './MeSection.js'
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
    }
    render() {
        return (
            <div className="body">
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

            </div>
        );
    }
}

export default FrontPage;
