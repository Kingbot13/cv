import React, {Component} from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Work from './components/Work';


class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      text: '',
      show: true
    }
  }
  render(){
    return(
      <main>
        <button>Edit</button>
        <div>
          <Contact />
          {this.state.show && <div>
            <form>
              <label htmlFor='name'>Name</label>
              <input name='name' id='name'></input>
              <label htmlFor='email'>Email</label>
              <input name='email' id='email'></input>
              <label htmlFor='phone'>Phone</label>
              <input name='phone' id='phone'></input>
            </form>
          </div>}
        </div>
        <div>
          <Education />

        </div>
        
        <div>
          <Work />

        </div>
      </main>
    )
  }
}

export default App;
