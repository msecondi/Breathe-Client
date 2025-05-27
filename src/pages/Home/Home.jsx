import Nav from "../../components/Nav/Nav.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import InspireMeBtn from "../../components/InspireMeBtn/InspireMeBtn.jsx";
import QuoteList from "../../components/QuoteList/QuoteList.jsx";
import Reflection from "../../components/Reflection/Reflection.jsx";

import { useState, useRef } from "react";

const Home = () => {
    const [isActive, setIsActive] = useState(false);

    const scrollToRef = useRef(null);
    const scrollToSection = () => {
        scrollToRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Sticky nav bar? */}
            <Nav page="home"/>

            {/* Hero Banner with alternating words */}
            <Hero />

            {/* Add 'inspire me' button to then show quotes? */}
            <InspireMeBtn isActive={isActive} setIsActive={setIsActive} scrollToSection={scrollToSection}/>

            {/* Fav quotes */}
            <QuoteList scrollToRef={scrollToRef} isActive={isActive}/>
            
            {/*  Reflection form - "what does being human mean to you?" Which then reveals any and all comments already posted (including default) */}
            <Reflection />

            {/* Footer with contact info? */}
        </>
    );
}

export default Home;