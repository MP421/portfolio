import React from 'react'
import evan_jones from '../../assets/rhestr/img/evanjones.jpg'
import lucy_evans from '../../assets/rhestr/img/lucyevans.jpg'
import hugo_williams from '../../assets/rhestr/img/hugowilliams.jpg'

const Counter = () => {
  return (
    <section className="flex items-center justify-center w-[95%] h-[150px] mx-auto bg-blue-100 rounded-xl border-2 border-indigo-950 md:w-[80%]">
      <ul className="flex items-center ml-2">
        <li className="-mr-8">
          <img src={ evan_jones } className="h-12 w-12 object-cover rounded-full border-4 border-indigo-950 md:h-20 md:w-20" alt="Evan Jones" />
        </li>
        <li className="-mr-8">
          <img src={ lucy_evans } className="h-12 w-12 object-cover rounded-full border-4 border-indigo-950 md:h-20 md:w-20" alt="Lucy Evans" />
        </li>
        <li>
          <img src={ hugo_williams } className="h-12 w-12 object-cover rounded-full border-4 border-indigo-950 md:h-20 md:w-20" alt="Hugo Williams" />
        </li>
      </ul>
      <p className="text-sm font-semibold ml-6 md:text-lg">+73,753 rhestr users have rocketed their productivity into the stratosphere! Join them today</p>
    </section>
  )
}

export default Counter
