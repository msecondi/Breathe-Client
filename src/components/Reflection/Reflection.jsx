import "./Reflection.scss"

const Reflection = ({reflectionEntry}) => {
    return (
        <>
            <div className="indiv-reflection">
                <h4 className="indiv-reflection__message">{reflectionEntry.message}</h4>
                <div className="indiv-reflection__name">- {reflectionEntry.name}</div>
            </div>
        </>
    )
}

export default Reflection;