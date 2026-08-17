import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>home page</h1>
      <br /><br />
      <Link to={"/contact"}>GO TO CONTACT</Link>
      <br /> <br />
      <NavLink to={"/login"}>GO TO LOGIN</NavLink>
    </div>
  )
}

export default Home