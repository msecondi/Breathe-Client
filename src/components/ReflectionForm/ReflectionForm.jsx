import "./ReflectionForm.scss";

import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

const ReflectionForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isReflectionFocused, setIsReflectionFocused] = useState(false); // for overall feel and user focus
    
    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(event.target.reflectionText.value);
            //anonymous reflection
            if(!event.target.reflectionName.value && event.target.reflectionText.value) { 
                const status = await axios.post(`${baseURL}/reflections`, {message: event.target.reflectionText.value});
                setErrorMessage('');
                // setStatusMessage(status.data);
                console.log(status)
            }
            //no info, set error message
            else if (!event.target.reflectionName.value && !event.target.reflectionText.value) {
                setErrorMessage('No information inputted. Please try again')
            }
            else { //name entered, capture it
                const status = await axios.post(`${baseURL}/reflections`, {
                    name: event.target.reflectionName.value,
                    message: event.target.reflectionText.value
                });
                setErrorMessage('');
                // setStatusMessage(status.data);
                console.log(status)
            }
        } catch(error) {
            if (error.response && error.response.data) {
                // setErrorMessage(error.response.data.message);
                setErrorMessage("Please check all entered data and try again.");
            } else {
                setErrorMessage("Please check all entered data and try again.");
            }
        }
        event.target.reset();
    }

    return (
        <>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form__container">
                    <div className={`form__container-indiv ${isReflectionFocused ? 'form__container-indiv--shrink' : ''}`}>
                        <label htmlFor="reflectionName">first name</label>
                        <input 
                            className={`form__name`} 
                            name="reflectionName" 
                            placeholder="optional"
                            onFocus={() => setIsReflectionFocused(false)}
                        />
                    </div>
                    <div className={`form__container-indiv ${isReflectionFocused ? 'form__container-indiv--expand' : ''}`}>
                        <label htmlFor="reflectionText">reflection</label>
                        <textarea 
                            className={`form__reflection`} 
                            name="reflectionText" 
                            rows="5" 
                            onFocus={() => setIsReflectionFocused(true)}
                            required
                        >
                        </textarea>
                    </div>
                </div>
                <div className="form__btn-container">
                    <button className="form__btn">reflect</button>
                </div>
            </form>
            <span className={errorMessage !== '' ? 'status--error' : ''}>{errorMessage ? errorMessage : ''}</span>
        </>
    )
}

export default ReflectionForm;