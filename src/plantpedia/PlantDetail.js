
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlantDetail() {

    const [ plant, setPlant ] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://frozen-sea-47540.herokuapp.com/plants/${id}`)
            .then(r => r.json())
            .then(data => setPlant(data.plant[0]))
    }, [id])

    if (!plant) return <h2>Loading...</h2>

    const { name, category, per_sq_ft, days_to_harvest, planting_dates, notes} = plant;
    
    return (
        <div id={name} className="plant-card" style={{width: "60%"}}>
            <div className="plant-header-container">
                <h2 className="plant-header">{name}</h2>
            </div>
            <table className="plant-stats">
                <tbody>
                    <tr>
                        <th>Category: </th>
                        <td>{category}</td>
                    </tr>
                    <tr>
                        <th>Plants Per SqFt:</th>
                        <td>{per_sq_ft}</td>
                    </tr>
                    <tr>
                        <th>When to Plant: </th>
                        <td>{planting_dates}</td>
                    </tr>
                    <tr>
                        <th>Days Til Harvest: </th>
                        <td>{days_to_harvest}</td>
                    </tr>
                </tbody>
            </table>

            <div className="plant-note-container">
                <h4 className="plant-subheader">Notes</h4>
                <table className="plant-notes">
                    <tbody>
                        <tr>
                            <th>Planting:</th>
                        </tr>
                        <tr>
                            <td>{notes[0]["content"]}</td>
                        </tr>
                        <tr>
                            <th>Growing:</th>
                        </tr>
                        <tr>
                            <td>{notes[1]["content"]}</td>
                        </tr>
                        <tr>
                            <th>Harvesting:</th>
                        </tr>
                        <tr>
                            <td>{notes[2]["content"]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PlantDetail;