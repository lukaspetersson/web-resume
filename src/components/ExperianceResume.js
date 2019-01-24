import React from 'react';
import './ExperianceResume.css';

class ExperianceResume extends React.Component {
    constructor(props){
            super(props)
    }

    render() {
        let schools=[]
        for(let i=0; i < 3 ; i++){
          schools.push(
              <li>
                <span className="title">{this.props.info.examples[i].name}</span>
                <span className="year">{this.props.info.examples[i].year}</span>
              </li>
          )
        }
        return (
            <div className="Experiance">
                <p>{this.props.info.title}</p>
                <ul>{schools}</ul>
                <div className="boder"></div>
            </div>
        );
    }
}

export default ExperianceResume;
