import React, { useState } from "react";

const CupCackes = ({ slides }) => {
  const [index, setindex] = useState(0);

  const handleRightArrow = () => {
    const isLastIndex = index === slides.length - 1;
    const newIndex = isLastIndex ? 0 : index + 1;
    setindex(newIndex);
  };
  const handleLeftArrow = () => {
    const isFirstIndex = index === 0;
    const newIndex = isFirstIndex ? slides.length - 1 : index - 1;
    setindex(newIndex);
  };

  return (
    <div>
      <div className="slides-container2">
        <div
          className="slides-img"
          style={{ backgroundImage: `url(${slides[index].url})` }}
        ></div>
      </div>
      <div className="arrow-btn">
        <button onClick={handleLeftArrow}>
          <img src="src\assets\leftaroow.png" alt="left arrow" />
        </button>
        <button onClick={handleRightArrow}>
          <img src="src\assets\rightarrow.png" alt="right arrow" />
        </button>
      </div>
      <div className="cupckake-button-container ">
        <button>add to cart</button>
        <img src="src\assets\comp_single_01 1.png" alt="leaf" />
      </div>
    </div>
  );
};

export default CupCackes;
