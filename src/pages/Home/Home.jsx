import Nav from "../../components/Nav/Nav.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import InspireMeBtn from "../../components/InspireMeBtn/InspireMeBtn.jsx";
import QuoteList from "../../components/QuoteList/QuoteList.jsx";

import { useState, useEffect } from "react";

const Home = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            {/* Sticky nav bar */}
            <Nav />

            {/* Hero Banner with alternating words */}
            <Hero />

            {/* <h4>Take a moment to slow down.</h4> */}

            {/* Add 'inspire me' button to then show quotes? */}
            <InspireMeBtn isActive={isActive} setIsActive={setIsActive} />

            {/* Fav quotes */}
            <QuoteList isActive={isActive}/>
            {/*  Reflection form - "what does being human mean to you?" Which then reveals any and all comments already posted (including default) */}

            {/* Footer with contact info? */}
        </>
    );
}

export default Home;