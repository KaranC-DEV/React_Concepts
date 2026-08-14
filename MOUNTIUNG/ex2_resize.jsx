import React from "react";
import { useEffect } from "react";

const Nav =() =>{

    useEffect(()=>{
    return()=>{
console.log("unmounting")

    }

},[])
return(
    <div>
        <h1>nav</h1>
    </div>
)
}