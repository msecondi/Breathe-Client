import "./Quote.scss"

const Quote = ({quote}) => {
    return (
        <>
            <div className="quote">
                <h3 className="quote__content">
                    '{quote.content}'
                </h3>
                <p className="quote__author">
                    {quote.author}
                </p>
            </div>
        </>
    )
}

export default Quote;