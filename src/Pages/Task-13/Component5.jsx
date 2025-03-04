import React, { useContext } from 'react'
import ContextOne from './ThemeContext'

const Component5 = () => {
    const { mode, toggleMode } = useContext(ContextOne);
    
  return (
    <div className={mode==='light' ? 'bg-light text-dark' : 'bg-dark text-white'} style={{height:'400px'}}> {mode} 
    <button className={`${mode === 'light' ? 'bg-dark text-white' : 'bg-light text-dark'}`} onClick={toggleMode}>
      {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button></div>
  )
}

export default Component5