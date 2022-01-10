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
    const {name, value} = e.target;
    // console.log('before', this.state.contact);
    this.setState({
    
        contact : {
          ...this.state.contact,
          [name] : value,
          id: this.state.contact.id,
        }

      
    });
    console.log('after', this.state.contact);
    // console.log('value', value);
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
        // contact: {
        //   show: false,
        // }
      }
    });
  const contactForm = document.querySelector('.contact-form');
  contactForm.classList.toggle('hidden');
  console.log('state', this.state.contacts);
  console.log('object', this.state.contact);

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
          <form>
            <input id='work' name='work' value={work.text} onChange={this.handleChange}></input>
            <button type='submit'>Add</button>
          </form>}
      </main>
    )
  }
}

export default App;
