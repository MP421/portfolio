import React from 'react'
import { Link } from 'react-router-dom'

const Navlist = () => {
  return (
    <ul className="w-[55%] flex flex-col items-end gap-10 text-6xl font-black">
      <li className="h-[75px] rotate-2 hover:rotate-0 hover:text-7xl hover:underline duration-100">
        <Link to='/apod'>NASA IMAGE OF THE DAY</Link>
      </li>
      <li className="h-[75px] rotate-2 hover:rotate-0 hover:text-7xl hover:underline duration-100">
        <Link to='/antur'>ANTUR</Link>
      </li>
      {/* <li className="h-[75px] rotate-2 hover:rotate-0 hover:text-7xl hover:underline duration-100">
        <Link to='/aisummariser'>AI SUMMARISER</Link>
      </li> */}
      <li className="h-[75px] rotate-2 hover:rotate-0 hover:text-7xl hover:underline duration-100">
        <Link to='/rhestr'>RHESTR</Link>
      </li>
      {/* <li className="h-[75px] rotate-2 hover:rotate-0 hover:text-7xl hover:underline duration-100">
        <a href="https://socittome.net">SOC IT TO ME</a>
      </li> */}
      <li className="h-[75px] rotate-2 hover:rotate-0 hover:text-7xl hover:underline duration-100">
        <Link to='/samspatisseries'>SAM'S PATISSERIE</Link>
      </li>
    </ul>
  )
}

export default Navlist
