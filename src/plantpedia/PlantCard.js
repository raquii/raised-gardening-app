import { useState } from 'react';

function PlantCard({
    name,
    category,
    perSqFt,
    daysTilHarvest,
    plantingDate,
    plantNote,
    growNote,
    harvestNote
}) {
    const [showMore, setShowMore] = useState(false);

    function toggleShowMore() {
        setShowMore(!showMore)
    }

    return (
        <div id={name} className="plant-card" style={showMore ? { width: '80%' } : { width: '30%' }}>
            <h2 className="plant-header">{name}</h2>
            <table className="plant-stats">
                <tbody>
                    <tr>
                        <th>Category: </th>
                        <td>{category}</td>
                    </tr>
                    <tr>
                        <th>Plants Per SqFt:</th>
                        <td>{perSqFt}</td>
                    </tr>
                    <tr>
                        <th>When to Plant: </th>
                        <td>{plantingDate}</td>
                    </tr>
                    <tr>
                        <th>Days Til Harvest: </th>
                        <td>{daysTilHarvest}</td>
                    </tr>
                </tbody>
            </table>

            <button onClick={toggleShowMore}>
                {showMore ?
                    <i className="fa fa-angle-double-up" />
                    :
                    <i className="fa fa-angle-double-down" />
                }
            </button>

            <div
                className="plant-note-container"
                style={showMore ?
                    { display: '' }
                    :
                    { display: "none" }
                }
            >
                <h4 className="plant-subheader">Notes:</h4>
                <table className="plant-notes">
                    <tbody>
                        <tr>
                            <th>Planting:</th>
                            <td>{plantNote}</td>
                        </tr>
                        <tr>
                            <th>Growing:</th>
                            <td>{growNote}</td>
                        </tr>
                        <tr>
                            <th>Harvesting:</th>
                            <td>{harvestNote}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default PlantCard;