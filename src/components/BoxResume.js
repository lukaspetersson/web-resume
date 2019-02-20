import React from 'react';
import './BoxResume.css';

class BoxResume extends React.Component {
    constructor(props){
            super(props)
    }
    render() {

        return (
            <div className="boxBody" style={{backgroundColor : this.props.info.color, backgroundImage : "url("+this.props.info.image+")"}}>
                <p className="boxTitle">{this.props.info.title}</p>
                <div className="hoverContainer" style={{backgroundColor : this.props.info.subColor}}>
                    <p className="boxTitle">{this.props.info.title}</p>
                    <p className="boxSubTitle">{this.props.info.subTitle}</p>
                </div>
            </div>
        );
    }
}

export default BoxResume;
