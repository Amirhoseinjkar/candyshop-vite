import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import CupCackes from "./components/cupcackes";
import WhyUs from "./components/WhyUs";
import NewProducts from "./components/NewProducts";
import HowWeWork from "./components/howWeWork";
import Catalog from "./components/Catalog";
function App() {
  const slides = [
    { url: "src/assets/pink.png", title: "pink" },
    { url: "src/assets/brown.png", title: "brown" },
    { url: "src/assets/salted.png", title: "salted" },
  ];
  const catalog=[
    {url:"src/assets/catalog/800x800_STL_cd2155158921cce460e7b06a0006b194 1.png"},
    {url:"src/assets/catalog/A_Little_Love_Goes_a 1.png"},
    {url:"src/assets/catalog/012.3 1.png" },
  ]

  return (
    <>
      <div className="container">
        <div className="navbar">
          <img
            className=""
            src="src\assets\Бургер иконка.png"
            alt="hamberger menu"
          />
          <img src="src\assets\Sweet Paradise.png" alt="sweet paradise text" />
          <img src="src\assets\icons8-корзина-2-96 1.png" alt="shopping list" />
        </div>
        <Header />
        <div className="slides-container">
          <CupCackes slides={slides} />
        </div>
        <div className="video1">
          <img src="src\assets\vse-o-professii-konditer 1.png" alt="video" />
          <div className="video1-text">
            <p>intro to our work</p>
            <button>
              <img src="src\assets\icons8-видео-48 1.png" alt="play" />
            </button>
          </div>
        </div>
      </div>
      <WhyUs />
      <div className="flex justify-center ">
      <div className="circle-dots">
        <div className="circle-dots-img">
         <img src="src\assets\pov2-2 1.png" alt="chef" />
        </div>
      </div>
      <div className="dot1 absolute bg-thispink w-5 h-5"></div>
      <div className="dot2 absolute bg-thispink w-5 h-5"></div>
      <div className="dot3 absolute bg-thispink w-5 h-5"></div>
      <div className="dot4 absolute bg-thispink w-5 h-5"></div>
      </div>
      <div className="new-products">
        <p className="font-bold text-3xl relative top-[670px] text-center">Our New Products</p>
      </div>
      
      <NewProducts/>
      <HowWeWork/>
      <Catalog catalog={catalog} />
    </>
  );
}

export default App;
