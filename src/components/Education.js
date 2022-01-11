import React, {Component} from "react";
import '../styles/Education.css';

class Education extends Component{

    render(){
        const {items} = this.props;
        return(
            <div>
                {items.map((item)=> {
                    return (
                        <div key={item.id}>
                            <p className="school">{item.school}</p>
                            <p>{item.degree}</p>
                            <p>{item.years}</p>
                        </div>
                    );
                })}
            </div>
        )             
    }
}

export default Education;