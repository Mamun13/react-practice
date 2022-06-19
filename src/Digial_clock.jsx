import React, { useState } from "react";
import "./index.css";

const Digiclock=()=>{
    let time = new Date().toLocaleTimeString();


    const [ctime, setCtime]= useState(time);
    
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime,1000);

    return(
        <>
        <h1 className="clock">{time}</h1>
        
        </>
        
    )
}
export default Digiclock;