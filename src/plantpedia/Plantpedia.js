import './Plantpedia.css';
import { useState } from 'react';
import Card from '../card/Card';

function Plantpedia({ plants }) {
    const [search, setSearch] = useState("");

    const plantCards = plants.filter(plant => plant.name.toUpperCase().includes(search.toUpperCase())).map(plant => {
        return <Card
            key={plant.name}
            id={plant.id}
            name={plant.name}
            link={`plant-encyclopedia`}
        />
    });

    function handleSearchChange(e) {
        setSearch(e.target.value)
    }

    if (plants.length < 1) return <h2>Sowing seeds...</h2>

    return (
        <div id="plantpedia">
            <div id="plantpedia-search">
                <label>Search: </label>
                <input type="text" value={search} onChange={handleSearchChange} />
            </div>
            <div id="card-container">
                {plantCards}
            </div>
        </div>
    )
}

export default Plantpedia;