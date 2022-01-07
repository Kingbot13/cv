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
      contacts: [],
      educations: [],
      career: [],
      // schools: [],
      // degrees: [],
      // years: [],
      // add work related entries here
      contact: {
        text: '',
        id: uniqid(),
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
  
  // handleEdChange = (e) => {
    
  //   e.target.id === 'school' ?
  //   this.setState({
  //     edItem: {
  //       school: e.target.value,
  //     }
  //   }) :
  //   e.target.id === 'degree' ?
  //   this.setState({
  //     edItem: {
  //       degree: e.target.value
  //     }
  //   }) :
  //   this.setState({
  //     edItem: {
  //       years: e.target.value
  //     }
  //   });
  // }

  render(){
    const {contacts, contact, educations, education, work, career} = this.state;
    return(
      <main>
        <button>Edit</button>
            <Contact items={contacts}/>
            {this.state.show && 
              <form name='contacts'>
                <input id='contact' type='text' name='contact' onChange={this.handleChange} value={contact.text}></input>
                <button type='submit'>Add</button>

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
