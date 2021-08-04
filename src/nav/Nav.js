import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav id="nav-bar">
            <h3 id="nav-head">&#123; R &#125;</h3>
            <ul id="link-list">
                <li className="link-li">
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li className="link-li">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="link-li">
                    <NavLink to="/how-to">How To</NavLink>
                </li>
                <li className="link-li">
                    <NavLink to="/existing-gardens">Explore Gardens</NavLink>
                </li>
                <li className="link-li">
                    <NavLink to="/plant-encyclopedia">Plant-pedia</NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Nav;