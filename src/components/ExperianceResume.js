import React from 'react';
import './ExperianceResume.css';

class ExperianceResume extends React.Component {
    constructor(props){
            super(props)
    }
    hejsan(){
        this.props.handlerFromParent(this.state.hej);
    }

    render() {
        let itmes=[]
        for(let i=0; i < this.props.info.examples.length ; i++){
          if(this.props.info.examples[i].description){
              itmes.push(
                  <li>
                  <div className="item">
                    <span className="type">{this.props.info.examples[i].name}</span>
                    <span className="year">{this.props.info.examples[i].year}</span>
                  </div>
                  <br/>
                     <div className="description">{this.props.info.examples[i].description}</div>
                     <br/><br/>
                  </li>
              )
          }else{
              itmes.push(
                  <li>
                    <span onClick={this.hejsan} className="type">{this.props.info.examples[i].name}</span>
                    <span className="year">{this.props.info.examples[i].year}</span>
                    <br/>
                  </li>
              )
          }
        }
        return (
            <div className="Experiance">
                <p className="heading">{this.props.info.title}</p>
                <ul>{itmes}</ul>
                <div className="boder"></div>
            </div>
        );
    }
}

export default ExperianceResume;
