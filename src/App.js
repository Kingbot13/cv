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
      item: {
        text: '',
        id: uniqid(),
      },
    }
  }

  handleChange = (e) => {
    this.setState({
      item: {
        text: e.target.value,
        id: this.state.item.id
      }
    });
  }
  
  addContact = () => {
    this.setState({
      contacts: this.state.contacts.concat(this.state.item),
      item : {
        text: '',
        id: uniqid()
      } 
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
            <input id='contact' type='text' onChange={this.handleChange} value={item.text}></input>}
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
