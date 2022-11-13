import classNames from "classnames";
// import "./AllDone.scss";
import { useReward } from "react-rewards";

const AllDoneButton = () => {
  const { reward, isAnimating } = useReward('rewardId', 'confetti');
 

    <button id="rewardId" onClick={reward}>ShowAlert
      {/* <span id="rewardId" />
      🎉 */}
    </button>

};
export default AllDoneButton;
