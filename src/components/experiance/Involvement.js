import React from 'react';
import './Involvement.css';

class Involvement extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			boxSize: 100/2,
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
		if(window.innerWidth > 800){
			this.setState({
				boxSize: 100/2
			})
		}else if(window.innerWidth < 800){
			this.setState({
				boxSize: 100
			})
		}
	}

	render() {
		var boxStyle ={
			height: this.state.boxSize/1.3+"vw",
			width: this.state.boxSize+"%",
			fontSize: this.state.boxSize/30+"vw",
            lineHeight: this.state.boxSize/30+"vw",
		}

		return (
			<div className="involvementBody">
				<div>
					<h1>Volunteer & Involvement</h1>
					<div className="formula" style={boxStyle}>
						<h2 style={{fontSize:this.state.boxSize/30+"vw"}}>Self Driving Engineer</h2>
						<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>Lund Formula Student</h4>
						<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>Aug 2020 - Present</h4>
						<p style={{fontSize:this.state.boxSize/40+"vw"}}>I use ML and Control theory to make Sweden’s best Formula Student car self-driven. Building a map of the track with CNNs and SLAM and using PD-controllers for control</p>
					</div>
					<div className="fadder_farad" style={boxStyle}>
						<div className="fadder">
							<h2 style={{fontSize:this.state.boxSize/30+"vw"}}>Mentor</h2>
							<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>F-Guild at LTH</h4>
							<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>Sep 2020</h4>
							<p style={{fontSize:this.state.boxSize/40+"vw"}}>Organizing a Covid-19 friendly novice period put a lot of responsibility on the mentors. I learned a lot about leadership and my effort was highly appreciated by the novices.</p>
						</div>
						<div className="Farad">
							<h2 style={{fontSize:this.state.boxSize/30+"vw"}}>IT Manager</h2>
							<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>Farad</h4>
							<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>Okt 2019 - Feb 2020</h4>
							<p style={{fontSize:this.state.boxSize/40+"vw"}}>Responsible for the website of the F-Guild’s Career Fair Days.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Involvement;
