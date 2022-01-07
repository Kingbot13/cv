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
      ed: [],
      edItem: {
        school: '',
        degree: '',
        years: '',
        id: uniqid(),
      }
    }
  }

  handleChange = (e) => {
    this.setState((prev)=> {
      return {
        ...prev,
        
      }
      // item: {
      //   text: e.target.value,
      //   id: this.state.item.id
      // }
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
  
  handleEdChange = (e) => {
    
    e.target.id === 'school' ?
    this.setState({
      edItem: {
        school: e.target.value,
      }
    }) :
    e.target.id === 'degree' ?
    this.setState({
      edItem: {
        degree: e.target.value
      }
    }) :
    this.setState({
      edItem: {
        years: e.target.value
      }
    });
  }

  render(){
    const {contacts, item, ed, edItem} = this.state;
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
            <Education items={ed}/>
            {this.state.show && 
            <div>
              <input id='school' name='school' value={this.edItem.school}></input>
              <input id='degree' name='degree' value={this.edItem.degree}></input>
              <input id='years' name='years' value={this.edItem.years}></input>

            </div>}

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
