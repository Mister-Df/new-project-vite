import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function MenuCommand() {

  const inputValue = useParams()
  console.log('parametre', inputValue);
  

  return (
    <div className='bg-lime-50 container vh-100 vw-100'>
      <h4>Bonjour et bienvenue {inputValue.inputName} </h4>

      <Link to={'/'} className=' list-unstyled btn btn-primary btn-sm'><button>Déconnecter</button></Link>
    </div>
  )
}
