import React, { useState } from 'react'

const Control1 = () => {
    let [details,setDetails] = useState({
        Username:"",
        Email:"",
        Password:""
    })
    let [submit1,setSubmit1] = useState(null)
    let handleChange = (e)=>{
        let {name,value}=e.target
        setDetails({...details,[name]:value})
    }
    let handleSubmit = (e)=>{
        e.preventDefault()
        setSubmit1(details)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your username:-</label>  
        <input type="text" name="Username" id="username"  value={details.Username} onChange={handleChange}/><br></br>
        <label htmlFor="email">Enter your email:-</label>
        <input type="email" name="Email" id="email"   value={details.email} onChange={handleChange}/><br></br>
        <label htmlFor="password">Enter your password:-</label>
        <input type="password" name="Password" id="password"   value={details.Password} onChange={handleChange}/><br></br>
        
        <button>Submit</button>
      </form>
    </>
  )
}

export default Control1