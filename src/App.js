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
      contacts: [],


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
        school: '',
        degree: '',
        years: '',
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
          [name] : value,
          id: this.state.id
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
        ...prev,
        contacts: this.state.contacts.concat(this.state.contact),
        contact: {
          show: false,
        }
      }
    })
  }
  edSubmit = (e) => {
    this.setState((prev)=> {
      // const {name, value} = e.target;
      return {
        ...prev,
        educations: this.state.educations.concat(this.state.education),
        education : {
          school: '',
          degree: '',
          years: '',
          id: uniqid(),
          show: true,
          } 
      }
    });
  }
  workSubmit = (e) => {
    this.setState((prev)=> {
      // const {name, value} = e.target;
      return {
        ...prev,
        career: this.state.career.concat(this.state.work),
        work : {
          text: '',
          id: uniqid()
        } 
      }
    });
  }
  


  render(){
    const {contact, contacts, educations, education, work, career} = this.state;
    return(
      <main>
        <button>Edit</button>
        <Contact 
          firstName={contacts[0].firstName}
          lastName={contacts[0].lastName}
          email={contacts[0].email}
          phone={contacts[0].phone}
          address={contacts[0].address}
          city={contacts[0].city}
          st={contacts[0].state}
          zip={contacts[0].zip}
        />
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
              <input id='school' name='school' value={education.school} onChange={this.edChange}></input>
              <input id='degree' name='degree' value={education.degree} onChange={this.edChange}></input>
              <input id='years' name='years' value={education.years} onChange={this.edChange}></input>
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
