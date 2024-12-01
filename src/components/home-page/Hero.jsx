import React from 'react'
import Bio from './Bio'
import Navlist from './Navlist'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between w-[90%] mx-auto pt-20 mb-20 font-sansinter text-[#1E1E1E] md:flex-row">
      <Bio />
      <Navlist />
    </header>
  )
}

export default Header
