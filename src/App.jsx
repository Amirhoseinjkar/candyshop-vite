import { useState } from 'react'
import './App.css'
import Header from './components/header'
import CupCackes from './components/cupcackes'
import WhyUs from './components/WhyUs'
function App() {
 const slides= [
  {url:"src/assets/pink.png", title:"pink"},
  {url:"src/assets/brown.png", title:"brown"},
  {url:"src/assets/salted.png", title:"salted"},

 ]
  

  return (
    <>
     <div className='container'>
      <div className="navbar">
        <img className='' src="src\assets\Бургер иконка.png" alt="hamberger menu" />
        <img src="src\assets\Sweet Paradise.png" alt="sweet paradise text" />
        <img src="src\assets\icons8-корзина-2-96 1.png" alt="shopping list" />
      </div>
      <Header/>
      <div className='slides-container'>
      <CupCackes slides={slides}/>
      </div>
      <div className='video1'>
        <img src="src\assets\vse-o-professii-konditer 1.png" alt="video" />
        <div className='video1-text'>
          <p>intro to our work</p>
          <button><img src="src\assets\icons8-видео-48 1.png" alt="play" /></button>
        </div>
      </div>
     
     </div>
     
     <WhyUs />
     
    </>
  )
}

export default App
