import "./Hero.scss";

import { useEffect, useState } from "react";

const Hero = () => {

    // const words = ['connection', 'genuity', 'belonging', 'calm', 'presence', 'feeling'];

    // const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');

    // useEffect(() => {
    //     //reset displayed text

    //     //display one letter at a time with an interval

    //     //pause


    // }, [index])

    // useEffect(() => {
    // let i = 0;
    // setDisplayedText('');
    // const word = words[index];
    // const typing = setInterval(() => {
    //     setDisplayedText(word.slice(0, i + 1));
    //     i++;
    //     if (i === word.length) clearInterval(typing);
    // }, 150);

    // const timeout = setTimeout(() => {
    //     setIndex((prev) => (prev + 1) % words.length);
    // }, 4000);

    // return () => {
    //     clearInterval(typing);
    //     clearTimeout(timeout);
    // };
    // }, [index]);

    return (
        <div className="hero">
            <h1 className="hero__text">
                <span className="hero__text-span">Patience</span>
                {/* <span className="hero__text-cursor" /> */}
            </h1>
        </div>
    );
}

export default Hero;


