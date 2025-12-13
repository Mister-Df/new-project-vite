import React, { createContext, useEffect, useState } from 'react'


export const TeamContext = createContext()

export default function ThemProvider(props) {

    const [darkMode, setDarkMod] = useState(false)

    useEffect(() => {
        if (!darkMode) {
            localStorage.setItem('darkMode', darkMode)
        }else{
            localStorage.getItem(JSON.stringify(darkMode))
        }
    }, [])
    

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
