import React, { useState } from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe'
import MainForm from './components/MainForm';

const App = () => {


  return (
    <div className="App" style={style}>
    <Link to="/" className="App__title">Cool Recipes</Link>
    <Route
      path="*"
      render={props => <MainForm {...props}/>}
    />
    <Switch>
      <Route
      path="/recipes"
      component={Recipes}
      exact
      />
      <Route
      path="/recipe"
      component={Recipe}
      />
      <Route
      path="/"
      component={Home}
      exact
      />
    </Switch>
    </div>
  );
};

const style = {
  backgroundImage: `url(${require('./assets/img/bg.jpg')})`
};

export default App;
