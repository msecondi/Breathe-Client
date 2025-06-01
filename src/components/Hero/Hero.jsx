import "./Hero.scss";

import { useEffect, useState } from "react";

const Hero = () => {

    const words = [
        'connection', 
        'genuity', 
        'patience',
        'openess', 
        'belonging', 
        'calm',
        'listening', 
        'presence', 
        'honesty', 
        'feeling', 
        'reflection',
        'vulnerability',
        'compassion',
        'empathy',
        'kindness',
        'curiosity',
        'gratitude',
        'resilience',
    ];

    // const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const updateWord = () => {
            setDisplayedText(words[i]);
            i = (i + 1) % words.length; //to create an infinite loop. When is at the end, it resets to 0
        };

        // Immediately show first word
        updateWord();

        const interval = setInterval(updateWord, 8000);

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <div className="hero">
            <h1 className="hero__text">
                <span className="hero__text-span">{displayedText}</span>
            </h1>
            <p className="hero__subheader">being <span>human</span> isn’t just biology, it’s a <span>practice</span></p>
        </div>
    );
}

export default Hero;


