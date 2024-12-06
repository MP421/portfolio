import React from 'react'
import { Link } from 'react-router-dom'

const Navlist = () => {
  return (
    <ul className="w-[90dvw] flex flex-col text-center gap-2 text-4xl font-black mt-12 mb-2 md:w-[55%] md:text-end md:text-6xl md:mb-0 md:mt-0 md:gap-20">
      <li className="h-[75px] rotate-0 duration-100 hover:rotate-0 hover:text-4xl hover:underline md:rotate-2 md:hover:text-7xl">
        <Link to='/apod'>NASA IMAGE OF THE DAY</Link>
      </li>
      <li className="h-[75px] rotate-0 duration-100 hover:rotate-0 hover:text-4xl hover:underline md:rotate-2 md:hover:text-7xl">
        <Link to='/antur'>ANTUR</Link>
      </li>
      {/* <li className="h-[75px] rotate-0 duration-100 hover:rotate-0 hover:text-4xl hover:underline md:rotate-2 md:hover:text-7xl">
        <Link to='/aisummariser'>AI SUMMARISER</Link>
      </li> */}
      <li className="h-[75px] rotate-0 duration-100 hover:rotate-0 hover:text-4xl hover:underline md:rotate-2 md:hover:text-7xl">
        <Link to='/rhestr'>RHESTR</Link>
      </li>
      {/* <li className="h-[75px] rotate-0 duration-100 hover:rotate-0 hover:text-4xl hover:underline md:rotate-2 md:hover:text-7xl">
        <a href="https://socittome.net">SOC IT TO ME</a>
      </li> */}
      <li className="h-[75px] rotate-0 duration-100 hover:rotate-0 hover:text-4xl hover:underline md:rotate-2 md:hover:text-7xl">
        <Link to='/samspatisseries'>SAM'S PATISSERIE</Link>
      </li>
    </ul>
  )
}

export default Navlist
