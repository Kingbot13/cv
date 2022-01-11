import React, {Component} from "react";
import '../styles/Contact.css';

class Contact extends Component {


    render(){
        const {items} = this.props;
        return(
            <div>

            {items.map((item)=>{
                return (
                    <div key={item.id} className="container">
                        <p>{item.firstName} {item.lastName}</p>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        <p>{item.address}</p>
                        <p>{item.city}, {item.st} {item.zip}</p>
                    </div>
                    )
                })}
            </div>
        );
    }
}

export default Contact;