import "./ReflectionSection.scss"
import ReflectionList from "../ReflectionList/ReflectionList.jsx";
import ReflectionForm from "../ReflectionForm/ReflectionForm.jsx";

import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

const ReflectionSection = () => {
    const [reflections, setReflections] = useState([]);
    // const [newestReflection, setNewestReflection] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);//send as prop to update when to show feed

    const fetchReflections = async () => {
        const response = await axios.get(`${baseURL}/reflections`)
        setReflections(response.data);
    }
    useEffect(() => {
        fetchReflections();
    }, [hasSubmitted]);

    useEffect(() => {
        fetchReflections();
    }, []);

    return (
        <>
            <section className="reflection-section">
                <h1 className="reflection-section__header">have a <span>moment</span> to reflect</h1>
                <h3 className="reflection-section__sub-header">what does being human mean to <span>you?</span></h3>
                <div className={`reflection-section__list ${hasSubmitted ? '' : 'reflection-section__list--hidden'}`}>
                    <ReflectionList reflectionsList={reflections} revealElement={hasSubmitted}/>

                </div>
                <div className={`reflection-section__form ${hasSubmitted ? 'reflection-section__form--hidden' : ''}`}>
                    <ReflectionForm setHasSubmitted={setHasSubmitted} />
                </div>
            </section>
        </>
    )
}

export default ReflectionSection;