import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="d-flex">
            <Link to="/" >
                <img className="logo" src="./src/assets/WitFlix.png" alt="" />
            </Link>
            <nav className="d-flex">
                <Link to="/allmovies/aksiyon">Aksiyon</Link>
                <Link to="/allmovies/dram">Dram</Link>
                <Link to="/allmovies/komedi">Komedi</Link>
                <Link to="/allmovies/korku">Korku</Link>
            </nav>
            <div className="search d-flex">
                <input type="text" placeholder="film ara..." />
                <i className="fa-regular fa-bell"></i>
                <i className="fa-solid fa-user"></i>
            </div>
        </header>
    )
}

export default Header;
