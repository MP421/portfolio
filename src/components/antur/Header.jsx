import React from 'react'

const Header = () => {
  return (
    <header className="w-full h-[640px] relative" id="antur-header">
      <div className="absolute w-full h-full inset-0 bg-slate-950 opacity-35"></div>
      <section className="absolute left-[50%] translate-x-[-50%] w-[85%] h-full text-slate-50 mt-4">
        <div className="flex items-center justify-between">
          <p className="font-black text-4xl">Antur</p>
          <ul className="flex items-center gap-10 text-lg">
            <li className="hover:text-slate-300 duration-100">
              <a href="#places-to-go">Places To Go</a>
            </li>
            <li className="hover:text-slate-300 duration-100">
              <a href="#things-to-do">Things To Do</a>
            </li>
            <li className="hover:text-slate-300 duration-100">
              <a href="#latest-events">Latest Events</a>
            </li>
            <li className="hover:text-slate-300 duration-100">
              <a href="#about">About North Wales</a>
            </li>
            <li className="hover:text-slate-300 duration-100">
              <a href="#faq">Info</a>
            </li>
            <li className="hover:text-slate-300 duration-100">
              <a href="#contact">Keep Up To Date</a>
            </li>
          </ul>
        </div>
        <div className="absolute top-1/2 translate-y-[-50%]">
          <p className="text-6xl font-extrabold">
            <span className="italic">Antur</span> in <span className="text-[#FF1717]">North Wales</span>
          </p>
          <p className="text-xl mt-2 mb-12">
            <span className="italic">Antur</span> n. <span className="text-[#FF1717]">adventure</span>
          </p>
          <a href="#hero" className="text-3xl font-bold border-2 border-slate-50 rounded-lg px-14 py-2 hover:text-slate-300 hover:border-slate-300 duration-100">SEE THE SIGHTS</a>
        </div>
      </section>
    </header>
  )
}

export default Header
