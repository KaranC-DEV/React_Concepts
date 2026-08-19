import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Products from './Products.jsx'
//import Details from './Details.jsx'
import User from './User.jsx'
import Todos from './Todos.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
<Route path='/' element={<h1>Home Page</h1>} />

       <Route path='/user' element={<User/>}>
            <Route path=':userId' element={<Todos/>}/>
        </Route>

        <Route path='/products' element={<Products/>}>
         
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}
export default App