import "./Flame.scss";
import Lottie from "lottie-react";
import flameAnimation from "../../assets/animations/flame.json"

const Flame = ({countMultiplier}) => {

    let flameScale = 0.2 + (countMultiplier * 0.1); // Base scale plus multiplier effect
    if(flameScale > 2) flameScale = 2; // Cap the scale to prevent flame from getting too large

    const flameStyle = {
        transform: `scale(${flameScale})`,
        transition: 'transform 1.7s ease-out'
    };

    return (
        // adjust 'style' attribute manually here to accurately manipulate scale of flame
        <div className="flame-container" style={flameStyle}> 
            <div className="flame">
                <Lottie animationData={flameAnimation} loop={true} />
            </div>
        </div>
    );
}
export default Flame;