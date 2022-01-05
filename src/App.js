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
      item: {text: ''},
    }
  }

  handleChange = (e) => {
    this.setState({
      item: {
        text: e.target.value
      }
    });
  }
  
  addContact = (e) => {
    this.setState({
      contacts: this.state.contacts.concat(this.state.item),
      item : {text: ''} 
    });
  }
  
  render(){
    const {contacts, item} = this.state;
    return(
      <main>
        <button>Edit</button>
        <form>
          <div>
            <Contact items={contacts}/>
            {this.state.show && 
            <input id='contact' onChange={this.handleChange} value={item}></input>}
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
