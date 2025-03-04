import React, { useState } from 'react'
import ContextOne from './ThemeContext'
import Component1 from './Component1';

const ThemeProvider = () => {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if(mode === 'light') {
            setMode('dark')
        }else{
            setMode('light')
        }
    }
  return (<>
  <ContextOne.Provider value={{mode, toggleMode}} >
    <Component1 />
  </ContextOne.Provider>
  </>
  )
}

export default ThemeProvider