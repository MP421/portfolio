import React from 'react'
import ourteam from '../../assets/sams-patisseries/ourteam.jpg'

export default function Team() {
  return (
    <section className="w-full h-[600px] flex items-center">
      <img src={ourteam} className="w-1/2 h-full object-cover object-center" alt="" />
      <div className="w-1/2 h-full bg-[#202738] text-slate-50 text-lg flex flex-col justify-center pl-16 gap-5">
        <p className="text-[#B75E38]">OUR TEAM</p>
        <p className="text-4xl">Experts in pastry</p>
        <p>
          At our patisserie, our team of expert pastry chefs
          <br/>
          combines traditional techniques with innovative flair to
          <br/>
          create exquisite pastries and desserts.
        </p>
        <p>
          Each member brings a wealth of experience and a
          <br/>
          passion for perfection, ensuring every bite is a
          <br/>
          delightful experience.
        </p>
      </div>
    </section>
  )
}