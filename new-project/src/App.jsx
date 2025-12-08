import React, { useState } from 'react'
import imgBurger from '/public/Cheeseburger.jpg'
import LoginForm from './componernt/pageLogin/LoginForm';
import BurgerLogo from './componernt/pageLogin/BurgerLogo';

export default function App() {

  // hover:bg-sky-700 
  return (
    <div className=' text-amber-50 text-center'>
      <img className=' vw-100 vh-100 fixed  object-cover' src={imgBurger} alt="" />
      <div className=' bg-auto container-fluid  absolute'>
        {/* <p className='text-6xl mt-5 pt-20'>CREZEE BURGER</p> */}
        <BurgerLogo />
        <div className='mt-30'>
          <h1 className='text-9xl '>Bienvenue chez nous !</h1>
          <p className='border-b-4  border-amber-500 text-amber-500 container w-50'></p>

          <p className='text-xl mt-5'>Connectez-vous</p>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
