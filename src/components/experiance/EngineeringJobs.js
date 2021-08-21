import React from 'react';
import './EngineeringJobs.css';
import pepper_hello from "./../../img/pepper_hello.gif"

class EngineeringJobs extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			includePepper: false
		}
		this.resizeWindow = this.resizeWindow.bind(this)
	}

	componentDidMount(){
		this.resizeWindow()
		 window.addEventListener('resize', this.resizeWindow)
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.resizeWindow)
	}
	resizeWindow = ()=>{
		if(window.innerWidth > 450){
			this.setState({
			  includePepper: true
			})
		}else{
			this.setState({
			  includePepper: false
			})
		}
	}

	render() {
		var pepper;
		if(this.state.includePepper){
			pepper = <div className="pepperImg"><img alt="" src={pepper_hello}/></div>
		}

		return (
			<div className="workBody">
				<h1>Professional Experience</h1>
				<div className="space">
					<div>
						<h2>Flight Software Systems Intern</h2>
						<h4>European Space Agency</h4>
						<h4>Summer 2021</h4>
						<p>	• Implementing a syntax/sematic validator for a lowlevel language using modeling tools and Java</p>
						<p>	• Significant improvement on existing technology</p>
						<p>	• Paper publication and presentation for a conference</p>
					</div>
				</div>
				{pepper}
				<div className="lunicore_DigitalEdge">
					<div>
						<h2>IT Consultant</h2>
						<h4>Lunicore</h4>
						<h4>Nov 2019 - Present, Part time</h4>
						<p>	• Helped small businesses digitalize by building full-stack websites and tools</p>
						<p>	• Agile approach in dialogue with the customer</p>
					</div>
					<div>
						<h2>Junior Robotics Software Developer</h2>
						<h4>Digital Edge</h4>
						<h4>Nov 2018 - Jul 2019, Full time</h4>
						<p>	• Developed a big part of the robotic software which would become the start-up’s specialization</p>
						<p>	• Enhanced robot-human interactions by building user friendly interfaces and implementing facial recognition and speech-to-text libraries</p>
						<p>	• Outside the box thinking when implementing an Android solution for the robot’s microphone</p>
					</div>
				</div>

				<div className="ericsson">
					<div >
						<h2>Software Developer Intern</h2>
						<h4>Ericsson</h4>
						<h4>Jan 2019 - May 2019, Full time</h4>
						<p>	• Improved internal communication by creating a real-time file sharing web application with ReactJS</p>
						<p>	• Built an improved Android phone app with Kotlin</p>
						<p>	• Insight into how huge global companies operates</p>
					</div>
				</div>
			</div>
		);
	}
}

export default EngineeringJobs;
