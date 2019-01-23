import React from 'react';
import './FrontPage.css';
import Resume from './Resume.js'

function MeSection(props){
    return (
        <div>
            <p>Lukas Petersson</p>
        </div>
    )
}

class FrontPage extends React.Component {
    render() {
        return (
            <div>
                <div className="paper">
                    <Resume/>
                </div>
                <MeSection/>
            </div>

        );
    }
}

export default FrontPage;
