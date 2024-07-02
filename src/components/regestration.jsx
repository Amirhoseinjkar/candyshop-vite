import React from "react";

function Regestration() {
  return (
    <div className="regestration-container ">
      <h2 className="font-bold text-2xl mb-6">Time to register order! </h2>
      <div className="regestration">
        <h4 className="text-[20px] font-bold text-[#9C0746] mt-10 ">
          ready to order?
        </h4>
        <h4 className="text-[20px] font-bold mt-3 mb-16">
          We'll definitely call you back
        </h4>
        <div className="regestration-input flex flex-col  m-auto gap-7">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="number" />
        </div>
        <button>submit</button>
        <h4 className="mt-5 mb-6 text-[13px]">
        By clicking on the button,<br /> you consent to the processing of <br/> your personal data
        </h4>
      </div>

    </div>
  );
}

export default Regestration;
