import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import {Route, NavLink, HashRouter} from 'react-router-dom';

import Home from './Home';
import Weather from './WeatherApp';
import StarWars from './StarWarsApp';
import TodoList from './TodoListApp';
import About from './About';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
       {/* <h1>Hello from multipage-app-on React.js</h1> */}

       {/* define block with routes*/}
       <ul className="header">
       <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/weather">Weather App</NavLink></li>
       <li><NavLink to="/star-wars">Star Wars API App</NavLink></li>
       <li><NavLink to="/todo-list">Todo List App</NavLink></li>
       <li><NavLink to="/about">About</NavLink></li>   
       </ul>   

{/*define block with exact for predefined routes */}
       <div class="container"> </div>
       <Route exact path="/" component={Home}></Route>
       <Route path="/weather" component={Weather}></Route>
       <Route path="/star-wars" component={StarWars}></Route>
       <Route path="/todo-list" component={TodoList}></Route>
       <Route path="/about" component={About}></Route>
      </div>
      </HashRouter>
    );
  }
}

export default App;
