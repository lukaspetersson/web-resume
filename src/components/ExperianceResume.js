import React from 'react';
import './ExperianceResume.css';

class ExperianceResume extends React.Component {
    constructor(props){
            super(props)
            this.state={
              textTheme: {
                color: "#00AEC3",
              },
              backgroundTheme:{
                backgroundColor: "white"
              }
            }
            this.sectionHoover = this.sectionHoover.bind(this);
    }
    sectionHoover(enter){
      this.setState({
        textTheme: {
          color: enter? this.props.info.color : "#00AEC3",
        },
        backgroundTheme:{
          backgroundColor: enter? this.props.info.colorlight : "white"
        }
      })

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
                    <span className="type">{this.props.info.examples[i].name}</span>
                    <span className="year">{this.props.info.examples[i].year}</span>
                    <br/>
                  </li>
              )
          }
        }
        return (
            <div className="Experiance" style={this.state.backgroundTheme} onMouseEnter={() => this.sectionHoover(true)} onMouseLeave={() => this.sectionHoover(false)}>
                <p className="heading" style={this.state.textTheme}>{this.props.info.title}</p>
                <ul>{itmes}</ul>
                <div className="boder"></div>
            </div>
        );
    }
}

export default ExperianceResume;
