import { useNavigate } from "react-router-dom";
import "./Nav.scss"

const Nav = () => {
    const navigate = useNavigate();
    return (
        <>  
            <nav className="main-nav">
                <h2 className="main-nav__logo">
                    breathe
                </h2>
                <ul className="main-nav__list">
                    <li className="main-nav__list-item">
                        home
                    </li>
                    <li className="main-nav__list-item">
                        release
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;