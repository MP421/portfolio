import React from 'react'

const Hero = () => {
  return (
    <section className="w-[80%] h-[750px] flex items-center justify-between mx-auto">
      <div className="w-1/2">
        <p className="text-7xl font-black">
          Daily Organiser
          <br/>
          Built For <span className="text-indigo-500">Speed</span>
        </p>
        <p className="text-2xl font-bold mt-4 mb-12">
          rhestr maximises your <span className="text-indigo-500">productivity</span> by
          <br/>
          organizing your tasks and keeping
          <br/>
          you in control
        </p>
        <a href="#" className="bg-indigo-950 text-indigo-100 text-2xl font-bold rounded-lg px-12 py-4">Get Started For Free</a>
      </div>
      <div className="w-1/2 relative">
        <div className="h-[300px] w-[450px] border-4 border-indigo-950 rounded-2xl bg-indigo-950 absolute top-[50%] right-0 translate-y-[-65%]"></div>
      </div>
    </section>
  )
}

export default Hero
