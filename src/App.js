import React, { Component } from 'react';
import Persons from './components/persons/Person'

import InputField from './components/InputField'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  state = {
    Persons: [
      {firstName: "Suresh", age: 50, id:1},
      {firstName: "Sanju", age: 23, id:2}
    ],

    showPersons: false,

    someOtherVar: "I am cool",

    charInput: ""
  }

  togglePersonsHandler = () => {
    if(!this.state.showPersons) {this.setState({showPersons: true})}
    else this.setState({showPersons: false})
  }

  deletePersonHandler = (personIndex) => {
    const Persons = this.state.Persons
    Persons.splice(personIndex,1)
    this.setState({Persons})
  }

  changedHandler = (e) => {
    console.log("changed")
    console.log(e.target.value)
    this.setState({charInput: e.target.value})
  }

  delClickHandler=(e)=> {
    let delChInx = this.state.charInput.indexOf(e.target.textContent);
    console.log("delete button clicked",e.target.textContent, delChInx)
    let text = this.state.charInput.split('')
    text.splice(delChInx,1)

    const updText = text.join('')
    this.setState({charInput: updText})
    
    
  }

  render() {
    
    return (
    <div className="App">
        <h3> Person exercise for lists and conditionals</h3> <hr/>
        <button onClick = {this.togglePersonsHandler}> Toggle Persons </button> <br /> <hr /> 
        
      {/* {this.state.showPersons ? (
        <div>
        <Persons name={this.state.Persons[0].firstName} age={this.state.Persons[0].age}></Persons>
        <Persons name={this.state.Persons[1].firstName} age={this.state.Persons[1].age}></Persons>
        </div>
      ) :   null        
      }            */}

      {this.state.Persons.map((person, index) => {
        return (          
            <div>
            <Persons  name={person.firstName}
                      age={person.age}
                      click={() => this.deletePersonHandler()}
                      key={person.id} >
                      
            </Persons>
            </div>
          )         
      })}

      <InputField changed = {this.changedHandler} value={this.state.charInput} val={this.state.charInput}
      clk = {(index) => this.delClickHandler}> </InputField>
    </div>
    );
  }
}

export default App;
