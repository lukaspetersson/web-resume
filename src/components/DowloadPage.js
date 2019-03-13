import React from 'react';
import './DowloadPage.css';
import menu_icon from "./../img/menu_icon.png"

class DowloadPage extends React.Component {
    constructor(props){
            super(props)
            this.state = {

            }
    }

    render() {
        return (
            <div className="downloadPageBody" onClick={this.props.toggleVisibility}>
                <div className="dowloadList" onClick={(e) => {e.stopPropagation()}}>
                    <a href={menu_icon} download>Click to download</a>
                </div>
            </div>
        );
    }
}

export default DowloadPage;
