import React, { useState } from "react";

function Navbar() {
  const [openHamber, setOpenHamber] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-list">
        <div className="hamber-menu-bg flex flex-row gap-6 cursor-pointer">
          <h3>Contact us</h3>
          <h3>Blog</h3>
          <h3>About us</h3>
          <h3>Log in</h3>
        </div>
      </div>
      {openHamber ? (
        <div className="hamber-menu w-[200px] h-[100vh] flex flex-col gap-4 font-semibold text-lg p-2 ">
          <p
            onClick={() => setOpenHamber(!openHamber)}
            className="relative left-[160px] top-[-4px] font-bold text-xl cursor-pointer "
          >
            &#215;
          </p>
          <div className="hamber-menu-bg flex flex-col gap-4 cursor-pointer">
            <h3>Contact us</h3>
            <h3>Blog</h3>
            <h3>About us</h3>
            <h3>Log in</h3>
          </div>
        </div>
      ) : (
        <button
          className="navbar-hide-btn"
          onClick={() => {
            setOpenHamber(!openHamber);
          }}
        >
          <img src="src\assets\Бургер иконка.png" alt="hamberger menu" />
        </button>
      )}
      <img src="src\assets\Sweet Paradise.png" alt="sweet paradise text" />
      <img
        className="mr-8 z-10"
        src="src\assets\icons8-корзина-2-96 1.png"
        alt="shopping list"
      />
    </div>
  );
}

export default Navbar;
