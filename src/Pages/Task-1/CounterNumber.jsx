import React from 'react'
import { useState } from 'react'
import '../../assets/css/style.css'

const CounterNumber = () => {

  //   Increament / Decreament Counter (+1, -1)

  const [count1, setCount1] = useState(0)
  const increament1 = () => {
    if (count1 < 10 ){
      setCount1 (count1 +1);
    }
  }
  const decreament1 = () => {
    if (count1 > 0){
      setCount1 (count1 -1);
    }
  }

  //   Increament / Decreament Counter (+2, -2)

  const [count2, setcount2] = useState (0)

  const increament2 = () =>{
    if (count2 < 10){
      setcount2 (count2 +2);
    }
  }
  const decreament2 = () => {
    if (count2 > 0){
      setcount2 (count2 -2);
    }
  }


  //   Increament / Decreament Counter (*2, /2)


  const [count3, setcount3] = useState (1)
  const increament3 =() =>{
    if (count3 < 100){
      setcount3 (count3 *2);
    }
  }
  const decreament3 = () =>{
    if (count3 >0){
      setcount3 (count3 /2);
    }
  }

  //  Change Mode UI

  const [mode , setmode] = useState('light')
  const modeUi = () => {
    if (mode === 'light'){
      setmode ('dark');
    }else{
      setmode ('light');
    }
  }


  return (
    <div className= {`${mode === 'light' ? 'light mode-img1' : 'dark mode-img2'}`}>
      <button className={`px-3 py-2 bg-warning float-end ${mode === 'light'? 'bg-dark text-white' : 'bg-light text-dark'}`}  onClick={modeUi}>MODE</button>
    <div>
    <h2 className='text-center text-decoration-underline'>
      Increament / Decreament Counter (+1, -1)
    </h2>

    <div className="row p-3 text-center">
      <div className={`col-md-4 p-5 ${mode === 'light' ? 'border border-3 border-dark' : 'border border-3 border-white'}`}>
        <button className='fs-1 px-5 py-1 bg-danger' onClick={decreament1}>-</button>
      </div>
      <div className={`col-md-4 p-5 ${mode === 'light' ? 'border border-3 border-dark' : 'border border-3 border-white'}`}>
        <h1>
        {count1}
        </h1>
      </div>
      <div className={`col-md-4 p-5 ${mode === 'light' ? 'border border-3 border-dark' : 'border border-3 border-white'}`}>
      <button className='fs-1 px-5 py-1 bg-success' onClick={increament1}>+</button>
      </div>
    </div>
    </div>

    <div>
    <h2 className='text-center text-decoration-underline'>
      Increament / Decreament Counter (+2, -2)
    </h2>

    <div className="row p-3 text-center">
      <div className={`col-md-4 p-5 ${mode === 'light' ? 'border border-3 border-dark' : 'border border-3 border-white'}`}>
        <button className='fs-1 px-5 py-1 bg-danger' onClick={decreament2}>-</button>
      </div>
      <div className={`col-md-4 p-5 ${mode === 'light' ? 'border border-3 border-dark' : 'border border-3 border-white'}`}>
        <h1>
        {count2}
        </h1>
      </div>
      <div className={`col-md-4 p-5 ${mode === 'light' ? 'border border-3 border-dark' : 'border border-3 border-white'}`}>
      <button className='fs-1 px-5 py-1 bg-success' onClick={increament2}>+</button>
      </div>
    </div>
    </div>

    <div>
    <h2 className='text-center text-decoration-underline'>
      Increament / Decreament Counter (*2, /2)
    </h2>

    <div className="row p-3 text-center">
      <div className={`col-md-4 p-5 ${mode === 'light' ? 'border border-3 border-dark' : 'border border-3 border-white'}`}>
        <button className='fs-1 px-5 py-1 bg-danger' onClick={decreament3}>-</button>
      </div>
      <div className={`col-md-4 p-5 ${mode === 'light' ? 'border border-3 border-dark' : 'border border-3 border-white'}`}>
        <h1>
        {count3}
        </h1>
      </div>
      <div className={`col-md-4 p-5 ${mode === 'light' ? 'border border-3 border-dark' : 'border border-3 border-white'}`}>
      <button className='fs-1 px-5 py-1 bg-success' onClick={increament3}>+</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default CounterNumber
