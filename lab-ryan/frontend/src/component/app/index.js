import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';


class App extends React.Component {
  render(){
    return (
      <div className='app'>
      <BrowserRouter>
        <div>
        <header>
        <h1> Hello World! </h1>
        </header>
      </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App
