import React, {Component} from "react";

class Contact extends Component {


    render(){
        const {contact} = this.props;
        return(
            <div>
                <p>{contact.firstName}</p>
                <p>{contact.lastName}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.address}</p>
                <p>{contact.city}</p>
                <p>{contact.st}</p>
                <p>{contact.zip}</p>
            </div>
        )
    }
}

export default Contact;