import React from 'react'

const Child = ({sendData})=>{
    return (
    <>
      <h2>Child component</h2>
      <button onClick={()=>sendData("hello")}>Click me</button>
    </>
  )
}

export default Child
