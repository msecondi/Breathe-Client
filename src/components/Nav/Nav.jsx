import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    return (
        <>  
            <nav className="main-nav">
                <div className="main-nav__logo">
                    Breathe
                </div>
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