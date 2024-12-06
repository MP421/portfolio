import React from 'react'
import Bio from './Bio'
import Navlist from './Navlist'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between w-full mx-auto pt-8 mb-20 font-sansinter text-[#1E1E1E] md:flex-row md:w-[90%] md:pt-20">
      <Bio />
      <Navlist />
    </header>
  )
}

export default Header
