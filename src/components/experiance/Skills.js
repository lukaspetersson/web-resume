import React from 'react';
import './Skills.css';
import cs_skills from "./../../img/cs_skills.jpg"
import eng_skills from "./../../img/eng_skills.jpg"


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

							<h3>Computer Science</h3>
							<img alt="" src={cs_skills}/>
						</div>
					</div>
					<div className="skill">
						<div className="bigCard">
							<h3>Engineering</h3>
							<img alt="" src={eng_skills}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
