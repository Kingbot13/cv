import React, {Component} from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Work from './components/Work';
import uniqid from 'uniqid';


class App extends Component {
  constructor(){
    super();
    this.state = {
      show: true,
      // contacts: [],
      educations: [],
      career: [],
      /* 
        add univeral method to store state
      */
      // schools: [],
      // degrees: [],
      // years: [],
      // add work related entries here
      contact: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        st: '',
        zip: '',
      },
      education: {
        text: '',
        id: uniqid(),
      },
      work: {
        text: '',
        id: uniqid(),
      },
    }
  }

  handleChange = (e) => {
    this.setState((prev)=> {
      const {name, value} = e.target;
      return {
        ...prev,
        [name] : {
          text: value,
          id: this.state.id
        }
      }
      // item: {
      //   text: e.target.value,
      //   id: this.state.item.id
      // }
    });
  }
  
  handleSubmit = (e) => {
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
            {this.state.show && 
              <form name='contacts'>
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

            <Education items={educations}/>
            {this.state.show && 
              <form name='educations'>
                <input id='education' name='education' value={education.text} onChange={this.handleChange}></input>
                {/* <input id='school' name='school' value={this.edItem.school}></input>
                <input id='degree' name='degree' value={this.edItem.degree}></input>
                <input id='years' name='years' value={this.edItem.years}></input> */}
                <button type='submit'>Add</button>


              </form>}
            <Work items={career}/>
            {this.state.show && 
            <form name='career'>
              <input id='work' name='work' value={work.text} onChange={this.handleChange}></input>
              <button type='submit'>Add</button>
            </form>}
      </main>
    )
  }
}

export default App;
