import React, {Component} from "react";

class Contact extends Component {


    render(){
        const {items} = this.props;
        return(
            <div>

            {items.map((item)=>{
                return (
                    <div key={item.id}>
                        <p>{item.firstName}</p>
                        <p>{item.lastName}</p>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        <p>{item.address}</p>
                        <p>{item.city}</p>
                        <p>{item.st}</p>
                        <p>{item.zip}</p>
                    </div>

                    )
                })}
            </div>
        );
    }
}

export default Contact;