import "./InspireMeBtn.scss"

const InspireMeBtn = ({isActive, setIsActive, scrollToSection}) => {
    const handleClick = () => {
        setIsActive(prev => !prev);
        
        if(!isActive)
            scrollToSection();
    }
    return (
        <>
            <div className="inspire-btn-container">
                <button onClick={handleClick} className={`inspire-btn ${isActive ? "inspire-btn--active" : ""}`}>
                    <span className="inspire-btn__text">{isActive ? "inspired" : "inspire me"}</span>
                </button>
            </div>
        </>
    )
}

export default InspireMeBtn;