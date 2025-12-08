import React, { useState } from 'react'

export default function App() {

  const [name, setName] = useState()


  function handleSummit(e){
    e.preventDefault()
    if (name !== '') {
      alert(`Bonjour ${name}`)
    }
    setName('')
  }


  return (
<div className=' text-amber-50 text-center'>
    <h1>Bienvenue chez nous !</h1>

    <p>Connectez-vous</p>
    <form onSubmit={handleSummit} action="">
      <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text" required placeholder='Entrer votre prénom' name="" id="" />
      <button>accédez à votre aspace</button>
    </form>
</div>
  )
}
