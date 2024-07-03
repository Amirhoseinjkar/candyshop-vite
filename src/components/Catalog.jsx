import React, { useState } from "react";

function Catalog({ catalog }) {
  const [index, setindex] = useState(0);
  const handleLeftArrow = () => {
    const isFristIndex = index === 0;
    const newIndex = isFristIndex ? catalog.length - 1 : index - 1;
    setindex(newIndex);
  };
  const handleRightArrow = () => {
    const isLastIndex = index === catalog.length - 1;
    const newindex = isLastIndex ? 0 : index + 1;
    setindex(newindex);
  };
  return (
    <div className="catalog-container">
      <h1 className="font-bold text-2xl ">Catalog of delicious treats</h1>
      <div className="catalog flex justify-center">
        <div className="catalog-img">
          <img src={catalog[index].url} alt="cake" />
        </div>
      </div>
      <div className="mt-10 flex justify-center gap-16">
        <button onClick={handleLeftArrow}>
          <img src="src\assets\leftaroow.png" alt="left arrow" />
        </button>
        <button onClick={handleRightArrow}>
          <img src="src\assets\rightarrow.png" alt="right arrow" />
        </button>
      </div>
      <div className="cupcakes-model mt-20 flex flex-col justify-center">
        <div className="flex justify-center mb-7">
          <img src="src\assets\catalog\unnamed (7) 1.png" alt="cacke" />
        </div>
        <h3 className="mb-5">Cupcake (cherry)</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          quibusdam ex velit corporis voluptates.
        </p>
        <h3>price: 8$</h3>
        <button>add to cart</button>
        <div className="flex justify-center mb-7">
          <img src="src\assets\brown.png" alt="cacke" />
        </div>
        <h3 className="mb-5">Cupcake (Chocolate)</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          aliquid omnis ut cupiditate commodi officia.
        </p>
        <h3 className="mt-5">price: 10$</h3>
        <button>add to cart</button>
      </div>
    </div>
  );
}

export default Catalog;
