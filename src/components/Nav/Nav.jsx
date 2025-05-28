import { useNavigate } from "react-router-dom";
import "./Nav.scss"

const Nav = ({page}) => {
    const navigate = useNavigate();
    return (
        <>  
            <nav className="main-nav">
                <h2 className="main-nav__logo">
                    breathe
                </h2>
                <ul className="main-nav__list">
                    <div className="main-nav__list-container">
                        <li className="main-nav__list-item">
                            home
                        </li>
                        <span className={`current-page ${page === 'home' ? 'current-page--active' : ''}`}/>
                    </div>
                    <div className="main-nav__list-container">
                        <li className="main-nav__list-item">
                            release
                        </li>
                        <span className={`current-page ${page === 'release' ? 'current-page--active' : ''}`}/>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Nav;