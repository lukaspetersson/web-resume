import React from 'react';
import './EngineeringJobs.css';
import pepper_hello from "./../../img/pepper_hello.gif"
import google_logo from "./../../img/google_logo.png"

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
		var google;
		if(this.state.includePepper){
			pepper = <div className="pepperImg"><img alt="" src={pepper_hello}/></div>
			google = <div className="pepperImg"><img alt="" src={google_logo}/></div>
		}

		return (
			<div className="workBody">
				<h1>Professional Experience</h1>
				{google}
				<div className="lunicore_DigitalEdge">
					<div>
						<h2>Software Engineering Intern</h2>
						<h4>Google</h4>
						<h4>June 2022 - Sept 2022</h4>
						<p>	• Automated data analysis by training a Decision Forest model</p>
						<p>	• Discovered weakness in training data by visualising it in graphs</p>
					</div>
					<div>
						<h2>Engineering Intern</h2>
						<h4>Comma AI</h4>
						<h4>March 2022 - June 2022</h4>
						<p>	• Orders of magnitude CI time reduction by parallelization compute</p>
						<p>	• Discovered latency bottlenecks by building timestamping tool</p>
					</div>
				</div>
				<div className="space">
					<div>
						<h2>Flight Software Systems Intern</h2>
						<h4>European Space Agency</h4>
						<h4>May 2021 - Sept 2021</h4>
						<p>	• Implementing a semantic validator for a low-level language using modelling tools</p>
						<p>	• Significant improvement on existing technology</p>
					</div>
				</div>
				{pepper}
				<div className="lunicore_DigitalEdge">
					<div>
						<h2>IT Consultant</h2>
						<h4>Lunicore</h4>
						<h4>Nov 2019 - Jan 2021</h4>
						<p>	• Enabled small businesses digitalize by building full-stack web tools</p>
						<p>	• Agile approach in dialogue with the customer</p>
					</div>
					<div>
						<h2>Junior Robotics Software Developer</h2>
						<h4>Digital Edge</h4>
						<h4>Nov 2018 - Jul 2019</h4>
						<p>	• Enhanced robot-human interactions by building user friendly interfaces and implementing facial recognition and speech-to-text libraries</p>
					</div>
				</div>

				<div className="ericsson">
					<div >
						<h2>Software Engineering Intern</h2>
						<h4>Ericsson</h4>
						<h4>Jan 2019 - May 2019</h4>
						<p>	• Improved internal communication by creating a real-time file sharing web application with ReactJS</p>
						<p>	• Built an improved Android phone app with Kotlin</p>
						<p>	• Improved internal communication by developing a real-time file sharing web app</p>
					</div>
				</div>
			</div>
		);
	}
}

export default EngineeringJobs;
