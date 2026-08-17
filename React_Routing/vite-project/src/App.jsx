import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Login from './Login.jsx'
import Contact from './Contact.jsx'
import PageNotFound from './PageNotFound.jsx'
import Mobile from './Mobile.jsx'
import Iphone from './Iphone.jsx'
import Redmi from './Redmi.jsx'
import Realme from './Realme.jsx'
import Feature from './Feature.jsx'
import Description from './Description.jsx'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}>
          <Route path='feature' element={<Feature/>}/>
          <Route path='description' element={<Description/>}/>
       </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/mobile" element={<Mobile/>}>
            <Route path='iphone' element={<Iphone/>}/>
            <Route path='redmi' element={<Redmi/>}/>
            <Route path='realme' element={<Realme/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App