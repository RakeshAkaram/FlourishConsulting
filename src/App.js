import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarComp from './components/NavBarComp';
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Project'
import AboutUs from './components/AboutUs'
import Contacts from './components/Contact'
import Error from './components/Error'

function App() {
  return (
    <div className="App">
      <NavBarComp />

      <Switch>
        <Route exact path='/FlourishConsulting' component={Home}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/aboutUs' component={AboutUs}/>
        <Route exact path='/contact' component={Contacts}/>
        <Route component={Error}/>
      </Switch>
    </div>

  );
}

export default App;
