import React from 'react';
import './BoxResume.css';

class BoxResume extends React.Component {
    constructor(props){
            super(props)
    }
    render() {
        var examples = [];
        for(var i = 0; i < this.props.info.subTitle.length; i++){
            examples.push(<p>{this.props.info.subTitle[i]}</p>)
        }

        return (
            <div className="boxBody" style={{backgroundColor : this.props.info.color, backgroundImage : "url("+this.props.info.image+")"}}>
                <p className="boxTitle">{this.props.info.title}</p>
                <div className="hoverContainer" style={{backgroundColor : this.props.info.subColor}}>
                    <p className="boxTitle">{this.props.info.title}</p>
                    <div className="boxSubTitle">
                        {examples}
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxResume;
