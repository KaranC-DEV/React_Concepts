import React from "react"; 
import { useEffect } from "react";

const Resize_window =()=>{

    useEffect(()=>{
        let handleSize = ()=>{

            console.log("Height:-",window.innerHeight)
            console.log("Weight:-",window.innerWidth)
        }
        window.addEventListener("resize",handleSize)

        return()=>{
            window.removeEventListener("resize",handleSize)

        }
    },[])

    return(
        <>
        </>
    )
}

export default Resize_window