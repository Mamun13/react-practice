import React, { useState } from "react";
import "./index.css";

const Digiclock=()=>{
    let date = new Date().toLocaleDateString();

    return(
        <>
        <p className="date">{date}</p>
        
        </>
        
    )
}
export default Digiclock;