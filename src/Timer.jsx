import React from "react";
import { useState,useEffect } from "react";


const Timer = () =>{
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

  
    useEffect(() => {
        setCalculation(() => count * 2 );
    },[count]);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((count) => count + 1)}>Click </button>
            <p>Calculation: {calculation}</p>
        </>
    );
};
export default Timer;

  // useEffect(() => {
    //     setTimeout(() => {
    //     setCount((count) => count + 1);
    //     }, 1000);
    // });
    // return count;