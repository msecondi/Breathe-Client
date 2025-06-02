import "./FireFeed.scss";

import Flame from "../../components/Flame/Flame.jsx";

import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Set the base URL for the backend API
const baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

const FireFeed = () => {

    const setCurrentPage = useOutletContext();
    useEffect(() => {
        setCurrentPage('release'); // Set the current page to 'release' for the nav bar
    }, []);

    const [reflection, setReflection] = useState('');
    const [floating, setFloating] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!reflection) return; // Prevent submission if the input is empty

        try {
            // Send the reflection to the backend
            const response = await axios.post(`${baseURL}/fire-feed`, { message: reflection });
            console.log(response.data); // Log the response from the server
            setResponseMessage(response.data.success); // Set the response message to display to the user
            setErrorMessage(''); // Clear any previous error messages

            // Trigger floating animation
            setFloating(true);
            setTimeout(() => {
                setFloating(false);
                setReflection(''); // Clear the input after submission
                setResponseMessage(''); // Clear the response message after a short delay
            }, 3000); // Animation duration
        } catch (error) {
            if(error.response && error.response.data) {
                // Handle specific error messages from the backend
                setErrorMessage(error.response.data.error);
            } else {
                // Handle general errors
                setErrorMessage(error.message);
            }
        }
    }

    const [countMultiplier, setCountMultiplier] = useState(0);
    useEffect(() => {
        const fetchCount = async () => {
            try {
                const response = await axios.get(`${baseURL}/fire-feed/count`);
                setCountMultiplier(response.data.count);
            } catch (error) {
                console.error("Error fetching count:", error);
            }
        };
        fetchCount();
    }, [floating]); //Re-renders everytime a submission is entered via 'floating'

    return (
        <>
            <Flame countMultiplier={countMultiplier} />
            {floating && ( // FLOATING ANIMATION
                <div className="firefeed__floating">
                    {reflection}
                </div>
            )}
            <div className="firefeed__prompt">
                What would you like to let go of today?
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your thoughts..."
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div className="firefeed__error">
                    {errorMessage}
                </div>
            )}
            <div className={`firefeed__response ${responseMessage ? 'firefeed__response--active' : ''}`}>
                {responseMessage}
            </div>
        </>
    )
}

export default FireFeed;