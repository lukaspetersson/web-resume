import React from 'react';
import './SmallBlock.css';

class SmallBlock extends React.Component {
    constructor(props){
            super(props)
    }
    render() {
        return (
            <div className="flip-card" style={{height:this.props.height}}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="SmallBlock">
                      <img src={this.props.info.image.front}/>
                      <p>2018</p>
                      <p>{this.props.info.description}</p>
                  </div>
                </div>
                <div className="flip-card-back">
                  <img src={this.props.info.image.back} style={{height:this.props.height}}/>
                </div>
              </div>
            </div>



        );
    }
}

export default SmallBlock;
