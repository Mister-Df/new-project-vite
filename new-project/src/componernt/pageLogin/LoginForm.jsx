import { useState } from 'react'
import { RiAccountCircleLine } from "react-icons/ri";
import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import MenuNavbar from '../pagemenu/MenuNavbar';


export default function LoginForm() {

  const navigate = useNavigate()

  const [name, setName] = useState()
  const [validate, setValidate] = useState(false)

  function handleSummit(e) {
    e.preventDefault()
    if (name.trim() !== '') {
      alert(`Bonjour ${name}`)
    }
    navigate(`navbar/${name}`)
    setName('')
    setValidate(true)
  }




  return (
    <>
      <form onSubmit={handleSummit} action="" className='flex flex-col mx-auto w-xl '>
        <div className='container rounded-2xl flex  mb-2 bg-lime-50 p-2'>
          <RiAccountCircleLine className='text-dark absolute mx-3 items-center mt-2' />
          <input
            className=' rounded-2xl p-1 relative outline-amber-500 px-5 text-black  w-2xl container flex justify-center items-center'
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" required placeholder='Entrer votre prénom' />
        </div>
        <button
        
          className='bg-amber-500 rounded-3 p-2 container
           hover:text-amber-500 hover:bg-amber-50'>
          accédez à votre aspace
        </button>
      </form>
    </>
  )
}
