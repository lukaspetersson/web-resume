import React from 'react';
import './FrontPage.css';
import Resume from './Resume.js'
import kid from "./../img/kid.jpg"
import owl from "./../img/owl.jpg"

function MeSection(props){
    return (
        <div>
            <p>Lukas Petersson</p>
        </div>
    )
}

class FrontPage extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                backgroundStyle:{
                    backgroundImage :"url(" + kid + ")",
                },
            }
        }
    render() {
        return (
            <div style = {this.state.backgroundStyle} className="body">
                <div className="paper">
                    <Resume/>
                </div>
                <MeSection/>
            </div>

        );
    }
}

export default FrontPage;
