import React, {Component} from "react";

class Education extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div>
                    <p>TOP</p>
                    <p>Coding Bootcamp</p>
                    <p>May 2021 - Jan 2022</p>
                </div>
                <div>
                    <p>MTSU</p>
                    <p>BBA with a major in marketing</p>
                    <p>2018-2020</p>
                </div>
                <div>
                    <p>JSCC</p>
                    <p>Associates</p>
                    <p>2016-2018</p>
                </div>
                <div>
                    <p>CCHS</p>
                    <p>High School Diploma</p>
                    <p>2012-2016</p>
                </div>
                
            </div>
        )
    }
}

export default Education;