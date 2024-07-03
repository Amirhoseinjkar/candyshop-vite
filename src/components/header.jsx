import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <p className="font-bold text-thispink text-3xl mb-3 ">sweet paradise</p>
      <h1 className="font-bold text-3xl mb-8">
        we will make your <br />
        life sweeter
      </h1>
      <div className="header-buttons">
        <button className="header-button1">choose candy</button>
        <button className="header-button2">make your own</button>
      </div>
    </div>
  );
};

export default Header;
