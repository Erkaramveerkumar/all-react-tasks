import React, { useMemo, useState } from 'react'

const MemoTask = () => {
    const [count, setCount] = useState(0);
    const [addValue, setAddValue] = useState(0);
    // const calculation = useMemo(() => maxCalculation(count), [count]);
    const calculation = maxCalculation (count);
    const increment = () => {
        if (count < 100) {
            setCount(count + 1);
        }
    }
    const increment1 = () => {
        if (addValue < 100) {
            setAddValue(addValue + 1);
        }
    }

    return (
        <>

            <div>
                <div>
                    <h1>addValue: {addValue}</h1>
                    <button onClick={increment1}>Add Value</button>

                </div>
                <hr />
                <div>
                    <h1>Count: {count}</h1>
                    <button onClick={increment}>Increment</button>
                    <br />
                    <h1>max Calculation</h1>
                    <h2>calculation : {calculation}</h2>
                </div>
            </div>
        </>
    )
};
const maxCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    console.log(num);
    return num;
};

export default MemoTask