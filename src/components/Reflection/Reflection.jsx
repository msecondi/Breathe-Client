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
        }
    }, [])

    return (
        <>
            <section>
                <h2>what does being human mean to you?</h2>
                <ReflectionForm />
            </section>
        </>
    )
}

export default Reflection;