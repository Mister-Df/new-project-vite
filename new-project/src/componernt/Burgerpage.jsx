import imgBurger from '../assets/F03 burger-background.jpg'
import BurgerLogo from './pageLogin/BurgerLogo'
import LoginForm from './pageLogin/LoginForm'
import styled from 'styled-components'
import './styleBurger.css'


export default function Burgerpage() {
  return (
    <div className=' text-amber-50 bg-blend-multiply bg-slate-700 vh-100 monBg text-center'>
      {/* <img className=' vw-100 vh-100 fixed  object-cover' src={imgBurger} alt="" /> */}
      <div className=' bg-auto container-fluid  '>
        {/* <p className='text-6xl mt-5 pt-20'>CREZEE BURGER</p> */}
        <BurgerLogo />
        <div className='mt-5'>
          <h1 className='text-9xl '>Bienvenue chez nous !</h1>
          <p className='border-b-4  border-amber-500 text-amber-500 m-auto lg:w-[450px] sm:w-[355px] w-xs  '></p>

          <p className='text-xl mt-5'>Connectez-vous</p>
          <LoginForm className=''/>
        </div>
      </div>
    </div>
  )
}


