import React from 'react'
import { PiHamburgerBold } from "react-icons/pi";

export default function BurgerLogo() {
  return (
    <div className=' flex justify-center'>
      <p className='text-7xl mt-5 flex pt-20 text-amber-500 justify-center items-center'>CREZEE <span><PiHamburgerBold className='text-light text-9xl' /></span> BURGER</p>
    </div>
  )
}
