import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className='flex items-center justify-between bg-green-950 px-5 py-10'>
      <h1 className='text-2xl text-orange-300' >Sheryiansh</h1>
      <div className='flex items-center justify-center gap-6 '>
        <Link to='/' className='text-xl text-orange-300'>Home</Link>
        <Link to='/About' className='text-xl text-orange-300'>About</Link>
        <Link to='/FAQ' className='text-xl text-orange-300'>FAQ</Link>
        <Link to='/Contact' className='text-xl text-orange-300'>Contact</Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar