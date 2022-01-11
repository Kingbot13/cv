import React, {Component} from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Work from './components/Work';
import uniqid from 'uniqid';
import './styles/App.css';


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
        id: uniqid(),

      },
      education: {
        school: '',
        degree: '',
        years: '',
        id: uniqid(),

      },
      work: {
        company: '',
        role: '',
        years: '',
        tasks: '',
        id: uniqid(),

      },
    }
  }


  contactChange = (e) => {
    const {name, value} = e.target;
    this.setState({   
        contact : {
          ...this.state.contact,
          [name] : value,
          id: this.state.contact.id,
        }
    });
  }
  edChange = (e) => {
    const {name, value} = e.target;
    this.setState({
        education : {
          ...this.state.education,
          [name] : value,
          id: this.state.education.id
        }
    });
  }
  workChange = (e) => {
    const {name, value} = e.target;
    this.setState({
        work : {
          ...this.state.work,
          [name] : value,
          id: this.state.work.id,
        }
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prev) => {
      return {
        ...prev,
        contacts: this.state.contacts.concat(this.state.contact),
      }
    });
  const contactForm = document.querySelector('.contact-form');
  contactForm.classList.toggle('hidden');

  }
  edSubmit = (e) => {
    e.preventDefault();

    this.setState((prev)=> {
      return {
        ...prev,
        educations: this.state.educations.concat(this.state.education),
        education : {
          school: '',
          degree: '',
          years: '',
          id: uniqid(),
          } 
      }
    });
  }
  workSubmit = (e) => {
    e.preventDefault();

    this.setState((prev)=> {
      return {
        ...prev,
        career: this.state.career.concat(this.state.work),
        work : {
          company: '',
          role: '',
          years: '',
          tasks: '',
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
        <h2>Personal Info</h2>
        <Contact items={contacts} />
            <form onSubmit={this.handleSubmit} className='contact-form'>
              <label htmlFor='firstname'>First Name</label>
              <input id='firstName' type='text' name='firstName' onChange={this.contactChange} value={contact.firstName}></input>
              <label htmlFor='lastName'>Last Name</label>
              <input id='lastName' type='text' name='lastName' onChange={this.contactChange} value={contact.lastName}></input>
              <label htmlFor='email'>email</label>
              <input id='email' type='text' name='email' onChange={this.contactChange} value={contact.email}></input>
              <label htmlFor='phone'>Phone</label>
              <input id='phone' type='text' name='phone' onChange={this.contactChange} value={contact.phone}></input>
              <label htmlFor='address'>address</label>
              <input id='address' type='text' name='address' onChange={this.contactChange} value={contact.address}></input>
              <label htmlFor='city'>city</label>
              <input id='city' type='text' name='city' onChange={this.contactChange} value={contact.city}></input>
              <label htmlFor='st'>State</label>
              <input id='st' type='text' name='st' onChange={this.contactChange} value={contact.st}></input>
              <label htmlFor='zip'>zip</label>
              <input id='zip' type='text' name='zip' onChange={this.contactChange} value={contact.zip}></input>
              <button type='submit'>Submit</button>
            </form> 
            <hr></hr>
          <h2>Education</h2>
          <Education items={educations}/>
           
            <form onSubmit={this.edSubmit}>
              <label htmlFor='school'>School</label>
              <input id='school' name='school' value={education.school} onChange={this.edChange}></input>
              <label htmlFor='degree'>Degree</label>
              <input id='degree' name='degree' value={education.degree} onChange={this.edChange}></input>
              <label htmlFor='years'>Years</label>
              <input id='years' name='years' value={education.years} onChange={this.edChange}></input>
              <button type='submit'>Add</button>
            </form>
            <hr></hr>
          <h2>Work Experience</h2>
          <Work items={career}/>
        
          <form onSubmit={this.workSubmit}>
            <label htmlFor='company'>Company</label>
            <input id='company' name='company' value={work.company} onChange={this.workChange}></input>
            <label htmlFor='role'>Role</label>
            <input id='role' name='role' value={work.role} onChange={this.workChange}></input>
            <label htmlFor='years'>Years</label>
            <input id='years' name='years' value={work.years} onChange={this.workChange}></input>
            <label htmlFor='tasks'>Tasks</label>
            <textarea id='tasks' name='tasks' value={work.tasks} onChange={this.workChange}></textarea>
            <button type='submit'>Add</button>
          </form>
      </main>
    )
  }
}

export default App;
