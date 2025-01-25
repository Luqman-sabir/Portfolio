import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Route, RouterProvider,  } from 'react-router-dom'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Portfolio from './Components/Footer'
import Header from './Components/Header'
import Projects from './Components/Projects'
import About from './Components/About'
import Footer from './Components/Footer'
import Foot from './Components/Foot'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Header/>
        <Home/> 
        <About/> 
        <Contact/> 
        <Skills/> 
        <Projects/> 
        <Footer/>
        <Foot/>
        </div>
    },
    {
      path:"/About",
      element:
      <div>
        <Header/>
        <About/> 
        <Footer/>
        <Foot/>
        </div>
    },
    {
      path:"/contact",
      element:
      <div>
                <Header/>
        <Contact/> 
        <Footer/>
        <Foot/>
        </div>,
    },
    {
      path:"/skills",
      element:
      <div>
                <Header/>
        <Skills/> 
        <Footer/>
        <Foot/>
        </div>,
    },
    {
      path:"/portfolio",
      element:
      <div>
                <Header/>
        <Portfolio/> 
        </div>,
    },
    {
      path:"/projects",
      element:
      <div>
                <Header/>
        <Projects/> 
        <Footer/>
        <Foot/>
        </div>,
    },
  ]
)
function App() {

  return (
   <div className='bg-slate-950  '>
   
    <RouterProvider router={router} />
   </div>
  )
}

export default App
