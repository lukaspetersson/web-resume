import React from 'react';
import './SkillsSection.css';
import prog_lang from "./../img/prog_lang.png"
import technologies from "./../img/technologies.png"


class SkillsSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
            }
    }


    render() {


        return (

            <div className="skillsBody">
				<div className="headerCard"><h1>Skills</h1></div>
				<div>

				<div className="skill">
					<div className="bigCard">

				<h3>Languages</h3>
					<img alt="" src={prog_lang}/>
					</div>
				</div>
				<div className="skill">
					<div className="bigCard">
				<h3>Technologies</h3>
					<img alt="" src={technologies}/>
				</div>
				</div>
				</div>
            </div>
        );
        }
}

export default SkillsSection;
