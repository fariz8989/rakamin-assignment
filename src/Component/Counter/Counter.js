import React, { useState } from "react";
export default function Counter(){
    const[count, setCount]= useState(0)
    return(
        <div className=" translate-y-16">
        <h1 className="text-lg text-red-500">Counter Value : {count}</h1>
        <button onClick={e=>{
            e.preventDefault()
            setCount(count+1)
        }}>ADD</button>
        <button onClick={e=>{
            e.preventDefault()
            setCount(count-1)

        }}>LESS</button>
        </div>
    )
}