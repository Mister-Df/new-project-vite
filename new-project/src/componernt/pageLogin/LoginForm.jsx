import { useState } from 'react'
import { RiAccountCircleLine } from "react-icons/ri";


export default function LoginForm() {


      const [name, setName] = useState()
    
    
      function handleSummit(e) {
        e.preventDefault()
        if (name.trim() !== '') {
          alert(`Bonjour ${name}`)
        }
        setName('')
      }



    return (
        <form onSubmit={handleSummit} action="" className='flex flex-col mx-auto w-xl '>
            <div className='container rounded-2xl flex  mb-2 bg-lime-50 p-2'>
                <RiAccountCircleLine className='text-dark absolute mx-3 items-center mt-2' />
                <input
                    className=' rounded-2xl p-1 relative outline-amber-500 px-5 text-black  w-2xl container flex justify-center items-center'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" required placeholder='Entrer votre prénom' />
            </div>
            <button className='bg-amber-500 rounded-3 p-2 container hover:text-amber-500 hover:bg-amber-50'>{'accédez à votre aspace >'}</button>
        </form>
    )
}
