import "./Flame.scss";
import Lottie from "lottie-react";
import flameAnimation from "../../assets/animations/flame.json"

const Flame = ({countMultiplier}) => {
    let flameScale = Math.min(0.2 + (countMultiplier * 0.05), 1.5);
    if(flameScale > 1.5) flameScale = 1.5;

    const flameStyle = {
        transform: `scale(${flameScale})`
    };

    return (
        <div className="flame-container" style={flameStyle}> 
            <div className="flame">
                <Lottie animationData={flameAnimation} loop={true} />
            </div>
        </div>
    );
}
export default Flame;