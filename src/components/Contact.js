import React, {Component} from "react";

class Contact extends Component {


    render(){
        return(
            <div>
                <p>{this.props.firstName}</p>
                <p>{this.props.lastName}</p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
                <p>{this.props.address}</p>
                <p>{this.props.city}</p>
                <p>{this.props.st}</p>
                <p>{this.props.zip}</p>
            </div>
        )
    }
}

export default Contact;