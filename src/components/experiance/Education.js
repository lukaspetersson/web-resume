import React from 'react';
import './Education.css';


class Education extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			boxSize: 100/2,
            transform: "translate(50%, 0)",
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
				boxSize: 100/2,
                transform: "translate(50%, 0)",
			})
		}else if(window.innerWidth < 710){
			this.setState({
				boxSize: 100,
                transform: "translate(0, 0)",
			})
		}
	}

	render() {
		var boxStyle ={
			width: this.state.boxSize+"%",
			lineHeight: this.state.boxSize/25+"vw",
            transform: this.state.transform
		}
		return (
			<div className="newEducationBody">
				<div className="headerCard"><h1>Education</h1></div>
				<div style={boxStyle}>
					<div className="bigCard">
						<h3>M.Sc. Engineering Physics</h3>
						<h4>Lund University</h4>
						<h4>Aug 2019 - May 2024</h4>
						<h4>GPA: 4.9 (out of 5)</h4>
					</div>
					<div className="bigCard">
						<h3>M.Sc. Engineering Mathematics</h3>
						<h4>Lund University</h4>
						<h4>Aug 2019 - May 2024</h4>
						<h4>GPA: 5.0 (out of 5)</h4>
					</div>
					<div className="bigCard">
						<h3>Exchange Year</h3>
						<h4>ETH Zürich</h4>
						<h4>Sept 2022 - Sept 2023</h4>
						<h4>Machine Learning, Robotics</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default Education;
