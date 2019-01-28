import React from 'react';
import './SmallBlock.css';

class SmallBlock extends React.Component {
    constructor(props){
            super(props)
    }
    render() {
        return (
            <div className="SmallBlock">
                <img src={this.props.info.image}/>
                <p>{this.props.info.description}</p>
            </div>
        );
    }
}

export default SmallBlock;
