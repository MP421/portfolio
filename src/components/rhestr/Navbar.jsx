import React from 'react'

const Navbar = () => {
  return (
    <section className="flex items-center justify-between w-[80%] mx-auto pt-3">
      <p className="text-2xl font-black">rhestr</p>
      <ul className="flex items-center gap-10 font-bold text-md">
        <li className="hover:underline">
          <a href="#install" className="">Install</a>
        </li>
        <li className="hover:underline">
          <a href="#users" className="">Our Users</a>
        </li>
        <li className="hover:underline">
          <a href="#pricing" className="">Pricing</a>
        </li>
        <li className="hover:underline">
          <a href="#faq" className="">Questions</a>
        </li>
        <li className="hover:underline">
          <a href="#contact" className="">Get In Touch</a>
        </li>
      </ul>
      <ul className="flex items-center gap-6 text-md font-bold">
        <li className="cursor-pointer">Log In</li>
        <li className="cursor-pointer border-2 border-indigo-950 bg-indigo-200 py-2 px-4 rounded-md">Sign Up</li>
      </ul>
    </section>
  )
}

export default Navbar
