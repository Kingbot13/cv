import React, {Component} from "react";
import '../styles/Work.css';

class Work extends Component{

    render(){
        const {items} = this.props;
        return(
            <div>
                {items.map((item)=> {
                    return (
                    <div key={item.id}>
                        <p className="company">{item.company}</p>
                        <p>{item.role}</p>
                        <p>{item.years}</p>
                        <p>{item.tasks}</p>
                    </div>

                    )
                })}
            </div>
        )
    }
}

export default Work;