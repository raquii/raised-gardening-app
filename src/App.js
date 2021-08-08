import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Nav from './nav/Nav';
import Home from './home/Home';
import About from './about/About';
import Plantpedia from './plantpedia/Plantpedia';
import PlantDetail from './plantpedia/PlantDetail';
import ExploreGardens from './gardens/ExploreGardens';
import GardenEditor from './gardens/GardenEditor';

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
            <About />
          </Route>
          <Route exact path="/existing-gardens">
            <ExploreGardens />
          </Route>
          <Route path="/garden-editor/:id">
            <GardenEditor plants={plants}/>
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
