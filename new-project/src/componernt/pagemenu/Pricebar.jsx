import React from 'react'

export default function Pricebar() {
  return (
    <div className='bg-danger inset-shadow-sm absolute inset-shadow-slate-500/100 fixed shadowBoox sm:w-[320px] md:w-[400px] vh-100 '>
      <header className='bg-dark h-20'>
        <div className='famili pt-3 position-relative justify-between items-center mx-2 flex text-amber-400 text-3xl'>
          <span className=''>TOTAL:</span>
          <span className=''>0.00$</span>
        </div>
      </header>
      <div className='text-secondary translate-x-20 text-2xl  translate-y-60 items-center flex '>
        Votre commande
      </div>
      <footer className='bg-dark absolute  container text-lime-50 bottom-20 h-20 z-1'>
        <div className='flex mt-3 justify-center'>
          Codez avec react js
        </div>
      </footer>
    </div>
  )
}
