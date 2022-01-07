import React, {Component} from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Work from './components/Work';
import uniqid from 'uniqid';


class App extends Component {
  constructor(){
    super();
    this.state = {
      educations: [],
      career: [],
      /* 
        add univeral method to store state
      */

      contact: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        st: '',
        zip: '',
        show: true,

      },
      education: {
        text: '',
        id: uniqid(),
        show: true,

      },
      work: {
        text: '',
        id: uniqid(),
        show: true,

      },
    }
  }

  contactChange = (e) => {
    this.setState((prev)=> {
      const {name, value} = e.target;
      return {
        contact : {
          ...prev,
          [name] : value,
          show: false,
        }
      }
    });
  }
  edChange = (e) => {
    this.setState((prev)=> {
      const {name, value} = e.target;
      return {
        education : {
          ...prev,
          [name] : value
        }
      }
    });
  }
  workChange = (e) => {
    this.setState((prev)=> {
      const {name, value} = e.target;
      return {
        work : {
          ...prev,
          [name] : value
        }
      }
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prev) => {
      return {
        contact: {
          ...prev,
          show: false,
        }
      }
    })
  }
  edSubmit = (e) => {
    this.setState((prev)=> {
      const {name, value} = e.target;
      return {
        ...prev,
        [name]: this.state[name].concat(this.state.item),
        item : {
          text: '',
          id: uniqid()
        } 
      }
    });
  }
  workSubmit = (e) => {
    this.setState((prev)=> {
      const {name, value} = e.target;
      return {
        ...prev,
        [name]: this.state[name].concat(this.state.item),
        item : {
          text: '',
          id: uniqid()
        } 
      }
    });
  }
  


  render(){
    const {contact, educations, education, work, career} = this.state;
    return(
      <main>
        <button>Edit</button>
            <Contact props={contact}/>
            {contact.show && 
              <form name='contacts' onSubmit={this.handleSubmit}>
                <input id='firstName' type='text' name='firstName' onChange={this.handleChange} value={contact.firstName}></input>
                <input id='lastName' type='text' name='lastName' onChange={this.handleChange} value={contact.lastName}></input>
                <input id='email' type='text' name='email' onChange={this.handleChange} value={contact.email}></input>
                <input id='phone' type='text' name='phone' onChange={this.handleChange} value={contact.phone}></input>
                <input id='address' type='text' name='address' onChange={this.handleChange} value={contact.address}></input>
                <input id='city' type='text' name='city' onChange={this.handleChange} value={contact.city}></input>
                <input id='st' type='text' name='st' onChange={this.handleChange} value={contact.st}></input>
                <input id='zip' type='text' name='zip' onChange={this.handleChange} value={contact.zip}></input>
                <button type='submit'>Submit</button>

              </form>}
              <hr></hr>

            <Education items={educations}/>
            {education.show && 
              <form name='educations'>
                {/* <input id='education' name='education' value={education.text} onChange={this.handleChange}></input> */}
                <input id='school' name='school' value={this.edItem.school}></input>
                <input id='degree' name='degree' value={this.edItem.degree}></input>
                <input id='years' name='years' value={this.edItem.years}></input>
                <button type='submit'>Add</button>


              </form>}
              <hr></hr>
            
            <Work items={career}/>
            {work.show && 
            <form name='career'>
              <input id='work' name='work' value={work.text} onChange={this.handleChange}></input>
              <button type='submit'>Add</button>
            </form>}
      </main>
    )
  }
}

export default App;
