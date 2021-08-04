import { Switch, Route } from 'react-router-dom';

import './App.css';
import Nav from './nav/Nav';
import Home from './home/Home';

function App() {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <h1>This is an about page</h1>
        </Route>
        <Route path="/how-to">
          <h1>This is directions on how to use Raised</h1>
        </Route>
        <Route path="/existing-gardens">
          <h1>This is all existing gardens</h1>
        </Route>
        <Route path="/plant-encyclopedia">
          <h1>This is about plants</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
