//scss
import "./QuoteList.scss"

import { useState, useEffect } from "react";

//components
import Quote from "../Quote/Quote.jsx";

//axios
import axios from "axios";
const baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

const QuoteList = ({isActive, scrollToRef}) => { 
    const [ quotes, setQuotes ] = useState([]);

    const fetchQuotes = async () => {
        try {
            const response = await axios.get(`${baseURL}/quotes`);
            setQuotes(response.data);
        } catch (error) {
            console.error(`Could not load quotes: ${error}`);
        }
    }

    useEffect(() => {
        fetchQuotes();
    }, [])

    return (
        <>
            <div className={`list-wrapper ${!isActive ? 'list-wrapper--hidden' : ''}`}>
                <section className='list' ref={scrollToRef}>
                    {quotes.length ? 
                        quotes.map(quote => (
                            <Quote quote={quote} key={quote.id}/>
                        )) :
                        <div id="loading">loading inspiration...</div>}
                </section>
            </div>
        </>
    )
}
export default QuoteList;