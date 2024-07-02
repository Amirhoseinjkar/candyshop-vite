import React from 'react'

function Individuals() {
  return (
    <div className='individuals-container flex justify-center flex-col text-center'>
      <img className='absolute top-[-60px]' src="src\assets\individual\mixed-berries 1.png" alt="berry" width={100} />
      <img className='absolute top-[-30px] right-0' src="src\assets\individual\unnamed 2.png" alt="leaf" width={100} />

      <h4>Order</h4>
      <h4 className='text-[#A0114E]'>Individual</h4>
      <h4>Set of sweets</h4>

      <img className='z-10'  src="src\assets\individual\5144978ef1c03eb3117d1eb52cb7df6f 1.png" alt="box" />
      <img className='individuals-leaf' src="src\assets\individual\unnamed 1.png" alt="leaf" width={100} />
      <p className='text-white font-semibold text-[16px] leading-6 mt-10 '>
      Fill out the form and we will <br/>
       call you back to complete your order.

      </p>

      <div className='individuals-input'>
        <input type="text" placeholder='name' />
        <input type="text" placeholder='number' />
        <button>submit</button>
        <img className='absolute right-[90px]' src="src\assets\individual\icons8-пользователь-50 (1) 1.png" alt="person" width={20} />
        <img className='absolute right-[90px] top-[855px]' src="src\assets\individual\icons8-сотовый-телефон-50 1.png" alt="phone" width={20} />

      </div>
    </div>
  )
}

export default Individuals