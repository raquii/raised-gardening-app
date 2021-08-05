import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Nav from './nav/Nav';
import Home from './home/Home';
import Plantpedia from './plantpedia/Plantpedia';
import PlantDetail from './plantpedia/PlantDetail';


function App() {
  const [plants, setPlants] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:9393/plants')
    .then(r=>r.json())
    .then(data=>setPlants(data.plants))
  }, [])

  return (
    <div className="App">
      <Nav />
      <main>
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
          <Route exact path="/plant-encyclopedia">
            <Plantpedia plants={plants}/>
          </Route>
          <Route path="/plant-encyclopedia/:id">
            <PlantDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
