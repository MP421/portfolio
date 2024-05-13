import React from 'react'

const Bio = () => {
  return (
    <section className="w-[45%]">
      <img src="" alt="A picture of myself, frontend web developer Jonathan Owen" className="w-[500px] h-[300px] bg-black text-slate-50 mx-auto" />
      <h1 className="text-6xl font-black mt-16">Frontend Specialist</h1>
      <h2 className="text-2xl font-bold mt-6 mb-10">My name's Jonathan Owen. I build engaging, scalable and accessible user interfaces.</h2>
      <a href="#contact" className="flex w-[45%] mx-auto justify-center bg-[#1E1E1E] text-[#39AEF0] text-xl font-bold py-3 rounded-full cursor-pointer hover:text-slate-100 duration-100">Let's work together</a>
      <ul className="flex items-center justify-center gap-6 mt-6 text-xl">
        <li>
          <a href="" target="_blank">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Bio
