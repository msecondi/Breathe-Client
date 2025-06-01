import "./Flame.scss";
import Lottie from "lottie-react";
import flameAnimation from "../../assets/animations/flame.json"

const Flame = () => {
    return (
        <div className="flame-container">
            <Lottie animationData={flameAnimation} loop={true} />
        </div>
    );
}
export default Flame;