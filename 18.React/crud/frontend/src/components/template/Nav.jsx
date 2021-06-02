import './Nav.css'

export default props=>
    <aside className="menu-area">
        <nav className="menu">
            {/*Refactor, by a new item*/}
            <a href="#/">
                <i className="fa fa-home"></i>Home
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Users
            </a>
        </nav>
    </aside>