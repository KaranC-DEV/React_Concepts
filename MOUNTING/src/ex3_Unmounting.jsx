// mounting and Unmounting Example

import React,{useEffect,useState} from "react";
import Nav from './Nav'

const Unmount =() =>{
    let [value1,setValue1] = useState(true)

    return(
        <div>
            {value1 && <Nav/> }        
            <button onClick={()=>{setValue1(!value1)}}>Click</button>
            
        </div>
    )
}

export default Unmount