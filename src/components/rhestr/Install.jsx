import React from 'react'
import install_illustration from '../../assets/rhestr/img/landingillustration.png'

const Install = () => {
  return (
    <section className="bg-indigo-950" id="install">
      <div className="flex items-center justify-between w-[80%] mx-auto">
        <img src={ install_illustration } className="h-auto w-1/2 object-cover object-center" alt="" />
        <div className="w-1/2 flex flex-col items-center gap-10">
          <a href="#" className="flex items-center justify-center gap-5 h-16 bg-blue-50 text-indigo-950 w-[350px] rounded-full">
            <i class="fa-brands fa-chrome text-3xl"></i>
            <p className="text-xl font-bold">Install on Chrome</p>
          </a>
          <a href="" className="flex items-center justify-center gap-5 h-16 bg-blue-50 text-indigo-950 w-[350px] rounded-full">
            <i class="fa-brands fa-firefox-browser text-3xl"></i>
            <p className="text-xl font-bold">Install on Firefox</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Install
