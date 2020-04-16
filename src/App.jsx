import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import {Route, Switch, withRouter} from 'react-router-dom';

// Component
import Navbar from './views/component/Navbar';

// Screen
import RegistrationScreen from './views/screen/RegistrationScreen';
import HomeScreen from './views/screen/HomeScreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/hallo/:user" component={HomeScreen}/>
        <Route exact path="/registration" component={RegistrationScreen}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
