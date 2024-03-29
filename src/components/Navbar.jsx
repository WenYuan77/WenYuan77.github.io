import {links} from '../data.jsx'
import React from 'react';

const Navbar = () => {
  return (
    <nav>
        <div className='px-8 py-4 flex flex-col 
        sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
            <h2 className='text-3xl font-bold'>
                Full Stack <span className='text-lime-600'>Dev</span>
            </h2>
            <div className='flex gap-x-3'>{links.map((link) => {
                const {id, href, text} = link
                return <a href= {href} key = {id} 
                className='capitalize text-lg tracking-wide
                 hover:text-emerald-600 duration-300'>
                    {text}
                </a>
            })}</div>
        </div>
    </nav>
    
  )
}

export default Navbar