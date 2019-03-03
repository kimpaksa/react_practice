import React, { Component } from 'react';
import './App.css';
import LifeCycleSample from './LifeCycleSample';
//import IterationSample from './IterationSample';
//import MyComponent from './MyComponent';  
//import EventPractice from './EventPractice';
//import ValidationSample from './ValidationSample';
//import ScrollBox from './ScrollBox';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>랜덤색상 - 부모에서 만든 버튼</button>
        <LifeCycleSample color={this.state.color}/>
      </div>
    );
  }
}

//<MyComponent name="Kim Sang Woo" age={33}/>

export default App;
