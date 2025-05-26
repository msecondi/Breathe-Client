import { useState, useEffect } from "react";

//components
import Quotes from "../Quotes/Quotes.jsx";

//axios
import axios from "axios";
const baseURL = import.meta.env.VITE_BACKEND_URL || 8080;

const QuotesCard = () => { 
    const [ quotes, setQuotes ] = useState([]);


    const fetchQuotes = async () => {
        try {
            const response = await axios.get(`${baseURL}/quotes`);
            console.log(response.data)
            setQuotes(response.data);
        } catch (error) {
            console.log(`Could not load quotes: ${error}`);
        }
    }

    useEffect(() => {
        fetchQuotes();
    }, [])

    return (
        <>
            <section>
                {quotes && quotes.length ? 
                    quotes.map((quote, index) => {
                        <Quotes quote={quote} key={index}/>
                    }) :
                    <div>Loading quotes...</div>}
            </section>
        </>
    )
}
export default QuotesCard;