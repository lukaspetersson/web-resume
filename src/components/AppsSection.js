import React from 'react';
import './AppsSection.css';
import booklog_logo from "./../img/booklog_logo.png"
import SmallBlock from "./SmallBlock.js";

class AppsSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                booklog:{
                    title:"Booklog",
                    description:"blablabla",
                    image: booklog_logo
                }
            }
    }
    render() {
        return (

            <div className="appsBody">
                <h1>My Mobile Apps</h1>

                    <SmallBlock info={this.state.booklog}/>



            </div>
        );
    }
}

export default AppsSection;
