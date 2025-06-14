import "./NotFound.scss"

import { useLocation } from "react-router-dom";

const NotFound = () => {
    let currentPath = useLocation();
    console.log(currentPath)
    return (
        <div className="not-found">
            <div className="not-found__info">the path <span>"{currentPath.pathname}"</span> has yet to be paved</div>
        </div>
    )
}

export default NotFound;