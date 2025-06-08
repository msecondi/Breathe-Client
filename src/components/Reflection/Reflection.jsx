import "./Reflection.scss"
import ReflectionForm from "../ReflectionForm/ReflectionForm.jsx";

import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

const Reflection = () => {
    const [reflections, setReflections] = useState([]);

    useEffect(() => {
        const fetchReflections = async () => {
            const response = await axios.get(`${baseURL}/reflections`)
            setReflections(response.data);
            console.log(response.data);
        }
        fetchReflections();
    }, [])

    return (
        <>
            <section className="reflection">
                <h1 className="reflection__header">have a <span>moment</span> to reflect</h1>
                <h3 className="reflection__sub-header">what does being human mean to <span>you?</span></h3>
                <ReflectionForm />
            </section>
        </>
    )
}

export default Reflection;