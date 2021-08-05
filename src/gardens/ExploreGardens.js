import { useState, useEffect } from "react";
import Card from "../card/Card";

function ExploreGardens() {
    const [gardens, setGardens] = useState([]);
    useEffect(() => {

        fetch('http://localhost:9393/gardens')
        .then(r => r.json())
        .then(data => setGardens(data.gardens))

    }, [])

    const gardenCard = gardens.map(garden =>{
        return <Card 
            key={garden.name} 
            id={garden.id} 
            name={garden.name}
            description={`${garden.length}'x${garden.width}'x${garden.depth}"`} />
    })

    return (
        <div id='gardens-div'>
            {gardenCard}
        </div>
    )
}

export default ExploreGardens;