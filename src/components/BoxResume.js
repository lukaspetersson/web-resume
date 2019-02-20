import React from 'react';
import './BoxResume.css';

class BoxResume extends React.Component {
    constructor(props){
            super(props)
    }
    render() {

        return (
            <div className="boxBody" style={{backgroundColor : this.props.info.color, backgroundImage : "url("+this.props.info.image+")"}}>
                <p>{this.props.info.title}</p>
                <div className="hoverContainer">
                    <p>{this.props.info.subTitle}</p>
                </div>
            </div>
        );
    }
}

export default BoxResume;
