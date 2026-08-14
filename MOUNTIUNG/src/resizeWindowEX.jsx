import React from 'react'
import {useEffect} from 'react'

const App = ()=> {
    useEffect(()=>{
    let timer = setTimeout(()=>{
        console.log("executing after 2 seconds")

    },2000)
    return ()=>{
        clearTimeout(timer)
    }
},[])
return(
    <>
    </>
)
}
 export default App