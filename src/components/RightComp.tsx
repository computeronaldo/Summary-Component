import MemoryIcon from "../assets/images/icon-memory.svg";
import ReactionIcon from "../assets/images/icon-reaction.svg";
import VerbalIcon from "../assets/images/icon-verbal.svg";
import VisualIcon from "../assets/images/icon-visual.svg";

import "./RightComp.css";

const RightComp = () => {
  return (
    <div className="main-right">
      <h3>Summary</h3>
      <section className="content">
        <span className="reaction-info info">
          <span className="info-inner">
            <img src={ReactionIcon} alt="reaction-icon" />
            <span className="reaction-info-inner">Reaction</span>
          </span>
          <span className="black">
            80<span className="total"> / 100</span>
          </span>
        </span>
        <span className="memory-info info">
          <span className="info-inner">
            <img src={MemoryIcon} alt="memory-icon" />
            <span>Memory</span>
          </span>
          <span className="black">
            92<span className="total"> / 100</span>
          </span>
        </span>
        <span className="verbal-info info">
          <span className="info-inner">
            <img src={VerbalIcon} alt="verbal-icon" />
            <span>Verbal</span>
          </span>
          <span className="black">
            61<span className="total"> / 100</span>
          </span>
        </span>
        <span className="visual-info info">
          <span className="info-inner">
            <img src={VisualIcon} alt="visual-icon" />
            <span>Visual</span>
          </span>
          <span className="black">
            72<span className="total"> / 100</span>
          </span>
        </span>
        <button className="btn">Continue</button>
      </section>
    </div>
  );
};

export default RightComp;
