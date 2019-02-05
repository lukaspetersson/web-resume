import React from 'react';
import './SmallBlock.css';

class SmallBlock extends React.Component {
    constructor(props){
            super(props)
    }
    render() {
        return (
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="SmallBlock">
                      <img src={this.props.info.image.front}/>
                      <p>{this.props.info.description}</p>
                  </div>
                </div>
                <div className="flip-card-back">
                  <img src={this.props.info.image.back}/>
                </div>
              </div>
            </div>



        );
    }
}

export default SmallBlock;
