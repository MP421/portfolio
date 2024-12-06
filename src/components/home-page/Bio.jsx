import React from 'react'
import pracpic1 from '../../assets/home-page/one.jpg'

const Bio = () => {
  return (
    <section className="w-[100dvw] md:w-[45%]">
      <img src={ pracpic1 } alt="A picture of myself, frontend web developer Jonathan Owen" className="border-[4px] border-indigo-800 w-[300px] h-[262.5px] object-cover object-center bg-black mx-auto md:w-[400px] md:h-[350px]" />
      <h1 className="text-4xl font-black mt-8 text-center md:text-6xl md:text-start">Frontend Specialist</h1>
      <h2 className="text-2xl font-bold mt-6 mb-10 text-center md:text-start">My name's Jonathan Owen. I build engaging, scalable and accessible user interfaces.</h2>
      <a href="#contact" className="flex w-[50%] mx-auto justify-center bg-[#1E1E1E] text-[#5190e0] text-xl font-bold py-3 rounded-full cursor-pointer hover:text-slate-100 duration-100">Let's work together</a>
      <ul className="flex items-center justify-center gap-6 mt-6 text-xl">
        <li>
          <a href="https://github.com/MP421" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jonathan-owen-fullstack-specialist/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://bsky.app/profile/fullstackjon.bsky.social" target="_blank">
            <i class="fa-brands fa-bluesky"></i>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Bio
