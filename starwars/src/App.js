import React, { Component } from 'react';
import './App.css';
import Characters from './components/characters';
import './components/StarWars.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 1,
      charactersPerPage: 2
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { starwarsChars, currentPage, charactersPerPage } = this.state;

    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = starwarsChars.slice(indexOfFirstCharacter, indexOfLastCharacter);


    const renderCharacters = <Characters characterList={currentCharacters}/>;
  

const pageNumbers = [];
for(let i = 1; i <=Math.ceil(starwarsChars.length / charactersPerPage); i++) {
  pageNumbers.push(i);
}

const renderPageNumbers = pageNumbers.map(number => {
  return(
    <li
    key={number}
    id={number}
    onClick={this.handleClick}
    >
    {number}
    </li>
  );
})

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {renderCharacters}
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
        
      </div>
    );
  }
}

export default App;
