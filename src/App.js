import React, { Component } from 'react';
import Search from "./components/Search";
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component{
  render(){
    return(
      <MuiThemeProvider>
      <div className="App">
      <header>
        <h1>Gallery App</h1>
      </header>
      <main>
      <Search />
      </main>
      
      </div>
      </MuiThemeProvider>
    )
  }
}

export default App;