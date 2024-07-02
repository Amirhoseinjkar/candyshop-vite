import React from "react";

function Reviews() {
  return (
    <div className="reviews-container">
      <h2 className="font-bold text-2xl">
        reviews from <br />
        our costomers
      </h2>
      <div className="flex flex-col justify-center">
        <img
          className="z-10"
          src="src\assets\reviews\видео 1.png"
          alt="customer"
        />
        <img
          className="z-10"
          src="src\assets\reviews\pastry-girl-with-cake-in-hand-decorated-with-berries_154317-305 1.png"
          alt="customer"
        />
        <img
          className="z-10"
          src="src\assets\reviews\redhead-girl-with-red-velvet-cake_1258-7441 1.png"
          alt="customer"
        />
      </div>
      <img className="absolute top-[1370px] left-[150px] z-20" src="src\assets\reviews\Иконка видео.png" alt="play-icon" />
      <img className="absolute top-[750px] left-[150px] z-20" src="src\assets\reviews\Иконка видео.png" alt="play icon" />
      <img
        className="absolute top-8 right-0 z-0"
        src="src\assets\reviews\Depositphotos_223017952_xl-2015-1 2.png"
        alt="dust"
      />
      <img
        className="absolute top-[950px]"
        src="src\assets\reviews\Depositphotos_223017952_xl-2015-1 1.png"
        alt="dust"
      />
      <div className="insta">
        <h2 className="font-bold text-2xl mt-6">
          We are on instagram
        </h2>
        <div className=" insta-pics flex flex-col justify-center">
        <img src="src\assets\reviews\151 1.png" alt="pics from insta" />
        <img src="src\assets\reviews\amerikanskie-ponchiki-donats_1595483652_23_max 1.png" alt="pics from insta" />
        <img src="src\assets\reviews\yeklery-3 1.png" alt="pics from insta" />
        <button>Load more</button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
