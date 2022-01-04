import React, {Component} from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Work from './components/Work';


class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <main>
        <Contact />
        <Education />
        <Work />
      </main>
    )
  }
}

export default App;
