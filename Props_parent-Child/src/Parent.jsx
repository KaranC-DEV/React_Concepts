import React from 'react'
import Child from './Child'
const Parent = ()=> {
    function getData1(data1){
        console.log("data:",data1);       
    }
    return(
        <>
            <h1>parent</h1>
            <Child sendData={getData1}/>
        </>
    )
}
export default Parent