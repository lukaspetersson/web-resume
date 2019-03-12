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
            <div className="downloadPageBody" >
                <a href={menu_icon} download>Click to download</a>
                <p onClick={this.props.toggleVisibility}>close</p>
            </div>
        );
    }
}

export default DowloadPage;
