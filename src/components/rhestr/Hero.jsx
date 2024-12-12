import React from 'react'
import gif from '../../assets/rhestr/img/sky-productive-man-marking-tasks-as-completed.gif'

const Hero = () => {
  return (
    <section className="w-[95%] flex flex-col items-center justify-between mx-auto my-16 md:w-[80%] md:my-4 md:flex-row">
      <div className="text-center md:w-1/2 md:text-left">
        <p className="text-4xl font-black md:text-7xl">
          Daily Organiser
          <br/>
          Built For <span className="text-indigo-500">Speed</span>
        </p>
        <p className="text-2xl font-bold mt-4 mb-12">
          rhestr maximises your <span className="text-indigo-500">productivity</span> by
          <br/>
          organizing your bookmarks and keeping
          <br/>
          you in control
        </p>
        <a href="#install" className="bg-indigo-950 text-indigo-100 text-2xl font-bold rounded-lg px-10 py-4">Get Started For Free</a>
      </div>
      <div className="w-2/3 md:w-1/2">
        <img src={gif} alt="productive person marking tasks as completed" />
      </div>
    </section>
  )
}

export default Hero
