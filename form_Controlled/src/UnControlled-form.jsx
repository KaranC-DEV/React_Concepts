import React, { useRef, useState } from 'react'

const UncontrolledForm = () => {
  let userRef = useRef()
  let emailRef = useRef()
  let passRef = useRef()
  let [submit1, setSubmit1] = useState(null)

  let handleSubmit = (e) => {
    e.preventDefault()
    setSubmit1({
      Username: userRef.current.value,
      Email: emailRef.current.value,
      Password: passRef.current.value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your username:-</label>
        <input type="text" id="username" ref={userRef} /><br />
        
        <label htmlFor="email">Enter your email:-</label>
        <input type="email" id="email" ref={emailRef} /><br />
        
        <label htmlFor="password">Enter your password:-</label>
        <input type="password" id="password" ref={passRef} /><br />
        
        <button>Submit</button>
      </form>

      
      {submit1 && (
        <div >
          <h3>Submitted Data:</h3>
          <p><strong>Username:</strong> {submit1.Username}</p>
          <p><strong>Email:</strong> {submit1.Email}</p>
          <p><strong>Password:</strong> {submit1.Password}</p>
        </div>
      )}
    </>
  )
}

export default UncontrolledForm
