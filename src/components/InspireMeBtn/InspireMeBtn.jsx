import "./InspireMeBtn.scss"

import { useState } from "react";

const InspireMeBtn = ({isActive, setIsActive}) => {
    const handleClick = () => {
        setIsActive(prev => !prev);
    }
    return (
        <>
            <div className="inspire-btn-container">
                <button onClick={handleClick} className={`inspire-btn ${isActive ? "inspire-btn--active" : ""}`}>
                    <span className="inspire-btn__text">{isActive ? "Inspired" : "Inspire Me"}</span>
                </button>
            </div>
        </>
    )
}

export default InspireMeBtn;