import "./ReflectionList.scss"
import Reflection from "../Reflection/Reflection.jsx";

const ReflectionList = ({reflectionsList, revealElement}) => {
    // Guard against empty list
    if (!reflectionsList || reflectionsList.length === 0) {
        return <div className="reflection-list">No reflections yet.</div>;
    }

    const newestEntry = reflectionsList[reflectionsList.length - 1];
    const defaultEntry = reflectionsList[0];

    return (
        <div className="reflection__list-container">
            <section className={`${revealElement ? 'reflection__list-user' : 'reflection__list-user--hidden'}`}>
                {newestEntry && <Reflection reflectionEntry={newestEntry} />}
            </section>

            {/* Optional: Community reflections can go here - STRETCH GOAL */}

            <section className={`${revealElement ? 'reflection__list-ai' : 'reflection__list-ai--hidden'}`}>
                <h3 className="reflection__list-title">an ai's <span>attempt</span> to understand</h3>
                {defaultEntry && <Reflection reflectionEntry={defaultEntry} />}
            </section>
        </div>
);
}

export default ReflectionList;