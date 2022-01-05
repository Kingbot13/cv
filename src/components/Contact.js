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
        const {contacts} = this.props;
        return(
            <div>
                {contacts.map((info) =>{
                    return <p key={info.id}>{info.text}</p>
                })}
            </div>
        )
    }
}

export default Contact;