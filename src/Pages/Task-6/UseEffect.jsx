import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import Butterfly1 from '../../assets/Images/butterfly-1.jpg'
import Butterfly2 from '../../assets/Images/butterfly-2.jpg'

const UseEffect1 = () => {

    const color1 = useRef();
    const textArea = useRef();

    const onChangeColor = () => {
        color1.current.style.backgroundColor = "red";
    }
    // Img components useEffect

    const [img, setImg] = useState(Butterfly1)
    const [alertMsg, setAlertMsg] = useState(0);
    const changeImg1 = () => {
        setImg(Butterfly1);
    }
    const changeImg2 = () => {
        setImg(Butterfly2);
    }

    useEffect(() => {
            alert("Hello! I am an alert box!");
            console.log("alertmsg");

    }, [img]);


    // Counter useEffect

    const [count1, setCount1] = useState(0)
    const [add, setAdd] = useState (0);
    const increament = () => {
        if (count1 < 100) {
            setCount1(count1 + 1);
        }
    }
    useEffect (() => {
            alert("Click to add and increase number");
    }, [count1])

    // counter useEffect


    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    });

    return (
        <>

            <div className="container">
                <p>Count: {count}</p>
                <button onClick={() => setCount((c) => c + 1)}>+</button>
                <p>Calculation: {calculation}</p>

                <h2 className='text-center fw-bold text-decoration-underline'>
                    Q.1 :- Image Components
                </h2>
                <div className="row d-flex justify-content-center mt-4">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <img src={img} alt="Butterfly" className='img-fluid' />
                            </div>
                        </div>
                        <div className='text-center mt-3'>
                            <button className={`btn ${img === Butterfly1 ? 'btn-primary' : 'btn-outline-primary'} `} onClick={changeImg1}>click me!</button>
                            <button className={`btn ms-2 ${img === Butterfly2 ? 'btn-primary' : 'btn-outline-primary'} `} onClick={changeImg2}>click here!</button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body text-center">
                                <p className='h1 py-3 px-3 border border-3'>{count1}</p>
                                <button className='p-2' onClick={increament}>Click to add !</button>
                            </div>
                        </div>
                    </div>

                    <textarea name="" id="" ref={textArea}></textarea>
                    <div  ref={color1}>
                        hello
                    </div>
                    <button onClick={onChangeColor}> change color</button>
                </div>

            </div>
        </>
    )
}

export default UseEffect1