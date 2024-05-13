import React from 'react'
import Bio from './Bio'
import Navlist from './Navlist'

const Header = () => {
  return (
    <header className="flex items-center justify-between w-[90%] mx-auto my-20 font-sans text-[#1E1E1E]">
      <Bio />
      <Navlist />
    </header>
  )
}

export default Header
