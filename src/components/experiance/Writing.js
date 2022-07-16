import React from 'react';
import './Education.css';
import MBSE_paper from "./../../downloads/MBSE_paper.pdf"


class Writing extends React.Component {
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
				<div className="headerCard"><h1>Blog & Publications</h1></div>
				<div style={boxStyle}>
					<div className="bigCard">
						<h3>ML & Music Blog</h3>
						<h4>2022 - Present</h4>
						<a href='https://yetools.net'>Ye Tools</a>
						<h4>Forcing myself to deeply understand ML by communicating my ideas to others</h4>
					</div>
					<div className="bigCard">
						<h3>Conference Publication</h3>
						<h4>2021</h4>
                        <a href={MBSE_paper} title="Download" download="Leveraging the Eclipse Modeling Framework to work with Electronic Datasheets">Leveraging the Eclipse Modeling Framework to work with Electronic Datasheets</a>
						<h4>Published and presented paper on Model Based Systems Engineering conference</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default Writing;
