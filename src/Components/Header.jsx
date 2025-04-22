import React, { useState } from 'react'
import Logos from "../assets/images/Logos.png"
import { Link, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  function handleClick() {
    setActive(!active)
  }

  const [active, setActive] = useState(false)
  const navigate = useNavigate()
  return (
    <header className='flex justify-center bg-slate-900 sticky top-0 z-10'>
      <div className='w-[90%] flex items-center justify-between '>
        <Link to="/" className='flex items-center  font-bold'>
      <img src={Logos} alt="" className=' h-32 text-white '/>
      <h1 className='text-[#B38948] text-xl'>Luqman Sabir</h1>
        </Link>
        
<nav className='flex gap-10 font-bold text-white text-xl max-[750px]:hidden'>
     <Link to="/">Home</Link>
     <Link to="/about">About Me</Link>
     <Link to="/skills">Skills</Link>
     <Link to="/projects">Projects</Link>
     <Link to="/contact">Contact</Link>
  </nav>
  <div   className='text-white text-2xl min-[750px]:hidden' onClick={handleClick}>
   {
    active ?
<IoClose/>
    :
    <GiHamburgerMenu   />

   }
  </div>
  {
  active &&
  <div className='absolute h-screen top-24 w-[100%] left-0 min-[750px]:hidden text-center bg-slate-900 pb-5'>

  <nav className='flex flex-col  gap-10 font-bold text-white text-xl '>
     <Link  onClick={()=>{navigate("/")
      setActive(!active)
     }}>Home</Link>
     <Link onClick={()=>{navigate("/about")
      setActive(!active)
     }} >About Me</Link>
     <Link onClick={()=>{navigate("/skills")
      setActive(!active)
     }}>Skills</Link>
     <Link onClick={()=>{navigate("/projects")
      setActive(!active)
     }}>Projects</Link>
     <Link onClick={()=>{navigate("/contact")
      setActive(!active)
     }}>Contact</Link>
  </nav>
  </div>
  }
  </div>
      </header>
  )
}

export default Header