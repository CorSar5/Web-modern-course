import './Nav.css'
import { Link } from 'react-router-dom'

export default props=>
    <aside className="menu-area">
        <nav className="menu">
            {/*Refactor, by a new item*/}
            <Link to="/">
                <i className="fa fa-home"></i>Home
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Users
            </Link>
        </nav>
    </aside>