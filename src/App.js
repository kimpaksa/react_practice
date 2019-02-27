import React, { Component } from 'react';
import './App.css';
//import MyComponent from './MyComponent';  
//import EventPractice from './EventPractice';
//import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return(
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox = ref}/>
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
        맨 밑으로</button>
      </div>
    );
  }
}

//<MyComponent name="Kim Sang Woo" age={33}/>

export default App;
