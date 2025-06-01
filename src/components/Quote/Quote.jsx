import "./Quote.scss"

import CurlyQuotes from "../../assets/svgs/CurlyQuotes/CurlyQuotes.jsx";

const Quote = ({quote}) => {
    return (
        <>
            <div className="quote">
                <h3 className="quote__content">
                    <CurlyQuotes className="quote__curly" />{quote.content}
                </h3>
                <p className="quote__author">
                    {quote.author}
                </p>
            </div>
        </>
    )
}

export default Quote;