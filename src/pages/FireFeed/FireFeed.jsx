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

    const [subheader, setSubheader] = useState('what would you like to let go of today?');

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
        // e.target.reset(); 
        try {
            // Send the reflection to the backend
            const response = await axios.post(`${baseURL}/fire-feed`, { message: reflection });
            console.log(response.data); // Log the response from the server
            setResponseMessage(response.data.success); // Set the response message to display to the user
            setErrorMessage(''); // Clear any previous error messages

            // Trigger floating animation
            setFloating(true);
            e.target.reset();
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

    useEffect(() => { //on every rerender of page, start timer to 'dissolve' subheader
        setTimeout(() => {
           setSubheader('') 
        }, 10000)
    },[])

    return (
        <section className="firefeed">
            {subheader && (<div className="firefeed__subheader">let yourself <span>feel</span> and then let go</div>)}
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
            <form className="firefeed__form" onSubmit={handleSubmit} style={{ marginTop: `${0.5 + (countMultiplier * 0.1)}rem` }}>
                <button type="submit" className={`firefeed__form-btn ${isFormFocused ? 'firefeed__form-btn--disappear' : ''}`}>release</button>
                <textarea
                    className="firefeed__form-textarea"
                    name="firefeed__textarea"
                    type="text"
                    placeholder="take as much time as you need..."
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                    onFocus={() => setIsFormFocused(true)}
                    onBlur={() => setIsFormFocused(false)}
                />
            </form>
        </section>
    )
}

export default FireFeed;