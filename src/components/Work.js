import React, {Component} from "react";

class Work extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <p>The Ceramic Tile Warehouse</p>
                <div>
                    <p>Assistant Showroom Manager</p>
                    <p>2020 - present</p>
                    <p>Tasks:</p>
                    <ul>
                        <li>Delegate tasks to coworkers to accomplish goals</li>
                        <li>Manage accounts payables</li>
                        <li>Assist with managing warehouse duties</li>
                        <li>Work with customers on salesfloor</li>
                        <li>Assist with maintaining employee shifts</li>
                    </ul>
                </div>
                <div>
                    <p>Customer Service</p>
                    <p>2015 - 2020</p>
                    <p>Tasks:</p>
                    <ul>
                        <li>Sell to customers on salesfloor</li>
                        <li>Clean the showroom</li>
                        <li>Clean the warehouse</li>
                        <li>Answer the phone</li>
                        <li>Handle complaints</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Work;