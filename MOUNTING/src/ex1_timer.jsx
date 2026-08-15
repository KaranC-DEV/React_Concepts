// useEffect example fo timer

import React, { useEffect } from "react";
const time = () =>{
    useEffect (()=>{
        let timer = setTimeout(()=>{
            console.log("Executing  after 2 seconds")
        },2000)
        return()=>{
            clearTimeout(timer)
        }
    },[])

    return(
        <>
        </>
    )
}
export default time