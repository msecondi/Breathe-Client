import "./FireFeed.scss";

import Flame from "../../components/Flame/Flame.jsx";

import { useOutletContext } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

// Set the base URL for the backend API
const baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

const FireFeed = () => {

    const setCurrentPage = useOutletContext();
    useEffect(() => {
        setCurrentPage('release'); // Set the current page to 'release' for the nav bar
    }, []);

    const [reflection, setReflection] = useState('');
    const [isFormFocused, setIsFormFocused] = useState(false)
    const [floating, setFloating] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent submission if the input is empty & give user feedback
        if (!reflection.trim()) {
            setErrorMessage("enter what's on your mind"); 
            setTimeout(() => {
                setErrorMessage('');
            }, 8000);
            return;
        }
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
            }, 4000); // Animation duration
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
                const maxCount = response.data.count > 26 ? 26 : response.data.count; // set max count (26 due to multiplication equations set) to maintain page styling integrity
                setCountMultiplier(maxCount);
            } catch (error) {
                console.error("Error fetching count:", error);
            }
        };
        fetchCount();
        
    }, [floating]); //Re-renders everytime a submission is entered via 'floating'

    return (
        <section className="firefeed">
            <h4 className="firefeed__subheader"><span>allow yourself to <span className="firefeed__subheader-italic">feel</span> then <span className="firefeed__subheader-italic">let go</span></span></h4>
            <Flame countMultiplier={countMultiplier} />
            {errorMessage && (
                <div className="firefeed__error">
                    {errorMessage}
                </div>
            )}
            <div className={`firefeed__response ${responseMessage ? 'firefeed__response--active' : ''}`} style={{ marginTop: `${0.5 + (countMultiplier * 0.1)}rem` }}>
                {responseMessage}
            </div>
            {floating && ( // FLOATING ANIMATION
                <div className="firefeed__floating">
                    {reflection}
                </div>
            )}
            {/* <div className="firefeed__subheader">what would you like to let go of today?</div> */}
            {/* style={{ marginTop: `${0.5 + (countMultiplier * 0.1)}rem` } */}
            <form className="firefeed__form" onSubmit={handleSubmit}>
                <button type="submit" className={`firefeed__form-btn ${isFormFocused ? 'firefeed__form-btn--disappear' : ''}`}>release</button>
                <textarea
                    className="firefeed__form-textarea"
                    name="firefeed__textarea"
                    type="text"
                    placeholder="there’s space here for what's on your mind..."
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                    onFocus={() => setIsFormFocused(true)}
                    onBlur={() => setIsFormFocused(false)}
                    onKeyDown={(e) => { //allow the user to also press enter to submit
                        if(e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e);
                        }
                    }}
                />
            </form>
        </section>
    )
}

export default FireFeed;