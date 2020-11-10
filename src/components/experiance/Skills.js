import React from 'react';
import './Skills.css';
import prog_lang from "./../../img/prog_lang.png"
import technologies from "./../../img/technologies.png"


class Skills extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}


	render() {


		return (

			<div className="skillsBody">
				<h1>Skills</h1>
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

export default Skills;
