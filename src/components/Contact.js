import React, {Component} from "react";

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            text: ''
        }
    }


    render(){
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
            </div>
        )
    }
}

export default Contact;