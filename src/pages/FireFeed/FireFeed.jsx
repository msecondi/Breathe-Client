import "./FireFeed.scss";

import Flame from "../../components/Flame/Flame.jsx";

import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const FireFeed = () => {
    const setCurrentPage = useOutletContext();
    useEffect(() => {
        setCurrentPage('release'); // Set the current page to 'release' for the nav bar
    }, []);

    

    return (
        <>
            {/* ~ flame animation ~ */}
            <Flame />
            <form>
                <input type="text" placeholder="Enter your reflection" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FireFeed;