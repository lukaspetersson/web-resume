import React from 'react';
import './ExperianceResume.css';

class ExperianceResume extends React.Component {
    constructor(props){
            super(props)
    }

    render() {
        let examples=[]
        for(let i=0; i < this.props.info.examples.length ; i++){
          examples.push(
              <li>
                <span className="type">{this.props.info.examples[i].name}</span>
                <span className="year">{this.props.info.examples[i].year}</span>
              </li>
          )
        }
        return (
            <div className="Experiance">
                <p>{this.props.info.title}</p>
                <ul>{examples}</ul>
                <div className="boder"></div>
            </div>
        );
    }
}

export default ExperianceResume;
