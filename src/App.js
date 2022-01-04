import React, {Component} from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Work from './components/Work';


class App extends Component {
  constructor(){
    super();
    this.state = {
      show: true,
      contacts: [],
      contact: {text: ''},
    }
  }

  contactHandler = (e) => {
    this.setState({
      contact: {
        text: e.target.value
      }
    });
  }
  
  contactSubmit = (e) => {
    this.setState({
      contacts: this.state.contact.concat(this.state.contactText),
      contact : {text: ''} 
    });
  }
  
  render(){
    const {contacts, contact} = this.state;
    return(
      <main>
        <button>Edit</button>
        <form>
          <div>
            <Contact items={contacts}/>
            {this.state.show && 
            <input id='contact' onChange={this.contactHandler} value={this.state.contactText}></input>}
            <button type='button'>Add</button>
          </div>
          <div>
            <Education />
            {this.state.show && 
            <input></input>}

          </div>
          <div>
            <Work />
            {this.state.show && 
            <input></input>}

          </div>
          <button type='submit'>Submit</button>
        </form>
      </main>
    )
  }
}

export default App;
