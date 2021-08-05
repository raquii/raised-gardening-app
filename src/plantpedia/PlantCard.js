import { Link } from 'react-router-dom';

function PlantCard({
    id,
    name,
}) {


    return (
        <div id={name} className="plant-card">
            <h2 className="plant-header">{name}</h2>
            <Link to={`/plant-encyclopedia/${id}`}><i className="fa fa-info-circle"/></Link>
        </div>
    )
}
export default PlantCard;