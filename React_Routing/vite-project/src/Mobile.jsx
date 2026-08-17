import React from 'react'
import { Outlet } from 'react-router-dom'

const Mobile = () => {
  return (
    <>
      <h1>MOBILE PAGE</h1>
      <Outlet/>
    </>
  )
}

export default Mobile