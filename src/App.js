import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent'
import CharComponent from './components/CharComponent';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: "",
      nameLength: 0
    }
  }

  getLength(text){
    if(text){
      return text.length;
    }
  }

  nameChanged(event){
    var length = this.getLength(event.target.value);
    this.setState({
      name: event.target.value,
      nameLength: length
    })
  }

  handleCharacterClicked(event, index){
    var newState = [...this.state.name];
    newState.splice(index, 1);
    this.setState({
      name: newState.join('')
    });
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.nameChanged.bind(this)} type="text" value={this.state.name}/>
        <p>{this.state.nameLength}</p>
        <ValidationComponent length={this.state.nameLength}/>
        {
          this.state.name ? 
          this.state.name.split('').map(
            (nameCharacter, index) => {
              return <CharComponent characterClicked={(event) => this.handleCharacterClicked(event, index)} key={index} character={nameCharacter}/>;
            }
          ) : null
        }
      </div>
    );
  }
}

export default App;
