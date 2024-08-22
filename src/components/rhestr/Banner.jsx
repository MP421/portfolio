import React from 'react'
import speed from '../../assets/rhestr/img/speed.png'
import easytouse from '../../assets/rhestr/img/easytouse.png'
import customizable from '../../assets/rhestr/img/customizable.png'
import compatibility from '../../assets/rhestr/img/compatibility.png'
import collaborate from '../../assets/rhestr/img/collaborate.png'

const Banner = () => {
  return (
    <section className="bg-blue-50 h-[375px] flex flex-col justify-center">
      <div className="text-center mb-12">
        <p className="font-bold text-3xl mb-3">We make productivity easy</p>
        <p className="font-semibold text-xl w-1/2 mx-auto">rhestr is a task tracker engineered to optimise and easily manage your team's workload. The longest journey starts with a single step!</p>
      </div>
      <ul className="flex items-center justify-between w-[80%] mx-auto">
        <li className="flex flex-col items-center">
          <img src={ speed } className="h-14 w-14" alt="Speed" />
          <p className="font-bold mt-3">Speed</p>
        </li>
        <li className="flex flex-col items-center">
          <img src={ easytouse } className="h-14 w-14" alt="Easy to Use" />
          <p className="font-bold mt-3">Easy to Use</p>
        </li>
        <li className="flex flex-col items-center">
          <img src={ customizable } className="h-14 w-14" alt="Customisable" />
          <p className="font-bold mt-3">Customisable</p>
        </li>
        <li className="flex flex-col items-center">
          <img src={ compatibility } className="h-14 w-14" alt="Compatibility" />
          <p className="font-bold mt-3">Compatibility</p>
        </li>
        <li className="flex flex-col items-center">
          <img src={ collaborate } className="h-14 w-14" alt="Collaboration" />
          <p className="font-bold mt-3">Collaboration</p>
        </li>
      </ul>
    </section>
  )
}

export default Banner
