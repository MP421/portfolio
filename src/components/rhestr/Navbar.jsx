import React from 'react'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-32 mx-auto">
      <p className="text-4xl font-black">rhestr</p>
      <ul className="flex items-center gap-10 font-bold">
        <li className="hover:underline">
          <a href="#install" className="">Install</a>
        </li>
        <li className="">
          <a href="#users" className="">Our Users</a>
        </li>
        <li className="">
          <a href="#pricing" className="">Pricing</a>
        </li>
        <li className="">
          <a href="#faq" className="">Questions</a>
        </li>
        <li className="">
          <a href="#contact" className="">Get In Touch</a>
        </li>
      </ul>
      <ul className="flex items-center gap-6 text-lg font-bold">
        <li className="">Log In</li>
        <li className="border-2 border-indigo-900 py-2 px-4 rounded-md">Sign Up</li>
      </ul>
    </header>
  )
}

export default Navbar
