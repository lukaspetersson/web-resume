import React from 'react';
import './SmallBlock.css';

class SmallBlock extends React.Component {
    constructor(props){
            super(props)
    }
    render() {
        if(!this.props.info.image.back){
            return (
                <div className="card" style={{height:this.props.height}}>
                      <div className="SmallBlock" style={{height:this.props.height}}>
                          <img src={this.props.info.image.front}/>
                           <p>{this.props.info.year}</p>
                          <p>{this.props.info.description}</p>
                      </div>
                </div>
            );
        }else{
            return (
                <div className="flip-card" style={{height:this.props.height}}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="SmallBlock" style={{height:this.props.height, boxShadow: "0 4px 8px 0 rgba(0,0,0,0.3)"}}>
                          <img src={this.props.info.image.front}/>
                           <p>{this.props.info.year}</p>
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
}

export default SmallBlock;
