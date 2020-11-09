import React from 'react';
import './NewEducation.css';


class NewEducation extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			boxSize: 100/2,
		}
	}

	componentDidMount(){
		this.resizeWindow()
		window.addEventListener('resize', this.resizeWindow)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeWindow)
	}
	resizeWindow = ()=>{
		if(window.innerWidth > 710){
			this.setState({
				boxSize: 100/2
			})
		}else if(window.innerWidth < 710){
			this.setState({
				boxSize: 100
			})
		}
	}

	render() {
		var boxStyle ={
			width: this.state.boxSize+"%",
			lineHeight: this.state.boxSize/30+"vw",
		}
		return (
			<div className="newEducationBody">
				<div className="headerCard"><h1>Education</h1></div>
				<div className="cardsSection">
					<div className="physics" style={boxStyle}>
						<h2>Degree</h2>
						<div className="bigCard">
							<h3>M.Sc. Engineering Physics</h3>
							<h4>Lund University</h4>
							<h4>Aug 2019 - May 2024</h4>
							<h4>GPA: 4.0/4</h4>
							<p>As the most math-heavy degree in Sweden, Engineering Physics is a demanding choice of study, but one where you learn a lot. With courses in math, physics and computer science my problem-solving and analytical thinking skills are improving every single day.</p>
							<h4>Key courses</h4>
							<p>Linear Algebra, Multivariable Calculus, Complex Analysis</p>
							<p>Quantum Physics, Mechanics, Wave Theory</p>
						</div>
					</div>
					<div className="extracurricular" style={boxStyle}>
						<h2>Extracurricular</h2>
						<div className="bigCard">
							<h3>Fly a Rocket!</h3>
							<p>Selected as one out of 20 students from Europe to participate in ESA hands-on rocket science course. Participants take an online course to learn the theory and is finishing the course by building an launching the rocket from Andøya Space Center. </p>
						</div>
						<div className="bigCard">
							<h3>Computer Science</h3>
							<p>Taking non-mandatory courses in Algorithms and data structures, advanced Java, and Discrete mathematics.</p>
						</div>
						<div className="bigCard">
							<h3>Lund Startup Fellowship</h3>
							<p>Selected as one out of seven students from Lund to participate in an 6-month hands-on programme in the startup community</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewEducation;
