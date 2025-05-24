import { useNavigate } from "react-router-dom";
import "./Nav.scss"

const Nav = () => {
    const navigate = useNavigate();
    return (
        <>  
            <nav className="main-nav">
                <h2 className="main-nav__logo">
                    Breathe
                </h2>
                <ul className="main-nav__list">
                    <li className="main-nav__list-item">
                        Home
                    </li>
                    <li className="main-nav__list-item">
                        Release
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;