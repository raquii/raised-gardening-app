import './Plantpedia.css';
import { useState } from 'react';
import PlantCard from './PlantCard';

function Plantpedia({ plants }) {
    const [search, setSearch] = useState("");

    const plantCards = plants.filter(plant => plant.name.toUpperCase().includes(search.toUpperCase())).map(plant => {
        return <PlantCard
            key={plant.name}
            id={plant.id}
            name={plant.name}
            category={plant.category}
            perSqFt={plant.per_sq_ft}
            plantingDate={plant.planting_dates}
            daysTilHarvest={plant.days_to_harvest}
            plantNote={plant.notes[0].content}
            growNote={plant.notes[1].content}
            harvestNote={plant.notes[2].content}
        />
    });

    function handleSearchChange(e) {
        setSearch(e.target.value)
    }

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