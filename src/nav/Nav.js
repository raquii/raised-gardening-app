import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/how-to">How To</NavLink>
            <NavLink to="/existing-gardens">Explore Gardens</NavLink>
            <NavLink to="/plant-encyclopedia">Plant-pedia</NavLink>
        </nav>
    )
}

export default Nav;