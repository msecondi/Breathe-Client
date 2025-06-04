import { Link } from "react-router-dom";
import "./Nav.scss"

const Nav = ({currentPage}) => {
    return (
        <>  
            <nav className="main-nav">
                <Link to="/" className="main-nav__logo-link">
                    <h2 className={`main-nav__logo ${currentPage === 'release' ? 'main-nav__logo--release' : ''}`}>
                        breathe
                    </h2>
                </Link>
                <ul className="main-nav__list">
                    <div className="main-nav__list-container">
                        <Link to="/" className="main-nav__list-home">home</Link>
                        <span className={`current-page ${currentPage === 'home' ? 'current-page--active-home' : ''}`}/>
                    </div>
                    <div className="main-nav__list-container">
                        <Link to="/release" className="main-nav__list-release">release</Link>
                        <span className={`current-page ${currentPage === 'release' ? 'current-page--active-release' : ''}`}/>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Nav;