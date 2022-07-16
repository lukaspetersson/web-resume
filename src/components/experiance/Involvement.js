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
					<h1>Extracurricular</h1>
					<div className="formula" style={boxStyle}>
						<h2 style={{fontSize:this.state.boxSize/30+"vw"}}>Self Driving Engineer</h2>
						<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>Lund Formula Student</h4>
						<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>July 2020 - Aug 2022</h4>
						<p style={{fontSize:this.state.boxSize/40+"vw"}}>Turning Sweden’s best Formula Student car autonomous with ML and controls. Improved state estimation by building an Extended Kalman Filter library</p>
					</div>
					<div className="fadder_farad" style={boxStyle}>
						<div className="fadder">
							<h2 style={{fontSize:this.state.boxSize/30+"vw"}}>Robotics Software Specialist</h2>
							<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>ARIS</h4>
							<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>July 2022 - Present</h4>
							<p style={{fontSize:this.state.boxSize/40+"vw"}}>Underwater robot to explore the oceans of Jupiter and Saturn’s icy moons</p>
						</div>
						<div className="Farad">
							<h2 style={{fontSize:this.state.boxSize/30+"vw"}}>Lund Startup Fellowship</h2>
							<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>Skåne Startups</h4>
							<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>Nov 2019 - June 2020</h4>
							<p style={{fontSize:this.state.boxSize/40+"vw"}}>Organised entrepreneurial events for up to hundreds of guests and co-funded startup society</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Involvement;
