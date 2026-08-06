import React, { useState } from 'react'
const Controlled = () => {
    let [userName,setUserName] = useState("")
    let [email,setEmail] = useState("")
    let [submit1,setSubmit1] = useState(null)
    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log("username:",userName)
        console.log("email:",email)
        let data1 = { 
            userName,email
        }
        setSubmit1(data1)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your username:-</label>  
        <input type="text" name="Username" id="username"  value={userName} onChange={(e)=>setUserName(e.target.value)}/><br></br>
        <label htmlFor="email">Enter your email:-</label>
        <input type="email" name="Email" id="email" value={email}  value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
        <button>Submit</button>
        {submit1 && <div><h3>username:{submit1.userName}</h3><h3>email:{submit1.email}</h3></div>}
      </form>
    </>
  )
}
export default Controlled