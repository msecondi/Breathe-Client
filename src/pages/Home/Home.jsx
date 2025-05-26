import Nav from "../../components/Nav/Nav.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import QuotesCard from "../../components/QuotesCard/QuotesCard.jsx";

const Home = () => {
    return (
        <>
            {/* Sticky nav bar */}
            <Nav />

            {/* Hero Banner with alternating words */}
            <Hero />
            
            {/* Fav quotes */}
            <QuotesCard />
            {/*  Reflection form - "what does being human mean to you?" Which then reveals any and all comments already posted (including default) */}

            {/* Footer with contact info? */}
        </>
    );
}

export default Home;