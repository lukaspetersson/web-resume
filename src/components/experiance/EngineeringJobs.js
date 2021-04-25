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
						<p>Implementation of a model-based workbench for system-engineering using Java and model transformation languages. Gave me insight into the space industry.</p>
					</div>
				</div>
				{pepper}
				<div className="lunicore_DigitalEdge">
					<div>
						<h2>IT Consultant</h2>
						<h4>Lunicore</h4>
						<h4>Nov 2019 - Present, Part time</h4>
						<p>Full Stack development with the MERN stack. Made me comfortable working with backend development and APIs with bad documentation. As a consultant I learned the importance of an agile approach in dialogue with the customer.</p>
					</div>
					<div>
						<h2>Junior Software Developer</h2>
						<h4>Digital Edge</h4>
						<h4>Nov 2018 - Jul 2019, Full time</h4>
						<p>Part of a small team who worked with the product that would become the start-up´s specialization. I programmed a robot to work as a receptionist using VueJS for the frontend and Python for communication with the robot´s limbs. After a year the robot could do many more things.</p>
					</div>
				</div>

				<div className="ericsson">
					<div >
						<h2>Software Developer Intern</h2>
						<h4>Ericsson</h4>
						<h4>Jan 2019 - May 2019, Full time</h4>
						<p>As an intern I learned a lot in a short amount of time as I got coaching from professionals in the industry. I made web applications using React.js and Android apps using Kotlin. Working at a huge global company taught me how such organizations operates.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default EngineeringJobs;
