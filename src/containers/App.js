import React from 'react';
import Persons from '../components/Persons/Persons';
import Heading from '../components/Heading/Heading';
import CharCounter from '../components/CharCounter/CharCounter';

import "./App.css";

class App extends React.Component {
  state = {
    persons: [
      {id: 'asd', name: 'Natasha', age: 19},
      {id: 'dsa', name: 'Julia', age: 19},
      {id: 'qwe', name: 'Anthony', age: 21},
    ],
    chars: [],
    isShown: false,

    inputLength: 0,
  }

  showPersonsHandler = () => {
    this.setState({
      isShown: !this.state.isShown,
    })
  }
  
  changedHandler = (event, idx) => {
    const personId = this.state.persons.findIndex(p => p.id === idx);
    const person = {...this.state.persons[personId]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personId] = person;

    this.setState({
      persons: persons,
    })
  }

  deletePersonHandler = (idx) => {
    const newListOfPersons = this.state.persons.filter((p,id) => id !== idx);
    this.setState({
      persons: newListOfPersons
    })
  }

  inputLengthHandler = (event) => {
    const chars = event.target.value.split('')
    const newCharArray = chars.map((c) => {
      return {
        id: ('_' + Math.random().toString(36).substr(2, 9)),
        char: c
      };
    });

    this.setState({
      inputLength: event.target.value.length,
      chars: newCharArray,
    });
  }

  inputDeleteHandler = (idx) => {
    const charIndex = this.state.chars.findIndex(c => c.id === idx);
    const newChars = [...this.state.chars]
    newChars.splice(charIndex, 1);

    this.setState({
      chars: newChars,
      inputLength: newChars.length,
    })
  }

  render() {
    let persons = null;
    if (this.state.isShown) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changedHandler}
        />
    }

    return (
      <div className="App">
        <Heading
          click={this.showPersonsHandler}
          isShown={this.state.isShown}
        />

        { persons }

        <CharCounter
          chars={this.state.chars}
          inputLength={this.state.inputLength}
          changed={this.inputLengthHandler}
          clicked={this.inputDeleteHandler}
        />
      </div>    
    );
  }
}

export default App;
