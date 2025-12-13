import React, { createContext, useState } from 'react'


export const TeamContext = createContext()

export default function ThemProvider(props) {

    const [darkMode, setDarkMod] = useState(false)


    function darKFunct(){
        setDarkMod(!darkMode)
    }

    // if (darkMode) document.body.classList.add('dark')
    // else document.body.classList.remove('dark')

  return (
    <TeamContext.Provider value={{darKFunct, darkMode}}>
        {props.children}
    </TeamContext.Provider>
  )
}
