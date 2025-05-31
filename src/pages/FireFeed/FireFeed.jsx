import "./FireFeed.scss";
import Nav from "../../components/Nav/Nav.jsx";

import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

const FireFeed = () => {
    const setCurrentPage = useOutletContext();
    useEffect(() => {
        setCurrentPage('release'); // Set the current page to 'release' for the nav bar
    }, []);

    return (
        <>
            {/* ~ flame animation ~ */}
            
        </>
    )
}

export default FireFeed;