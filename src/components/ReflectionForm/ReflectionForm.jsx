import "./ReflectionForm.scss";

import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

const ReflectionForm = ({setHasSubmitted}) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isReflectionFocused, setIsReflectionFocused] = useState(false); // for overall feel and user focus
    const [reflectionName, setReflectionName] = useState(''); // for name input
    const [anonymous, setAnonymous] = useState(false); 
    
    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(event.target.reflectionText.value);
            //anonymous reflection
            if(anonymous && !event.target.reflectionName.value && event.target.reflectionText.value) {
                const status = await axios.post(`${baseURL}/reflections`, {message: event.target.reflectionText.value});
                setErrorMessage('');
                setHasSubmitted(true); //prop
            }
            //no info, set error message
            else if (!event.target.reflectionName.value && !event.target.reflectionText.value) {
                setErrorMessage('No information inputted. Please try again')
                setHasSubmitted(false); //prop
            }
            else if ((event.target.reflectionName.value).trim() === ''){ // anonymous not selected but name is blank
                const status = await axios.post(`${baseURL}/reflections`, {
                    message: event.target.reflectionText.value
                });
                setErrorMessage('');
                setHasSubmitted(true); //prop
            }
            else { //name entered, capture & send in post req
                const status = await axios.post(`${baseURL}/reflections`, {
                    name: event.target.reflectionName.value,
                    message: event.target.reflectionText.value
                });
                setErrorMessage('');
                setReflectionName('');
                setHasSubmitted(true); //prop
            }
        } catch(error) {
            setErrorMessage("Please check all entered data and try again.");
            setHasSubmitted(false); //prop
        }
        event.target.reset();
    }

    const handleAnonymousChange = (event) => {
        setAnonymous(event.target.checked);
        if (event.target.checked) {
            setReflectionName(''); // Clear the name field when anonymous is checked
            setIsReflectionFocused(true); // Focus on the reflection textarea when anonymous is checked
        } else {
            setIsReflectionFocused(false); // Remove focus when unchecked
        }
    }

    useEffect(() => {
        if(!anonymous && isReflectionFocused && !reflectionName) {
            const timeout = setTimeout(() => {
                setIsReflectionFocused(true);
                setAnonymous(true);
            }, 6000); // 6 seconds before the name field disappears
            return () => clearTimeout(timeout); // Cleanup the timeout on unmount or when name changes
        }
    }, [anonymous, isReflectionFocused]);
    return (
        <>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form__container">
                    <div className='form__container-indiv'>
                        <textarea
                            className='form__reflection'
                            name="reflectionText"
                            onFocus={() => { setIsReflectionFocused(true); }}
                            onBlur={() => setIsReflectionFocused(false)}
                            placeholder="there's no right length, just what's true to you"
                            required
                        >
                        </textarea>
                    </div>
                    <div className={`form__container-indiv  ${anonymous ? 'form__container-indiv--shrink' : ''}`}>
                        <div className="form__sign">
                            <input 
                                type="checkbox" 
                                id="anonymous" 
                                name="anonymous" 
                                className="form__checkbox" 
                                checked={anonymous}
                                onChange={handleAnonymousChange}
                            />
                            <label htmlFor="anonymous">anonymous</label>
                        </div>

                        <input 
                            className={`form__name ${anonymous ? 'form__name--disappear' : ''}`} 
                            name="reflectionName" 
                            placeholder="name"
                            onChange={(e) => setReflectionName(e.target.value)}
                            value={reflectionName}
                        />
                    </div>
                </div>
                <div className={`form__btn-container ${anonymous ? 'form__btn-container--shift-up' : ''}`}>
                    <button className="form__btn">reflect</button>
                </div>
            </form>
            <span className={errorMessage !== '' ? 'status--error' : ''}>{errorMessage ? errorMessage : ''}</span>
        </>
    )
}

export default ReflectionForm;