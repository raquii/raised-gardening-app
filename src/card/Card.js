import { Link } from 'react-router-dom';
import './Card.css'

function Card({
    id,
    link,
    name,
    description
}) {


    return (
        <div id={name} className="card">
            <h2 className="header">{name}</h2>
            <span>{description}</span>
            <Link to={`/${link}/${id}`}><i className="fa fa-info-circle"/></Link>
        </div>
    )
}
export default Card;