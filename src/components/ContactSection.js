import React from 'react';
import './ContactSection.css';

class ContactSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {}
    }
    render() {
        return (
            <div className="contactBody">
                <h1>Contact</h1>
                <h3>pcsnkancpsnp</h3>
            </div>
        );
    }
}

export default ContactSection;
