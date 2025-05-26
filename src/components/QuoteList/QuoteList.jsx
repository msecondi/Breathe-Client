//scss
import "./QuoteList.scss"

import { useState, useEffect } from "react";

//components
import Quote from "../Quote/Quote.jsx";

//axios
import axios from "axios";
const baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

const QuoteList = ({isActive}) => { 
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
            <section className={`list ${isActive ? 'fade-in-list' : 'fade-out-list'}`} >
                {quotes.length ? 
                    quotes.map(quote => (
                        <Quote quote={quote} key={quote.id}/>
                    )) :
                    <div>loading inspiration...</div>}
            </section>
        </>
    )
}
export default QuoteList;