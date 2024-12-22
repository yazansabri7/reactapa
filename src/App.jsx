import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header2 from './components/Header/Header2'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/portfolio/About'
import Contact from './components/Contact'
import Footer from './components/footer/Footer'
import { Routes , Route } from 'react-router-dom'



 

export default function App() {
 
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Header2/>}></Route>
      <Route path='/Portfoilo' element = {<Portfolio />}></Route>
      <Route path='/About' element = {<About />}></Route>
      <Route path='/Contact' element = {<Contact />}></Route>
      
    </Routes>
    
    
    

    <Footer/>
   
     </>
    
  )
}
