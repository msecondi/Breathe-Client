import { Link } from "react-router-dom";
import "./Nav.scss"

const Nav = ({currentPage}) => {
    return (
        <>  
            <nav className="main-nav">
                <Link to="/" className="main-nav__logo-link">
                    <h2 className="main-nav__logo">
                        breathe
                    </h2>
                </Link>
                <ul className="main-nav__list">
                    <div className="main-nav__list-container">
                        <Link to="/" className="main-nav__list-item">home</Link>
                        <span className={`current-page ${currentPage === 'home' ? 'current-page--active' : ''}`}/>
                    </div>
                    <div className="main-nav__list-container">
                        <Link to="/release" className="main-nav__list-item">release</Link>
                        <span className={`current-page ${currentPage === 'release' ? 'current-page--active' : ''}`}/>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Nav;